// @flow strict
import { test } from '@playwright/test';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Card Accessibility check', async ({ page }) => {
  await page.goto('/ios/card/card');
  await expectAccessiblePage({ page });
});
