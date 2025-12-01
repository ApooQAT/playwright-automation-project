import { expect } from '@playwright/test'
import { table } from 'console';

export class ChallengingDomPage {
    constructor (page) {
        this.page = page;
        this.title = page.locator('h3');
        this.dynamicTable = page.locator('table');
        this.dynamicCanvas = page.locator('#canvas');

        this.firstBtn = page.locator('.button').nth(0);
        this.secondBtn = page.locator('.button.alert');
        this.thirdBtn = page.locator('.button.success');
    }
    async goToChallengingDomPage (){
        await this.page.click('text=Challenging DOM');
        await expect(this.page).toHaveURL(/\/challenging_dom/);
    }
    async uiVerification (){
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Challenging DOM');
        
        await expect(this.firstBtn).toBeVisible();
        await expect(this.secondBtn).toBeVisible();
        await expect(this.thirdBtn).toBeVisible();
        
        await expect(this.dynamicTable).toBeVisible();
        
        await expect(this.dynamicCanvas).toBeVisible();
    }
    async btnFunctionality (){
        let btnClicks = [this.firstBtn,this.secondBtn,this.thirdBtn];
        for(let i = 0; i < btnClicks.length; i++){
            let beforeClick = await this.dynamicCanvas.screenshot();
            const allBtnTexts = await Promise.all(btnClicks.map(b => b.textContent()));
            
            await btnClicks[i].click();
            
            let afterClick = await this.dynamicCanvas.screenshot();
            const allBtnTextsAfter = await Promise.all(btnClicks.map(b => b.textContent()));
            
            const hasChanged = allBtnTexts.some((text, idx) => text !== allBtnTextsAfter[idx]);
            expect(afterClick.equals(beforeClick)).toBe(false);
            expect(hasChanged).toBe(true);
        }
    }
}