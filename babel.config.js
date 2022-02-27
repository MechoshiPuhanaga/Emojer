module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime'
  ],
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
};
