import { test, expect } from '@playwright/test';

test('Deve adicionar dois produtos ao carrinho', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: ' Products' }).click();

  await page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page.getByRole('link', { name: ' View Product' }).first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: ' View Product' }).nth(1).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();

  await expect(page.getByText('Rs.').nth(1)).toBeVisible();
  await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' }).getByRole('button')).toBeVisible();
  await expect(page.getByText('Rs.').nth(1)).toBeVisible();
  await expect(page.getByText('Rs.').nth(2)).toBeVisible();
  await expect(page.getByRole('row', { name: 'Product Image Men Tshirt Men' }).getByRole('button')).toBeVisible();
  await expect(page.getByText('Rs.').nth(3)).toBeVisible();
});