# vix_payment_feature_automation
Test Automation with Cypress for VIX Payment Feature. There are 3 test scenario for this feature:
1. TS001 - As a user, I want to be able to checkout after deciding to join VIX program, so that I will be able to make payment for the chosen program
Pada test scenario ini, terdapat 11 test case yang saya buat, yaitu:
a. TC001 - Authenticated user checkout program
b.	TC002 - Unauthenticated user checkout program
c.	TC003 - Unauthenticated user checkout program and cancel the login option
d.	TC004 - Mandatory fields in the application form are not filled in
e.	TC005 - Invalid input in nomor telepon’s field in the application form
f.	TC006 - User checkout program and cancels to continue registering the program
g.	TC007 - User checkout program with with a quota to apply for internships is still sufficient
h.	TC008 - User checkout program with with a quota to apply for internships has run out
i.	TC009 - User checkout program with valid promo or referral
j.	TC010 - User checkout program with invalid promo or referral
k.	TC011 - User checkout program without select any access (basic or vip)
2.	TS002 - As a user, I want to be able to checkout after deciding to join VIX VIP Access program, so that I will be able to make payment for the chosen program
Pada test scenario ini, terdapat 1 test case yang saya buat, yaitu:
a.	TC001 - User checkout program with VIP Access and Point VIP Access
b.	TC002 - User checkout program with the program already registered as a Basic Access and upgrading to VIP Access
3. TS003 - As a user, I want to be able to checkout after deciding to join VIX Basic Access Program, so that I will be able to make payment for the chosen program
Pada test scenario ini, terdapat 1 test case yang saya buat, yaitu:
a.	TC001 - User checkout program with Basic Access
