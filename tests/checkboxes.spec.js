import { test, expect } from '@playwright/test'
import { CheckboxPage } from '../pages/checkboxesPage';

test.describe('TS004 - Testing out the Checkboxes Webpage', () =>{
    let checkboxPage;
    test.beforeEach(async ({ page }) =>{
        checkboxPage = new CheckboxPage (page);
        await page.goto('https://the-internet.herokuapp.com');
        await checkboxPage.goToCheckBoxPage();
    });
    test('TC001 - Verifying the Checkbox page UI', async ({ page }) =>{
        await checkboxPage.uiVerification();
    });
    test('TC002 - Verifying if the second checkbox is checked by default', async ({ page }) =>{
        await checkboxPage.defaultState();
    });
    test('TC003 - Verifying if both checkboxes can be in a checked state at the same time', async ({ page }) =>{
        await checkboxPage.checkingBox();
    });
    test('TC004 - Verifying if user can uncheck both checkboxes at the same time', async ({ page }) =>{
        await checkboxPage.uncheckBox();
    });
});