module.exports = {
  presets: [
    [require('@babel/preset-env'), {
      useBuiltIns: 'entry',
      corejs: 3
    }],
    [require('@babel/preset-react')]
  ],
  plugins: [
    // [require('@babel/plugin-transform-runtime'), {
    //   corejs: 3
    // }],
  ]
}