import {Page, expect} from '@playwright/test'
import MonsterCardModules from '../modules/monsterCardModules'

class MonsterCardPage {
    private page: Page;
    private monster: MonsterCardModules;

    constructor (page:Page){
        this.page= page;
        this.monster= new MonsterCardModules(page)
        
    }

    async navigateToMonsterCardApp(){
        await this.page.goto('http://localhost:3000/')
    }
    

    async selectMonster(page: Page, monsterNumber: number) {
        await page.click(`[data-testid="monster-${monsterNumber}"]`);
    }

    async clickDeleteButton(){
        await this.monster.deleteButton.click()
    }

    async InputFieldsMessageVisible() {
        await this.monster.allFieldRequired.waitFor({ state: 'visible' })
        await expect(this.monster.allFieldRequired).toBeVisible();
    }

    async monsterNotCreated(){
        await expect(this.monster.thereAreNoMonsterMessage).toBeVisible();
    }
}
export default MonsterCardPage