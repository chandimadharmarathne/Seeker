module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
};

{
  "prettier/prettier"; [
    "error",
    {
      "singleQuote": true,
      "parser": "flow"
    }
  ]
}
{
  "prettier/prettier"; [
    "error",
    {},
    {
      "usePrettierrc": false
    }
  ]
}
{
  "prettier/prettier"; [
    "error",
    {},
    {
      "fileInfoOptions": {
        "withNodeModules": true
      }
    }
  ]
}