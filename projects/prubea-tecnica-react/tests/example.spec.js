import { test, expect } from '@playwright/test';

const LOCAL_HOST_URL = 'http://localhost:5173/';
const PREFIX_CAT_IMAGE = 'https://cataas.com/';
const RANDOM_FACT_URL = 'https://catfact.ninja/fact'


test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textContent.length).toBeGreaterThan(0);
  await expect(imageSrc.startsWith(PREFIX_CAT_IMAGE)).toBeTruthy();
});

test('check if the image and text change', async( { page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  const button = await page.getByRole('button');
  await button.click();

  await page.waitForResponse(RANDOM_FACT_URL);

  const newText = await page.getByRole('paragraph');
  const newImage = await page.waitForSelector('img');
  
  const newTextContent = await newText.textContent();
  const newImageSrc = await newImage.getAttribute('src');

  expect(newTextContent).not.toBe(textContent);
  expect(newImageSrc).not.toBe(imageSrc);
});

