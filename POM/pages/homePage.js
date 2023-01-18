const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.fxSolutions = page.locator('(//a[contains(@class,"c-btn c-btn--secondary")]//span)[2]');
  }

  async findOutMoreForFXSolution() {
    await this.fxSolutions.click();
  }
};
