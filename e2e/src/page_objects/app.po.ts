import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url) {
    return browser.get(url);
  }

  getTitleText() {
    return element(by.css('title')).getText();
  }
}
