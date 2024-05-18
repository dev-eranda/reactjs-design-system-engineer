module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/.*\\.test)\\.(ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transformIgnorePatterns: [
    "node_modules/(?!@test.ds.e/foundation)", // Adjust this pattern to include any other ES modules
  ],
};
