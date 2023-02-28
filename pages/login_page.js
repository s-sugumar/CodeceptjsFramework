const { I } = inject();

class login {
  loginpage_username = 'input[name="username"]';
  loginpage_password = 'input[name="password"]';
  loginpage_loginButton = 'button.e-control';

  enterUsernameField(username) {
    I.waitForElement(this.loginpage_username, 20);
    I.fillField(this.loginpage_username, username);
  }
  verifyUsernameField() {
    I.waitForElement(this.loginpage_username,20);
  }
  openUrl(url) {
    I.amOnPage(url);
  }
  enterPasswordField(password) {
    I.waitForElement(this.loginpage_password);
    I.fillField(this.loginpage_password, password);
  }
  clickLoginButton() {
    I.click(this.loginpage_loginButton);
  }
  verifyLoginSuccessful() {
    I.waitInUrl('/main/home',30);
    I.seeInCurrentUrl('/main/home');
  }

}    
module.exports=login;