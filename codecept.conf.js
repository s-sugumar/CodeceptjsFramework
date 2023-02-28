exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://telescope-dev.sourcef.us/login',
      show: true,
      browser: 'chromium',
      timeout: 30000,
      waitForAction: 2000,
      chromium: {
           args: [ "--use-fake-ui-for-media-stream", "--allow-file-access-from-files", "--use-fake-device-for-media-stream","--auto-select-desktop-capture-source" ]
       },
       //video: true,
        trace: true,
      windowSize: '1920x1080'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
    },
    allure: {
      enabled: true,
    },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: 'test/*_test.js',
  name: 'Login',

};