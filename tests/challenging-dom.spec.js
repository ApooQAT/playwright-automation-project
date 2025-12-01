import { test,expect } from '@playwright/test'
import { ChallengingDomPage } from '../pages/challengingDomPage';

test.describe('TS003 - Testing out the Challenging DOM Webpage', () =>{
    let challengingDom;
    test.beforeEach(async ({ page }) =>{
        challengingDom = new ChallengingDomPage (page);
        await page.goto('https://the-internet.herokuapp.com');
        await challengingDom.goToChallengingDomPage();
    });
    test('TC001 - Verifying the Challenging DOM page UI', async ({ page }) =>{
        await challengingDom.uiVerification();
    })
    test('TC002 - Testing the buttons functionality', async ({ page }) =>{
        await challengingDom.btnFunctionality();
    });
});