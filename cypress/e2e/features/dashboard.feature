Feature: Side Menu

  Scenario: 'Single word search: Admin'
    Given I am on the login page
    When I enter valid username and password
    Then I should be logged in
    When I search for Admin
    Then I can see Admin in the search result

  Scenario: 'Multi-word search: My Info'
    Given I am on the login page
    When I enter valid username and password
    Then I should be logged in
    When I search for My Info
    Then I can see My Info in the search result

  Scenario: 'Click all side menu links'
    Given I am on the login page
    When I enter valid username and password
    Then I should be logged in
    Then After I click on links in navbar it redirects me to corresponding page

  Scenario: 'All tiles are displayed'
    Given I am on the login page
    When I enter valid username and password
    Then I should be logged in
    Then All dashboard tiles are displayed
