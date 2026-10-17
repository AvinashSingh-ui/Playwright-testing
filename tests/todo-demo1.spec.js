import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy Grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Go for Walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Buy Grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Go for Walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-item-label')).toBeVisible();
  await expect(page.getByTestId('todo-item-label')).toContainText('Play');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator(".todo-list li")).toHaveCount(1);
});