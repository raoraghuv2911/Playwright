import test from '@playwright/test';

test(`Edit lead user`, async({page}) =>{

await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.waitForTimeout(2000);

//login
await page.locator("#username").fill("demoSalesManager");
await page.locator("#password").fill("crmsfa");
await page.locator(".decorativeSubmit").click();
await page.locator("//a[contains(text(), 'CRM/SFA')]").click();

//Lead creation
await page.locator("//a[contains(text(), 'Leads')]").click();
await page.locator("//a[contains(text(), 'Create Lead')]").click();
await page.locator("#createLeadForm_companyName").fill("TCSLtd");
await page.locator("#createLeadForm_firstName").fill("Raghavendra");
await page.locator("#createLeadForm_lastName").fill("Rao");
await page.locator("//input[@class = 'smallSubmit']").click();
await page.waitForTimeout(2000);

//Edit and update
await page.locator("//a[contains(text(), 'Edit')]").click();
await page.locator("#updateLeadForm_companyName").fill("ABCLtd");
await page.locator("(//input[@name='submitButton'])[1]").click();


})