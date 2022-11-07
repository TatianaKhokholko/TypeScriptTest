import puppeteer from 'puppeteer';
import data from 'src/e2e/data/envVariables.json';

/**
 * The base class for all tests. It initializes the webDriver before test's run
 * and closes browser at the end of test execution.
 *
 * @author Tatiana Khokholko
 */
export function global() {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;
  const url = `${process.env.REACT_APP_ACCOUNT_URL}`;

  /**
   * Driver initialization, confirm basic authorization, adjusting to behavior view
   * and navigate to the application URL
   *
   * @author Tatiana Khokholko
   */
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: ['--start-maximized']
    });

    page = await browser.newPage();

    await page.setViewport({
      width: 0,
      height: 0
    });

    await page.authenticate({username: data.basicAuthenticate.username, password: data.basicAuthenticate.password});
    await page.goto(url, {waitUntil: 'domcontentloaded'});
  });

  /**
   * Unmount and cleanup DOM before the test is started
   */
  beforeEach(async () => {
    await page.deleteCookie();
    await page.waitForTimeout(1000);
  });

  afterAll(async () => {
    await browser.close();
  });

  return () => page;
}
