exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    '**_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
