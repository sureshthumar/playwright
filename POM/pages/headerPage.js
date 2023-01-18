const { expect } = require("@playwright/test");
import { SEARCH } from "../data/constant";

exports.HeaderPage = class HeaderPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.languageButton = page.getByRole("button", { name: "English" });
    this.regionAndLanguage = page.locator("//a[contains(.,'USA English')]");
    this.searchBox = page.getByRole("textbox", { name: "Search" });
    this.submitButton = page.locator('(//input[@type="submit"])[2]');
    this.internationalPaymentResultlinks = page.locator(
      '(//a[@aria-label="Regular International Payments"])[2]'
    );
  }

  async clickOnLanguageButton() {
    await this.languageButton.click();
  }

  async clickOnRegionAndLanguage() {
    await this.regionAndLanguage.click();
  }

  async clickOnSearchBox() {
    await this.searchBox.click();
  }

  async inputOnSearchBox() {
    await this.searchBox.fill(SEARCH.SEARCHINPUT);
  }

  async clickOnSubmitButton() {
    await this.submitButton.click();
  }

  async clickOnResultLinks() {
    await this.internationalPaymentResultlinks.click();
  }
};
