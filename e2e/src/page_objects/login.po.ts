import { browser, by, element, protractor } from 'protractor';

export class LoginPage {
  setLoginData(data){
    element(by.css('app-login input[type="email"]')).sendKeys(data.email);
    element(by.css('app-login input[type="password"]')).sendKeys(data.password);
  }
  login(){
    element(by.css('app-login button[type="submit"]')).click();
    browser.waitForAngularEnabled(false);
    return browser.wait(protractor.ExpectedConditions.visibilityOf(this.getSnackBar()), 8000);
  }
  logout(){
    browser.waitForAngularEnabled(true);
    browser.executeScript('window.localStorage.setItem("user_authenticated", null);');
  }
  getFeedbackLogin(){
    return this.getSnackBar().getText();
  }
  private getSnackBar(){
    return element(by.css('simple-snack-bar span'));
  }
  getInput(type) {
    return element(by.css(`input[type="${type}"]`)).getAttribute('placeholder');
  }
}