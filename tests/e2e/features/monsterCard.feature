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

  Scenario: Create and delete monster card with image
    When selects a monster image and enter the data monster
    Then a new monster card should be displayed
    And delete the created monster card


  Scenario: Create and delete monster card without image
    When enter the data monster without image
    Then a new monster card should be displayed with default image

    