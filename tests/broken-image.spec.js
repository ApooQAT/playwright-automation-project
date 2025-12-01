import { test,expect } from '@playwright/test'
import { BrokenImagePage } from '../pages/brokenImagePage';

test.describe('TS002 - Testing out the Broken Image Webpage', () =>{
    let brokenImage;
    test.beforeEach(async ({ page }) =>{
        brokenImage = new BrokenImagePage (page);
        await page.goto('https://the-internet.herokuapp.com');
        await brokenImage.goToBrokenImagePage();
    });
    test('TC001 - Verifying the Broken Image page UI', async ({ page }) =>{
        await brokenImage.brokenImagePageVerification();
    });
    test('TC002 - Verifying if the Images are broken', async ({ page }) =>{
        await brokenImage.brokenImageCheckerLoop();
        const broken = await brokenImage.brokenImageCheckerLoop();
        expect(broken.length).toBe(0);
    });
});