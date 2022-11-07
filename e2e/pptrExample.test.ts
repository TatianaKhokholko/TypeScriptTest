import puppeteer from 'puppeteer';

import {getDocument} from 'pptr-testing-library';

describe('example test for puppeteer', () => {
  it('pptr should work', async () => {
    // const {getByTestId, getByLabelText, getByText} = queries;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://google.com');

    // Grab ElementHandle for document
    const document = await getDocument(page);

    // eslint-disable-next-line no-console
    console.log(document);
  });
});
