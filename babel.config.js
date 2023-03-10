module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          assets: './src/assets',
          screens: './src/screens',
          layout: './src/layout',
          data: './src/data',
          services: './src/services',
          config: './src/config',
          types: './src/types',
          hooks: './src/hooks',
          navigation: './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
