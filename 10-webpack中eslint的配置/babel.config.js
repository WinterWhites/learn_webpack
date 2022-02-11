module.exports = {
  presets: [
    [require('@babel/preset-env'), {
      useBuiltIns: 'entry',
      corejs: 3
    }],
    [require('@babel/preset-react')],
    [require('@babel/preset-typescript')]
  ],
  plugins: [
    // [require('@babel/plugin-transform-runtime'), {
    //   corejs: 3
    // }],
  ]
}