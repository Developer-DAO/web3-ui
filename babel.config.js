const BABEL_ENV = process.env.BABEL_ENV;
const cjs = BABEL_ENV === 'cjs';

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
