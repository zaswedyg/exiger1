Feature: Login

  Scenario: Login with valid credentials
    Given I am on the login page
    When I enter valid username and password
    Then I should be logged in

  Scenario: Login with invalid username and valid password
    Given I am on the login page
    When I enter invalid username and valid password
    Then I should see invalid credentials alert

  Scenario: Login with valid username and invalid password
    Given I am on the login page
    When I enter valid username and invalid password
    Then I should see invalid credentials alert

  Scenario: Login with empty login fields
    Given I am on the login page
    When I login with empty fields
    Then Required alerts are displayed

  Scenario: Forgot password sends reset password link
    Given I am on the login page
    When I click Forgot your password?
    When I enter valid username and click Reset Password
    Then Reset Password link sent successfully

  Scenario: Cancel button sends user to login page
    Given I am on the login page
    When I click Forgot your password?
    When I click Cancel
    Then I am on the login page

    