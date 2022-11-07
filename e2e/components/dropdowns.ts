import {Page} from 'puppeteer';

import {companiesPage} from '../pages/companiesPage';

/**
 * Class works with standard control "Dropdown"
 *
 * @author Tatiana Khokholko
 */
export const dropdownComponent = {
  dropdownValue: {
    value: './/div[contains(@id, "inperium-convergo-aria")]//div//span'
  },
  caretDropdownButton: {
    value: '//button[contains(@id, "inperium-convergo-aria")]'
  },
  assignToUserCaretDownButton: {
    value:
      './/label[normalize-space(text())="Assign to user"]//ancestor::div[1]//button[contains(@id, "inperium-convergo-aria")]'
  },
  companyCaretDownButton: {
    value:
      './/label[normalize-space(text())="Company"]//ancestor::div[1]//button[contains(@id, "inperium-convergo-aria")]'
  },
  pipelineCaretDownButton: {
    value:
      './/label[normalize-space(text())="Pipeline"]//ancestor::div[1]//button[contains(@id, "inperium-convergo-aria")]'
  },
  stageCaretDownButton: {
    value:
      './/label[normalize-space(text())="Stage"]//ancestor::div[1]//button[contains(@id, "inperium-convergo-aria")]'
  },
  activeViewDropdown: {
    value: 'button[data-name="activeView"]'
  }
};

/**
 * Click on 'CaretDown' button for any dropdown
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openDropDown(page: Page) {
  const caretDownButton = await page.waitForXPath(`${dropdownComponent.caretDropdownButton.value}`);
  await caretDownButton?.click();
}

/**
 * Open dropdown for assign to user
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openAssignToUserCaretDown(page: Page) {
  const assignToUserCaretDownButton = await page.waitForXPath(`${dropdownComponent.assignToUserCaretDownButton.value}`);
  await assignToUserCaretDownButton?.click();
}

/**
 * Open dropdown for company
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openCompanyCaretDown(page: Page) {
  const companyCaretDownButton = await page.waitForXPath(`${dropdownComponent.assignToUserCaretDownButton.value}`);
  await companyCaretDownButton?.click();
}

/**
 * Open dropdown for pipeline (Deal page)
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openPipelineCaretDown(page: Page) {
  const pipelineCaretDownButton = await page.waitForXPath(`${dropdownComponent.pipelineCaretDownButton.value}`);
  await pipelineCaretDownButton?.click();
}

/**
 * Open dropdown for stage (Deal page)
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openStageCaretDown(page: Page) {
  const stageCaretDownButton = await page.waitForXPath(`${dropdownComponent.stageCaretDownButton.value}`);
  await stageCaretDownButton?.click();
}

/**
 * Select value of dropdown
 * Sometimes the back end doesn't matter in the dropdown. Added the new SyntaxError otherwise it will crash with a TimeoutException
 *
 * @param page instance, @param item string
 * @author Tatiana Khokholko
 */
export async function selectValueOfDropdown(page: Page, item: string) {
  try {
    const valueOfDropdown = await page.waitForXPath(`${dropdownComponent.dropdownValue.value}[text()='${item}']`);
    const valueOfDropdownInput = await page.$(companiesPage.createPropertiesCompany.createAssignedUserInput.value);
    if (valueOfDropdown) {
      await valueOfDropdown?.click();
    } else if (valueOfDropdownInput) {
      await valueOfDropdownInput?.type(item);
    }
  } catch (err) {
    throw new SyntaxError(`No results '${item}' for dropdown of backend side`);
  }
}
