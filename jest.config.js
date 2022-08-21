
module.exports = {
	preset: 'jest-puppeteer',
	testEnvironment: 'jest-environment-puppeteer',
	testMatch: ["**/?(*.)+(spec|test).[t]s"],
	testPathIgnorePatterns: ['/node_modules/', 'dist'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	transform: {
		"^.+\\.ts?$": "ts-jest"
	},
	globalSetup: 'jest-environment-puppeteer/setup', // will be called once before all tests are executed
	globalTeardown: 'jest-environment-puppeteer/teardown' // will be called once after all tests are executed
}
