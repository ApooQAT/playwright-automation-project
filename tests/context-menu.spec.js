import { test, expect} from '@playwright/test'
import { ContextMenuPage } from '../pages/contextMenuPage';

test.describe('TS005 - Testing out the Context Menu Webpage', () =>{
    let contextMenuPage;
    test.beforeEach(async ({ page }) =>{
        contextMenuPage = new ContextMenuPage (page);
        await page.goto('https://the-internet.herokuapp.com');
        await contextMenuPage.goToContextMenuPage();
    });
    test('TC001 - Verifying the Context Menu page UI', async ({ page }) =>{
        await contextMenuPage.uiVerification();
    });
    test('TC002 - Verify if an alert message will popup when you right click in the hot spot area', async ({ page }) =>{
        await contextMenuPage.rmbClick();
    });
    test('TC003 - Verifying if an alert messsage will popup when you left click in the hot spot area', async ({ page }) =>{
        await contextMenuPage.lmbClick();
    });
    test('TC004 - Verify if an alert message will popup if you right click outside the hot spot area', async ({ page }) =>{
        await contextMenuPage.rmbOutsideArea();
    });
});