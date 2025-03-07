import { firefox, test} from '@playwright/test';

test("Salesforce - Create Lead", async({page}) => {

    //test.setTimeout (40000);
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("#Login").click();
    await page.waitForTimeout(2000);

    //toggle menu
    await page.locator(`//button[@title="App Launcher"]`).click();
    await page.waitForTimeout(3000);

    //view All
    await page.locator(`//button[contains(text(), "View All")]`).click();

    //select sales
    await page.locator(`//p[text() = 'Sales']`).click();
    await page.waitForTimeout(2000);

    //click leads tab
    await page.locator(`//a[@href="/lightning/o/Lead/home"]`).click();
    await page.waitForTimeout(2000);

    //click new button
    await page.locator(`//div[@title = "New"]`).click();
    await page.waitForTimeout(1000);

    //select salutation dropdown
    await page.locator(`//button[@name="salutation"]`).click();
    await page.locator(`//*[text()="Mr."]`).click();

    //Enter lastName
    await page.locator(`//input[@name = 'lastName']`).fill("Rao");
    
    //Enter company name
    await page.locator(`//input[@name = 'Company']`).fill('ABC');

    //click save and verify lead
    await page.locator(`//button[@name='SaveEdit' and text() = 'Save']`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//*[text() = 'Mr.  RAO']`).isVisible();



}



)