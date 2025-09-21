import { Given, When, Then } from "@cucumber/cucumber";
import MonsterCardPage from "../../pages/MonsterCardPage";
import { monsData } from "../../fixture/monstData";

Given('the application is open', async function () { 
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.navigateToMonsterCardApp();
});

When('clicks on "Create Monster"',  async function () {
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.clickCreateButton();
});

Then('should see a validation message for required fields', async function () {
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.InputFieldsMessageVisible();
  await monsterCard.monsterNotCreated();
});


Then('the monster card should not be created',  async function () {
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.monsterNotCreated();
});

When('selects a monster image and enter the data monster',{ timeout: 60 * 1000 },  async function () {
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.selectMonster(2);
  await monsterCard.fillMonsterForm(monsData)
  await monsterCard.clickCreateButton()

});

Then('a new monster card should be displayed',  async function () {
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.monsterCardCreated()
})

Then('delete the created monster card',  async function () {
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.deleteMonsterCard()
})





