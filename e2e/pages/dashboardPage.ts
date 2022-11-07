import {Page} from 'puppeteer';

/**
 * List of elements on the Dashboard page
 *
 * @author Tatiana Khokholko
 */
export const dashboardPage = {
  navbarSection: {
    navigationBarButton: {
      value: 'li[data-testid="NavigationBarItem-Dashboard"]'
    },
    toCompaniesButton: {
      value: 'li[data-testid="NavigationBarItem-Companies"]'
    },
    toContactsButton: {
      value: 'li[data-testid="NavigationBarItem-Contacts"]'
    },
    toDealsButton: {
      value: 'li[data-testid="NavigationBarItem-Deals"]'
    },
    toActivitiesButton: {
      value: 'li[data-testid="NavigationBarItem-Activities"]'
    },
    toMessageCenterButton: {
      value: 'li[data-testid="NavigationBarItem-MessageCenter"]'
    },
    toPaymentCenterButton: {
      value: 'li[data-testid="NavigationBarItem-PaymentCenter"]'
    },
    toReportsButton: {
      value: 'li[data-testid="NavigationBarItem-Reports"]'
    },
    toSettingsButton: {
      value: 'a[data-testid="NavigationBarItem-Settings"]'
    },
    toGlobalSearchButton: {
      value: 'li[data-testid="NavigationBarItem-GlobalSearch"]'
    },
    toUserBarButton: {
      value: 'li[data-testid="NavigationBarUser-Button"]'
    }
  }
};

/**
 * Open the Companies page on navigation bar
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openCompanies(page: Page) {
  const openCompaniesButton = await page.waitForSelector(dashboardPage.navbarSection.toCompaniesButton.value);
  openCompaniesButton?.click();
}

/**
 * Open the Contacts page on navigation bar
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openContacts(page: Page) {
  const openContactsButton = await page.waitForSelector(dashboardPage.navbarSection.toContactsButton.value);
  openContactsButton?.click();
}

/**
 * Open the Deals page on navigation bar
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openDeals(page: Page) {
  const openDealsButton = await page.waitForSelector(dashboardPage.navbarSection.toDealsButton.value);
  openDealsButton?.click();
}
