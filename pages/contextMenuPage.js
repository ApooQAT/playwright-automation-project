import { expect} from '@playwright/test'

export class ContextMenuPage {
    constructor (page) {
        this.page = page;
        this.title = page.locator('h3');
        this.firstParagraph = page.locator('p').nth(0);
        this.secondParagraph = page.locator('p').nth(1);
        this.hotSpot = page.locator('#hot-spot');
    }
    async goToContextMenuPage (){
        await this.page.click('text=Context Menu');
        await expect(this.page).toHaveURL(/\/context_menu/);
    }
    async uiVerification (){
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Context Menu');

        await expect(this.firstParagraph).toBeVisible();
        await expect(this.firstParagraph).toContainText('Context menu');

        await expect(this.secondParagraph).toBeVisible();
        await expect(this.secondParagraph).toContainText('Right-click');

        await expect(this.hotSpot).toBeVisible();
    }
    async rmbClick (){
        await this.hotSpot.waitFor({ state: 'visible'});
        const [alert] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.hotSpot.click(
                await this.hotSpot.boundingBox().then(b => b.x + b.width / 2),
                await this.hotSpot.boundingBox().then(b => b.y + b.height / 2),
                {button: 'right'})
        ]);
        expect(alert.message()).toBe('You selected a context menu');

        await alert.accept();
    }
    async lmbClick() {
        let dialogAppeared = false;
        this.page.once('dialog', dialog => {
            dialogAppeared = true;
            dialog.dismiss();
        });
         await this.hotSpot.click({ button: 'left' });
         expect(dialogAppeared).toBe(false);
    }
    async rmbOutsideArea (){
        let dialogAppeared = false;
        this.page.once('dialog', dialog => {
            dialogAppeared = true;
            dialog.dismiss();
        });
        await this.page.mouse.click(100,200);
        expect(dialogAppeared).toBe(false);
    }
}