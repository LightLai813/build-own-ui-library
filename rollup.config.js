import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js', // 指定入口文件
    output: [
        {
            file: 'dist/cjs/index.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/esm/index.js',
            format: 'esm',
            sourcemap: true
        },
        {
            file: 'dist/umd/index.js',
            format: 'umd',
            name: 'UI-library',
            sourcemap: true
        },
    ],
    plugins: [
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss(),
    ]
}