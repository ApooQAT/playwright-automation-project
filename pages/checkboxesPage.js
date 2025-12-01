import { expect } from '@playwright/test'

export class CheckboxPage {
    constructor (page) {
        this.page = page;
        this.title = page.locator('h3');
        this.firstCheckBox = page.getByRole('checkbox').nth(0);
        this.secondCheckBox = page.getByRole('checkbox').nth(1);
    }
    async goToCheckBoxPage (){
        await this.page.click('text=Checkboxes');
        await expect(this.page).toHaveURL(/\/checkboxes/);
    }
    async uiVerification (){
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Checkboxes');

        await expect(this.firstCheckBox).toBeVisible();
        await expect(this.secondCheckBox).toBeVisible();
    }
    async defaultState (){
        await this.uiVerification();
        await expect(this.firstCheckBox).not.toBeChecked();
        await expect(this.secondCheckBox).toBeChecked();
    }
    async checkingBox (){
        await this.uiVerification();
        await this.firstCheckBox.check();
        await expect(this.firstCheckBox).toBeChecked();
        await expect(this.secondCheckBox).toBeChecked();
    }
    async uncheckBox (){
        await this.checkingBox();
        await this.page.waitForTimeout(500);

        await this.firstCheckBox.uncheck();
        await this.secondCheckBox.uncheck();

        await expect(this.firstCheckBox).not.toBeChecked();
        await expect(this.secondCheckBox).not.toBeChecked();
    }
}