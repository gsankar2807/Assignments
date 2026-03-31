import { test, expect } from '@playwright/test';
test('CSS selector syntax', async ({ page }) => {

//Parabank logo 
await page.locator('img[title="ParaBank"]');

//Experience the difference Text
await page.locator('p[class="caption"]');

//solution left menu
await page.locator('li[class="Solutions"]');


await page.locator('ul.leftmenu li a[href="about.htm"]');

await page.locator('ul.leftmenu li a[href="services.htm"]');

await page.locator('ul.leftmenu li a[href="http://www.parasoft.com/jsp/products.jsp"]');

await page.locator('ul.leftmenu li a[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]');

await page.locator('ul.leftmenu li a[href="admin.htm"]');
 
}
