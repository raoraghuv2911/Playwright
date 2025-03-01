import { chromium, firefox, test } from "@playwright/test";


test("Launch browser", async ()=>{ 


const browser1 = await chromium.launch({channel:'msedge', headless: false});
const context = await browser1.newContext();
const page1 = await context.newPage();
await page1.goto("https://www.redbus.in/");
console.log(`The title of the page is ${ await page1.title()}`);
console.log(`The title of the page is ${ page1.url()}`);

const browser2 = await firefox.launch({channel:'firefox',headless: false});
const context2 = await browser2.newContext();
const page2 = await context2.newPage();
await page2.goto("https://www.flipkart.com/");
console.log(`The title of the page is ${ await page2.title()}`);
console.log(`The title of the page is ${ page2.url()}`);


}
)