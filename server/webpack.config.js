const path = require('path')

module.exports = (env) => {
  let watch = env.production ? false : true
  let mode = env.production ? 'production' : 'development'
  return {
    watch,
    stats: { warnings: false },
    entry: './index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'compiled.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    target: 'node',
    mode,
  }
}
