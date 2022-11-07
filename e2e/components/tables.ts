import {Page} from 'puppeteer';

/**
 * Class works with standard "Table"
 *
 * @author Tatiana Khokholko
 */
export const tableComponent = {
  dataGridTable: {
    value: './/div[contains(@data-testid, "Page-DataGrid")]'
  },
  editColumnsButton: {
    value: './/button[contains(@data-testid, "Page-EditColumnsButton")]'
  },
  profileHighlightCardXpath: {
    value: './/h1[contains(@data-testid, "ProfileHighlightCard")]/text()'
  },
  profileHighlightCardCss: {
    value: 'h1[data-testid="ProfileHighlightCard-EntityNameHeading"]'
  }
};

export async function getVisibleTableItem(page: Page, text: string) {
  const item = await page.waitForXPath(`.//div[contains(text(),'${text}')]`, {visible: true});
  expect(item).toBeTruthy();
  return item;
}

export async function getkVisibleCreatedItem(page: Page, text: string) {
  const item = await page.waitForXPath(`.//h1[contains(text(),'${text}')]`, {visible: true});
  expect(item).toBeTruthy();
  return item;
}
