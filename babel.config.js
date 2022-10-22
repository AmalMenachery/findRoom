module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@svg': './src/assets/svg',
          '@modules': './src/modules',
          '@types': './src/types',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
