import {Page, Locator} from '@playwright/test'
class MonsterCardModules {
    readonly page: Page
    readonly monsterCard: Locator = undefined as any;
    readonly monsterInputName: Locator
    readonly monsterInputHP: Locator
    readonly monsterInputDefense: Locator
    readonly monsterInputAttack: Locator
    readonly monsterInputSpeed: Locator
    readonly deleteButton: Locator
    readonly allFieldRequired: Locator
    readonly thereAreNoMonsterMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.monsterInputName = page.locator('[data-testid="monster-name"]')
        this.monsterInputHP = page.locator('input[name="hp"]')
        this.monsterInputDefense = page.locator('input[name="defense"]')
        this.monsterInputAttack = page.locator('input[name="attack"]')
        this.monsterInputSpeed = page.locator('input[name="speed"]')
        this.deleteButton = page.locator('[data-testid="btn-create-monster"]')
        this.allFieldRequired = page.getByTestId('alert-required-fields')
        this.thereAreNoMonsterMessage = page.locator('[data-testid="dynamic-title"]', {hasText: 'There are no monsters'})
    }

    
}

export default MonsterCardModules