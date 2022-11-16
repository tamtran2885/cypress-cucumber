Feature: Login page

  Feature login on Login page will work depending on the credentials of user

  Background:
    Given User is at login page

  Scenario: Valid login
    When User fills email with "hoang@gmail.com", password with "123456", and clicks on the login button 
    Then User should see homepage
  
  Scenario: Incorrect username
    When User provides incorrect credentials, and clicks on the login button 
      | email         | password   |
      | hoa@gmail.com | 123456     |
    Then The error message "Invalid credentials" is displayed

  Scenario: Incorrect password
    When User provides incorrect credentials, and clicks on the login button 
      | email           | password   |
      | hoang@gmail.com | 12345      |
    Then The error message "Invalid credentials" is displayed