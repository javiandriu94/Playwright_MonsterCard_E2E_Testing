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
    

    async selectMonster(monsterNumber: number) {
        await this.page.click(`[data-testid="monster-${monsterNumber}"]`);
    }

    async clickCreateButton(){
        await this.monster.createMonsterButton.click()
    }

    async InputFieldsMessageVisible() {
        await this.monster.allFieldRequired.waitFor({ state: 'visible' })
        await expect(this.monster.allFieldRequired).toBeVisible();
    }

    async monsterNotCreated(){
        await expect(this.monster.thereAreNoMonsterMessage).toBeVisible();
    }

      async fillMonsterForm(data: { name: string, hp: string, attack: string, defense: string, speed: string }) {
        await this.monster.monsterInputName.fill(data.name);
        await this.monster.monsterInputHP.fill(data.hp);
        await this.monster.monsterInputAttack.fill(data.attack);
        await this.monster.monsterInputDefense.fill(data.defense);
        await this.monster.monsterInputSpeed.fill(data.speed);
    }

    async monsterCardCreated() {
        await this.monster.yourMonsterMessage.waitFor({ state: 'visible' })
        await expect(this.monster.yourMonsterMessage).toBeVisible();
        await this.monster.monsterCardCreated.waitFor({ state: 'visible' })
        await expect(this.monster.monsterCardCreated).toBeVisible();
        
    }

    async deleteMonsterCard() {
        await expect(this.monster.monsterCardCreated).toBeVisible();
        await this.monster.deleteMonsterButton.click();
        await expect(this.monster.monsterCardCreated).not.toBeVisible();
        await expect(this.monster.thereAreNoMonsterMessage).toBeVisible();
    }
}
export default MonsterCardPage