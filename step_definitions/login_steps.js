const loginPage = require("../pages/login_page");
const {userdetails} = require("../config.js");
const loginPageObj = new loginPage();

Given('Open login page for "{word}"', (url) => {
  loginPageObj.openUrl(userdetails[url].superAdminUrl);
});

When('Enter Email for "{word}"', () => {
  loginPageObj.enterUsernameField(userdetails.portalAdmin[email]);
});

Then('Enter Password for "{word}"', (password) => { 
  loginPageObj.enterPasswordField(userdetails.portalAdmin[password]);
});

Then('Click login button', () => {
  loginPageObj.clickLoginButton();
});

Then('User should Login successful', () => {
  loginPageObj.verifyLoginSuccessful();
});
