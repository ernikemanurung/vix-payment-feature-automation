# vix_payment_feature_automation
Test Automation with Cypress for VIX Payment Feature in Rakamin Academy's website.
There are 3 test scenario for this feature:
1. TS001 - As a user, I want to be able to checkout after deciding to join VIX program, so that I will be able to make payment for the chosen program
There 11 test case for this scenario:
  - TC001 - Authenticated user checkout program
  - TC002 - Unauthenticated user checkout program
  - TC003 - Unauthenticated user checkout program and cancel the login option
  - TC004 - Mandatory fields in the application form are not filled in
  - TC005 - Invalid input in nomor telepon’s field in the application form
  - TC006 - User checkout program and cancels to continue registering the program
  - TC007 - User checkout program with with a quota to apply for internships is still sufficient
  - TC008 - User checkout program with with a quota to apply for internships has run out
  - TC009 - User checkout program with valid promo or referral
  - TC010 - User checkout program with invalid promo or referral
  - TC011 - User checkout program without select any access (basic or vip)
2.	TS002 - As a user, I want to be able to checkout after deciding to join VIX VIP Access program, so that I will be able to make payment for the chosen program
There 2 test case for this scenario:
  - TC001 - User checkout program with VIP Access and Point VIP Access
  - TC002 - User checkout program with the program already registered as a Basic Access and upgrading to VIP Access
3. TS003 - As a user, I want to be able to checkout after deciding to join VIX Basic Access Program, so that I will be able to make payment for the chosen program
There 1 test case for this scenario:
  - TC001 - User checkout program with Basic Access
