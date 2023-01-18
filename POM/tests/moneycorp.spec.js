const { test, expect } = require("@playwright/test");
const { chromium } = require("@playwright/test");
const { HomePage } = require("../pages/homePage");
const { HeaderPage } = require("../pages/headerPage");
import { URL } from "../data/constant";
import { ResultPage } from "../pages/resultPage";

test("Moneycorp International payments verification", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  const headerPage = new HeaderPage(page);
  const homePage = new HomePage(page);
  const resultPage = new ResultPage(page);

  await page.goto(URL.MONEYCORPURL);
  expect(page).toHaveTitle("Moneycorp | Global Payments");
  await headerPage.clickOnLanguageButton();
  await headerPage.clickOnRegionAndLanguage();
  expect(page).toHaveURL("https://www.moneycorp.com/en-us/");
  await homePage.findOutMoreForFXSolution();
  expect(page).toHaveURL(
    "https://www.moneycorp.com/en-us/business/foreign-exchange-solutions/"
  );
  await headerPage.clickOnSearchBox();
  await headerPage.inputOnSearchBox();
  await headerPage.clickOnSubmitButton();
  expect(page.getByText("International payments for your business")).toBeVisible();
  await resultPage.verifyResultLinks();
});
