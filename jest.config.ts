/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  roots: ['./src'], // diretório raiz,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts, tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    // see: https://github.com/kulshekhar/ts-jest/issues/414#issuecomment-517944368
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
}
