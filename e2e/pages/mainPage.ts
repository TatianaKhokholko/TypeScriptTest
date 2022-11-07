import {Page} from 'puppeteer';

/**
 * List of elements on the Main page
 *
 * @author Tatiana Khokholko
 */
export const mainPage = {
  navigationBarStart: {
    value: 'li[data-testid="NavigationBarItem-Start"]'
  },
  navigationBarAccount: {
    value: 'li[data-testid="NavigationBarItem-Account"]'
  },
  navigationBarProfile: {
    value: 'li[data-testid="NavigationBarItem-Profile"]'
  },
  startMainPage: {
    value: 'div[data-testid="StartPage-Root"]'
  },
  productsCardSection: {
    value: 'section[data-testid="YourProducts-Root"]',
    sellProductInfo: {
      value: 'div[data-testid="inperium-sell-product-info"]'
    },
    productNameInfo: {
      value: 'h3[data-testid="YourProductsCard-ProductName"]'
    },
    planNameInfo: {
      value: 'p[data-testid="YourProductsCard-PlanName"]'
    },
    sellUpgradePlanButton: {
      value: 'a[data-testid="YourProductsCard-UpgradeButton"]'
    },
    sellOpenButton: {
      value: 'button[data-testid="YourProductsCard-OpenButton"]'
    }
  },
  yourProfileSection: {
    value: 'div[data-testid="YourProfile-Root"]',
    avatarIcon: {
      value: 'div[data-testid="YourProfile-Avatar"]'
    },
    fullNameInfo: {
      value: 'h3[data-testid="My profile"]'
    },
    myProfileLink: {
      value: '//a[normalize-space(text())="My profile"]'
    },
    securityLink: {
      value: '//a[normalize-space(text())="Security & privacy"]'
    },
    logoutLink: {
      value: '//a[normalize-space(text())="Log out"]'
    }
  },
  quickLinksSection: {
    value: 'section[data-testid="QuickLinks-Root"]',
    documentationLink: {
      value: '//a[normalize-space(text())="Documentation"]'
    },
    supportLink: {
      value: '//a[normalize-space(text())="Support"]'
    },
    websiteLink: {
      value: '//a[normalize-space(text())="Website"]'
    }
  },
  otherProductsCardSection: {
    value: 'section[data-testid="OtherProductsCard-Root"]'
  }
};

/**
 * Click button Open on Main page
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function openSell(page: Page) {
  await page.waitForSelector(mainPage.productsCardSection.value);
  const openSellButton = await page.waitForSelector(mainPage.productsCardSection.sellOpenButton.value);
  await openSellButton?.click();
}
