import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs';
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./lib/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "./es/index.js",
      format: "esm",
      sourcemap: true
    },
  ],
  external: ['lodash','moment','react','antd'] /** 外部模块 */,
  //隐掉(!) this has been rewritten to undefined这个报错，自定义警告事件
  onwarn: function (warning) {
    if (warning.code === "THIS_IS_UNDEFINED") {
      return;
    }
  },
  plugins: [
    commonjs(),
    resolve(),  /** 告诉 Rollup 如何查找外部模块 */
    postcss({
      modules: true,
      // extensions: [".less", ".css"],
      // use: [["less", { javascriptEnabled: true }]],
      extract: false,
    }),

    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
  ],
};
