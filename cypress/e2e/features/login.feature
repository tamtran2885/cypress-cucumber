Feature: Login page

  As a valid user, I want to login into application

  Scenario: Valid login
    Given I open login page
    When I submit login
    Then I should see homepage