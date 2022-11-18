Feature: Login page

  With valid credentials, user can login the application

  Background:
    Given User is at login page

  Scenario: Valid login
    When User fills username with "standard_user", password with "secret_sauce", and clicks on the login button 
    Then User should see homepage
  
  Scenario: Incorrect username
    When User provides incorrect credentials, and clicks on the login button 
      | username      | password   |
      | standard_user | secret     |
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

  Scenario: Incorrect password
    When User provides incorrect credentials, and clicks on the login button 
      | username  | password      |
      | standard  | secret_sauce  |
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed