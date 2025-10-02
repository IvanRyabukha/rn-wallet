module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-typescript',
    '@babel/preset-flow',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@constants': './src/constants',
          '@styles': './src/styles',
          '@lib': './src/lib',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
