import { Given, When, Then, Before } from "@cucumber/cucumber";
import MonsterCardPage from "../../pages/MonsterCardPage";
import { monsData } from "../../fixture/monstData";
import { when } from "cypress/types/jquery";

Before(function () {
  this.monsterCard = new MonsterCardPage(this.page);
});

Given('the application is open', async function () { 
  await this.monsterCard.navigateToMonsterCardApp();
});

When('clicks on "Create Monster"',  async function () {
  await this.monsterCard.clickCreateButton();
});

Then('should see a validation message for required fields', async function () {
  await this.monsterCard.InputFieldsMessageVisible();
  await this.monsterCard.monsterNotCreated();
});


Then('the monster card should not be created',  async function () {
  await this.monsterCard.monsterNotCreated();
});

When('selects a monster image and enter the data monster',{ timeout: 60 * 1000 },  async function () {
  
  await this.monsterCard.selectMonster(2);
  await this.monsterCard.fillMonsterForm(monsData)
  await this.monsterCard.clickCreateButton()

});

Then('a new monster card should be displayed',  async function () {
  await this.monsterCard.validateMonsterCardCreated("withImage")
})

Then('delete the created monster card',  async function () {
  await this.monsterCard.deleteMonsterCard()
})

When('enter the data monster without image',{ timeout: 60 * 1000 },  async function () {
  await this.monsterCard.fillMonsterForm(monsData)
  await this.monsterCard.clickCreateButton()
});

Then('a new monster card should be displayed with default image',  async function () {
   await this.monsterCard.validateMonsterCardCreated("withoutImage")
}); 







