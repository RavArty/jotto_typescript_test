module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],
  preset: 'ts-jest/presets/js-with-ts',
  //The transform config just tells jest to use
  //ts-jest for ts / tsx files.
  transform: {
    '^.+\\.tsx?$': 'ts-jest' //,
    //  "^.+\\.svg$": "<rootDir>/svgTransform.js"
  },
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  //  "snapshotSerializers": ["enzyme-to-json/serializer"],
  //  "transformIgnorePatterns": ['<rootDir>/node_modules/']
  //  "moduleNameMapper": {
  //     "^.+\\.svg$": "<rootDir>/svgTransform.js" ,
  //     "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  //  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts']
};
