module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@UseCases": "./src/UseCases",
        "@Repositories": "./src/Repositories",
        "@Models": "./src/Models",
        "@Config": "./src/Config"
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}