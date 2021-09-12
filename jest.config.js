module.exports = {
  preset: 'ts-jest/presets/js-with-babel-esm',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'json'],
  testEnvironment: 'node',
  moduleDirectories: ["node_modules", "src"],
  transform: {
    '^.+\\.(ts|tsx)?$': "ts-jest",
    "^.+\\.(js|jsx)$": "ts-jest",
  },
  verbose: true,
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    'ts-jest': {
      babelConfig: true,
      isolatedModules: true,
      tsconfig: 'tsconfig.json',
      useESM: true,
    },
  },
  testTimeout: 30000,
  passWithNoTests: true
};