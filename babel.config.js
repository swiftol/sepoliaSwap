module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: 'defaults',
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-nullish-coalescing-operator'
    ]
  };