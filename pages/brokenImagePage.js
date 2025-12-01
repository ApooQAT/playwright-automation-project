import { expect } from '@playwright/test'

export class BrokenImagePage {
    constructor (page) {
        this.page = page;
        this.title = page.locator('h3');
        this.allImage = page.locator('img');
    }
    async goToBrokenImagePage (){
        await this.page.click('text=Broken Image');
        await expect(this.page).toHaveURL(/\/broken_images/);
    }
    async brokenImagePageVerification (){
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Broken Images');

        await expect(this.allImage).toHaveCount(3);
    }
    async brokenImageCheckerLoop (){
        const imgCount = await this.allImage.count();
        const brokenImages = [];
        for (let i = 0; i < imgCount; i++){
            const img = this.allImage.nth(i);
            const isBroken = await img.evaluate((node) => node.naturalWidth === 0);
            if(isBroken){
                const src = await img.getAttribute('src');
                brokenImages.push();
            }
        }
        return brokenImages;
    }
}