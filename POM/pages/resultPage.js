const { expect } = require("@playwright/test");

exports.ResultPage = class ResultPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.resultlinks = page.locator('//a[@class="title u-m-b2"]');
  }

  async verifyResultLinks() {
    const items = this.resultlinks;
    for (let i = 0; i < (await items.count()); i++) {
      const results = await items.nth(i).getAttribute("href");
      console.log(results);
      expect(results).toContain("/en-us/");
    }
  }
};
