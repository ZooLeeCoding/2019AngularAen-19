import { AppPage } from './app.po';
import { browser, logging, ElementFinder } from 'protractor';
import { by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let routerLink: ElementFinder ;

  beforeEach(async () => {
    await(3000);
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to router2!');
  });

  it('should display serverMessage', async () => {
    let input = element(by.id("serverMessage"));
    input.sendKeys("this is a message from protractor");
    await(5000);
    expect(element(by.id("messageDisplay")).getText()).toEqual("this is a message from protractor")
  });

  it('should have a routerlink', () => {
    routerLink = element(by.id("first-router"));
    expect(routerLink.getText()).toEqual("This is a routerLink");
  });

  it('should navigate to World component', () => {
    routerLink.click();
    expect(element(by.id("world-text")).getText()).toEqual("world works!")
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
