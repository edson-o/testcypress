Feature: Feater Name

  @tagexample001
  Scenario Outline: Scenario Example
    Given Home page is opened
    When enter email "<email>" and password "<pass>"
    And click sign in
    Then verify the message "<message>"

    Examples:
      | email           | pass      | message |
      | eorti@gmail.com | Admin@123 | Hello   |

  @dfgdfgdfg
  Scenario Outline: dfgdfgdfgdfgdfgdf
    Given Home page is opened
    When enter email "<email>" and password "<pass>"
    And click sign in
    Then verify the message "<message>"

    Examples:
      | email           | pass      | message                 |
      | eorti@gmail.com | Admin@123 | Wrong email or password |
