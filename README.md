# Mobile Assessment Task

This code challenge is to assess your skills in developing a simple to-do list mobile application. For this code challenge, you must use React Native and React Native CLI. The application should work on both iOS and Android platforms. Please note that the code should be clean, commented, and well structured.

You are required to use React Navigation for navigating between screens and you are required to use redux. Please demonstrate the use of actions and reducers when developing the application. The application should persist data.

When finished please push the code to a public Github repository and share the URL of the repo.

Please avoid using any UI library. You can use our hosted API please import the collection of endpoints into postman using this URL

There will be 7 screens in total: Splash Screen, Welcome screen (for guest users), login, register, ToDos list, create new ToDo, view/update ToDo

Once the user is logged in, they should stay logged in (even if the application is relaunched). Logout button in navigation which will log out the user. UI will not be a part of this assessment so please focus on the quality of the code.

## Splash Screen:
-It should be a simple splash screen.
-It should appear for a brief time when the application is launched.
-It should be visible on both Android and iOS.

## Welcome screen: 
-will only be visible if a user is not logged in.

## Register screen :

-Only 3 fields are required email, password, and password confirmation.
-Upon successful registration, the user will be notified to check their email inbox and redirected to the login screen

## Login screen :
-2 fields are required - email and password
-If credentials are invalid show appropriate user feedback
-If credentials are correct the user should be logged in and redirected to the Todo List screen

## ToDo list :
-The user should see a list of their previously created ToDos
-The user should be able to navigate to the "Create new ToDo"
-The user should be able to navigate to the "View/update ToDo" screen by clicking on one of the ToDos items from the list
-The user should be able to delete a particular ToDo item from the list
-ToDo items should be searchable by title
-Pagination should be handled as an infinite-scroll

## Create ToDo screen :
-2 fields are required, title and description
-Upon successfully creating the ToDo item the user should be redirected to the "ToDo list" screen

## View/update ToDo screen :
-2 fields are required, title and description of the ToDo item, and these fields should be pre-filled with data from the server for the selected ToDo item.
-Upon successfully updating the ToDo the user should be redirected to the "ToDo list" screen

