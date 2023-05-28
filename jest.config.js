module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/main/config/setupTests.ts'],
  testEnvironment: 'jsdom'
}
