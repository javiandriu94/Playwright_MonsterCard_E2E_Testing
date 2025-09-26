import {Page, Locator} from '@playwright/test'
class MonsterCardModules {
    readonly page: Page
    readonly monsterInputName: Locator
    readonly monsterInputHP: Locator
    readonly monsterInputDefense: Locator
    readonly monsterInputAttack: Locator
    readonly monsterInputSpeed: Locator
    readonly createMonsterButton: Locator
    readonly allFieldRequired: Locator
    readonly thereAreNoMonsterMessage: Locator
    readonly yourMonsterMessage: Locator
    readonly monsterCardCreated: Locator
    readonly deleteMonsterButton: Locator
    readonly imageMonsterCard: Locator

    constructor(page: Page) {
        this.page = page
        this.monsterInputName = page.locator('input[name="name"]')
        this.monsterInputHP = page.locator('input[name="hp"]')
        this.monsterInputAttack = page.locator('input[name="attack"]')
        this.monsterInputDefense = page.locator('input[name="defense"]')
        this.monsterInputSpeed = page.locator('input[name="speed"]')
        this.createMonsterButton = page.locator('[data-testid="btn-create-monster"]')
        this.allFieldRequired = page.getByTestId('alert-required-fields')
        this.thereAreNoMonsterMessage = page.locator('[data-testid="dynamic-title"]', {hasText: 'There are no monsters'})
        this.yourMonsterMessage = page.locator('[data-testid="dynamic-title"]', {hasText: 'Your Monsters'})
        this.monsterCardCreated = page.locator('[data-testid="monster-card"]')
        this.deleteMonsterButton = page.locator('[data-testid="btn-delete"]')
        this.imageMonsterCard = page.getByTestId('monster-image')

    }

    
}

export default MonsterCardModules