Feature: Feater Name

  @runThis
  Scenario Outline: Scenario Example
    Given Home page is opened
    When enter email "<email>" and password "<pass>"
    And click sign in
    Then verify the message

    Examples:
      | email                       | pass      |
      | edsontestingqa+99@gmail.com | Admin@123 |

  
  Scenario Outline: Scenario Example2
    Given Home page is opened
    When enter email "<email>" and password "<pass>"
    And click sign in
    Then verify the message

    Examples:
      | email           | pass      |
      | eorti@gmail.com | Admin@123 |
