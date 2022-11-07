import {Page} from 'puppeteer';

/**
 * Class works with standard control "Button"
 *
 * @author Tatiana Khokholko
 */
export const buttonComponent = {
  createButton: {
    value: './/button[contains(@data-testid, "Page-CreateButton")]'
  },
  importButton: {
    value: './/button[contains(@data-testid, "Page-ImportButton")]'
  },
  exportButton: {
    value: './/button[contains(@data-testid, "Page-ExportButton")]'
  },
  searchInput: {
    value: './/input[contains(@data-testid, "Page-SearchField")]'
  },
  viewActionsButton: {
    value: '//span[normalize-space(text())="View actions"]'
  },
  createNewFormDialog: {
    createAndAddAnotherFormButton: {
      value: './/button[contains(@data-testid, "FormFooter-CreateAndAddAnotherButton")]'
    },
    createFormButton: {
      value: './/button[contains(@data-testid, "FormFooter-CreateButton")]'
    },
    closeFormButton: {
      value: './/button[contains(@data-testid, "FormFooter-CloseButton")]'
    }
  },
  addFilterButton: {
    value: './/button[@data-testid="FilterEditor-AddFilterButton"]'
  },
  activityCreateButton: {
    value: './/button[@data-testid="Activities-CreateButton"]'
  }
};

/**
 * Click on 'Create' button for different pages
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function create(page: Page) {
  const createButton = await page.waitForXPath(buttonComponent.createButton.value);
  await createButton?.click();
}

/**
 * Click on 'Submit' button for different pages and sections
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function submit(page: Page) {
  const submitButton = await page.waitForXPath(buttonComponent.createNewFormDialog.createFormButton.value);
  await submitButton?.click();
  await page.waitForNavigation();
}
