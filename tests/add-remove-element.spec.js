import { test, expect} from '@playwright/test'
import { AddRemoveElementPage } from '../pages/addRemoveElementPages';

test.describe('TS001 - Testing out the Add/Remove Element Webpage', () =>{
    let addRemoveElementPage;
    test.beforeEach(async ({ page }) =>{
        addRemoveElementPage = new AddRemoveElementPage(page);
        await page.goto('https://the-internet.herokuapp.com');
        await addRemoveElementPage.goToAddRemovePage();
    });
    test('TC001 - Validating the Add/Remove Element Page UI', async ({ page }) =>{
        await addRemoveElementPage.uiVerification();
    });
    test('TC002 - Testing out the Add Element button', async ({ page }) =>{
        await addRemoveElementPage.addButtonClick();
    });
    test('TC003 - Testing out the Delete button', async ({ page }) =>{
        await addRemoveElementPage.deleteButtonClick();
    });
    test('TC004 - Clicking the Add Element three times', async ({ page }) =>{
        await addRemoveElementPage.clickAddButtonLoop();
    });
    test('TC005 - Checking if Delete button will dissappear after refreshing the page', async ({ page }) =>{
        await addRemoveElementPage.refreshPage();
    });
});