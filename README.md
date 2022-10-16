

# Introduction

This challenge is made of multiple exercises in the same project.
Each exercise is build to test specific skills.
You should extract, install, and run the project. 
Show your coding skills and create a commit for each exercise, push it to your own GitHub repository, and send us back the link in an email.

### Prerequisite:

* node.js 12+
* git

### Installation

Init your own git repo
```
git init
git add .
git commit -m "Suade Challenge started"
```

Install the dependencies
```
npm install
```

Run the exercises
```
npm run exercise1
npm run exercise2
npm run exercise3
npm run exercise4
npm run exercise5
npm run exercise6
```

# Exercises

### 1 - Debug VueJS mistakes

Please update the template and logic to ensure you don't get any VueJS warnings 
in the console, or build warnings.
If anything else looks odd to you, feel free to update it for it to match best 
practices!

Commit your code using the following message
```
git commit -m "exercise 1"
```

### 2 - Debug JS mistakes

The code behind this page should display a paginated list of people sorted by name. 
It contains common coding mistakes. Please update the files `App.vue` and
`components/List.vue` in order to get rid of the errors (console and eslint), and 
make sure the solution works properly.

Commit your code using the following message
```
git commit -m "exercise 2"
```

### 3 - Create CSS query and rules

Without changing any HTML or Javascript, and using predefined CSS variables,
update the style of the page, so then it matches the designs and situations below:

![background-layout](../challenge/exercise3/src/assets/backgroundLayout.png)
![dynamic](../challenge/exercise3/src/assets/dynamic.gif)
![responsive](../challenge/exercise3/src/assets/responsive.gif)

Commit your code using the following message
```
git commit -m "exercise 3"
```

### 4 - Use existing code

Please update `App.vue` in order to display a list of people 
aged from 25 to 35 years old, from the youngest to the oldest. 
Use Vuex store `store/store.js` to retrieve the list of people, use the component 
`components/List.vue` to display rows, make use of the props and slot, use the functions 
in `helpers/helpers.js` to filter and sort the data.

Commit your code using the following message
```
git commit -m "exercise 4"
```

### 5 - Implement recursive function

Please implement the 2 empty functions from `helpers/helpers.js`: `getValueAtPath` and
`groupByKey`. Check their usage in `App.js` to understand the specs.

Commit your code using the following message
```
git commit -m "exercise 5"
```

### 6 - Solving Cypress test failures

You'll find a VueJS app that has basic login and register functions. This has some Cypress tests,
however some of them are failing.
Running `npm run exercise6` will start a frontend server with hot reloading on port 8080,
as well as Cypress ready for testing. There is no backend as this is mocked by using the
browser's local storage.

Please ensure all tests are passing, to do so, do what you think is relevant: either update the 
tests, or update the code, depending on what you think is wrong.

Commit your code using the following message
```
git commit -m "exercise 6"
```

# Conclusion

When you are done with all the exercises, and that you have all commits ready, push them on 
your own GitHub repo, and send us back an email with your repo link in it.

Thanks for your time and dedication!
