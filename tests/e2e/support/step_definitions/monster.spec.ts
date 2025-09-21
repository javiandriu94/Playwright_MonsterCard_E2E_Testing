import { Given, When, Then } from "@cucumber/cucumber";
import MonsterCardPage from "../../pages/MonsterCardPage";


Given('the application is open', async function () { 
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.navigateToMonsterCardApp();
});

When('clicks on "Create Monster"',  async function () {
  const monsterCard = new MonsterCardPage(this.page);
  await monsterCard.clickDeleteButton();
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




