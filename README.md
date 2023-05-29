# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

I would run the automated tests within a github action after it is pushed. Using github actions would promote a CI pipeline. Furthermore, everyone working on the project will be able to see the error and individually work on the fix. It also makes the progression of the project more transparent.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No I would not because this type of test aligns with a unit test.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not, this is more of an E2E test since this takes into account a variety of functions includding writing a message, sending it, and recieving it from another user.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test for this example because we are testing a specific aspect of a feature.