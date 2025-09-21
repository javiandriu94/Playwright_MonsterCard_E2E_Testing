Feature: Monster Card Management
  As a user
  I want to create and manage monster cards
  So that I can customize monsters with stats and images

  Background:
    Given the application is open

  Scenario: Prevent card creation when required fields are empty
    When clicks on "Create Monster"
    Then should see a validation message for required fields
    And the monster card should not be created