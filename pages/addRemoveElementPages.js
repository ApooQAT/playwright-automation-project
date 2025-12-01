import { expect } from "@playwright/test";

export class AddRemoveElementPage {
    constructor (page) {
        this.page = page;
        this.title = page.locator('h3');
        this.addButton = page.getByRole('button', {name: 'Add Element'});
        this.deleteButton = page.locator('.added-manually');
    }
    async goToAddRemovePage (){
        await this.page.click('text=Add/Remove Elements');
        await expect(this.page).toHaveURL(/\/add_remove_elements/);
    }
    async uiVerification (){
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Add/Remove Elements');
        
        await expect(this.addButton).toBeVisible();
        await expect(this.addButton).toContainText('Add Element');

        await expect(this.deleteButton).toBeHidden();
    }
    async addButtonClick (){
        await this.addButton.click();

        await expect(this.deleteButton).toBeVisible();
        await expect(this.deleteButton).toContainText('Delete')
    }
    async deleteButtonClick (){
        await this.addButtonClick();

        await this.deleteButton.click();
        await this.page.waitForTimeout(500);
        await expect(this.deleteButton).toBeHidden();
    }
    async clickAddButtonLoop (){
        for(let i = 0; i < 3; i++){
            await this.addButton.click();
            await expect(this.deleteButton.nth(i)).toBeVisible();
        }
        await expect(this.deleteButton).toHaveCount(3);
    }
    async refreshPage (){
        await this.addButtonClick();
        
        await this.page.reload();

        await this.page.waitForTimeout(500);
        await expect(this.deleteButton).toBeHidden();
    }
}