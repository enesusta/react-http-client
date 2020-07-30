module.exports = {
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
