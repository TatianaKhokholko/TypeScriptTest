import {Page} from 'puppeteer';
import dealData from 'src/e2e/data/dealSimpleActions.json';

import {submit} from '../components/buttons';
import {
  openAssignToUserCaretDown,
  openPipelineCaretDown,
  openStageCaretDown,
  selectValueOfDropdown
} from '../components/dropdowns';

/**
 * List of elements on the Deals page
 *
 * @author Tatiana Khokholko
 */
export const dealsPage = {
  pageRoot: {
    value: 'div[data-testid="DealsBoardPage-Root"]'
  },
  createPropertiesDeal: {
    createDealLabel: {
      value: './/h1[normalize-space(text())="Create deal"]'
    },
    createNameLabel: {
      value: './/label[normalize-space(text())="Name"]'
    },
    createPipelineLabel: {
      value: './/label[normalize-space(text())="Pipeline"]'
    },
    createStageLabel: {
      value: './/label[normalize-space(text())="Stage"]'
    },
    createCompanyLabel: {
      value: './/label[normalize-space(text())="Associate with company"]'
    },
    createAssignToUserLabel: {
      value: './/label[normalize-space(text())="Assign to user"]'
    },
    createAssociateWithContactsLabel: {
      value: './/label[normalize-space(text())="Associate with contacts"]'
    },
    createDealNameInput: {
      value: 'input[data-testid="CreateDealForm-DealNameTextField"]'
    },
    createPipelineInput: {
      value: 'input[data-testid="CreateDealForm-SelectPipelineComboBox"]'
    },
    createStageInput: {
      value: 'input[data-testid="CreateDealForm-SelectStageComboBox"]'
    },
    createCompanyInput: {
      value: 'input[data-testid="CreateDealForm-SelectCompanyComboBox"]'
    },
    createAssignToUserInput: {
      value: 'input[data-testid="CreateDealForm-SelectUserComboBox"]'
    }
  },
  propertiesDeal: {
    pipelinePropertyField: {
      value: 'input[data-testid="Pipeline-SelectPipelinePropertyField"]'
    },
    stagePropertyField: {
      value: 'input[data-testid="Stage-SelectStagePropertyField"]'
    },
    closwDatePropertyField: {
      value: 'TO DO'
    }
  }
};

/**
 * Create new deal, fill in the required fields to create
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function createNewDeal(page: Page) {
  await page.waitForXPath(dealsPage.createPropertiesDeal.createNameLabel.value);
  const dealNameField = await page.$(dealsPage.createPropertiesDeal.createDealNameInput.value);
  await dealNameField?.type(dealData.Deal1.name);

  await page.waitForXPath(dealsPage.createPropertiesDeal.createPipelineLabel.value);
  const pipelineSelect = dealData.Deal1.pipeline;
  await openPipelineCaretDown(page);
  await selectValueOfDropdown(page, pipelineSelect);

  await page.waitForXPath(dealsPage.createPropertiesDeal.createStageLabel.value);
  const stageSelect = dealData.Deal1.stage;
  await openStageCaretDown(page);
  await selectValueOfDropdown(page, stageSelect);

  await page.waitForXPath(dealsPage.createPropertiesDeal.createAssignToUserLabel.value);
  const userNameSelect = dealData.Deal1.assignToUser;
  await openAssignToUserCaretDown(page);
  await selectValueOfDropdown(page, userNameSelect);
  await submit(page);
}
