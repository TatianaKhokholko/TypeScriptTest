Start tests:
If we need run all tests (unit + e2e), we use command         => yarn test
If we need run unit, we use command                           => yarn test:unit 
If we need run e2e, we use command                            => yarn test:e2e
If we need run only one of tests, we use command              => yarn test -- companySimpleActions.test.ts   


Use for e2e folder:
Jest - framework for testing (Yandex)
Puppeteer - library Node.js for using run and configure Chromium


Puppeteer settings for MacOS:
 - need to manually install chromium
 - specify an environment variable 'executablePath' in the method 'beforeAll()' in the class 'baseDriverInitializeTest.ts' after all arguments:

 beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: ['--start-maximized'],
      executablePath: 'path_on_your_computer/bin/cromium'
    });
