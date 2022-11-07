import {getkVisibleCreatedItem} from 'src/e2e/components/tables';
import dealData from 'src/e2e/data/dealSimpleActions.json';
import {createNewDeal, dealsPage} from '../../pages/dealsPage';
import {create} from '../../components/buttons';
import {login} from '../../pages/loginPage';
import {global} from '../baseDriverInitializeTest';
import {openSell} from '../../pages/mainPage';
import {openDeals} from '../../pages/dashboardPage';

/**
 * The set of tests for creating, editing and deleting deals
 *
 * @author Tatiana Khokholko
 */
describe('Create/update/delete deals', () => {
  const pageProvider = global();

  test('Should create deal', async () => {
    await login(pageProvider());
    await openSell(pageProvider());
    await openDeals(pageProvider());
    await create(pageProvider());
    await createNewDeal(pageProvider());
    expect(await pageProvider().$$eval(dealsPage.pageRoot.value, (el) => !!el)).toBeTruthy();
    await getkVisibleCreatedItem(pageProvider(), dealData.Deal1.name);
  }, 40000);
});
