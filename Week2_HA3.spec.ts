import test from '@playwright/test';

test (`Create individuals`, async({page}) =>
{

await page.goto("https:/login.salesforce.com");
await page.waitForTimeout(2000);
await page.locator("#username").fill("vidyar@testleaf.com")
await page.locator("#password").fill("Sales@123")
await page.locator("#Login").click();
await page.waitForTimeout(4000);

//toggle menu
await page.locator(`//button[@title="App Launcher"]`).click();
await page.waitForTimeout(3000);

//view All
await page.locator(`//button[contains(text(), "View All")]`).click();
await page.locator("//p[contains(text(), 'Individuals')]").click();
await page.waitForTimeout(6000)
await page.locator("//div[contains(text(), 'New')]").click()
await page.waitForTimeout(3000)
await page.locator("//input[@id = '133:1359;a']").fill("RVR")
await page.locator("//button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']").click()
await page.waitForTimeout(3000)


} )