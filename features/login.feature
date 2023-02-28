Feature: Check login functionlaity
  check the login for different user roles

Scenario: TEL-2023 Verify login with valid credentials on patient portal @login
  Given Open login page for "SuperAdmin"
  When Enter Email for "email"
  And Enter Password for "pass"
  And Click login button
  Then User should Login successful
