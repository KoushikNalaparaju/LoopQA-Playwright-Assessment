const { test, expect } = require('@playwright/test');
const { BASE_URL, CREDENTIALS, projectBoardTestCases } = require('./data/testData');
const { LoginPage } = require('./pages/LoginPage');

for (const tc of projectBoardTestCases) {
  test(`[${tc.id}] ${tc.description}`, async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    await loginPage.navigate(BASE_URL);
    await loginPage.login(CREDENTIALS.username, CREDENTIALS.password);

    // Navigate to project
    await page.getByRole('button', { name: tc.project }).click();

    // Find column and verify task is inside it
    const column = page.locator('div').filter({
      has: page.locator('h2').filter({ hasText: tc.expectedColumn }),
    }).last();

    const task = column.locator('div').filter({ hasText: tc.taskName }).first();
    await expect(task).toBeVisible();

    // Verify each tag
    for (const tag of tc.expectedTags) {
      await expect(task.locator('span').filter({ hasText: tag })).toBeVisible();
    }
  });
}