Feature: Logout

  User can logout the application

  Scenario: User logout
    Given User is located at login page
    When  User login successfully with valid credentials including "standard_user" and "secret_sauce"
    Then User is located at homepage
    When User click on burger menu button, and user click on logout button
    Then User should logout the application, and see login page