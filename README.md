# React/ExpressJS URL Shortener [![Build Status](https://travis-ci.org/muhanad40/React-URL-shortener.svg?branch=master)](https://travis-ci.org/muhanad40/React-URL-shortener)

This is not a real URL shortener. It will not shorten any URLs (for spam and laziness purposes). It's just a small toy app built to flex them coding muscles 💪

### [Live demo](https://dummy-url-shortener.herokuapp.com/) (mobile responsive 😎)

### Local installation
1. `cd React-URL-Shortener`
2. `yarn`
3. `npm run postinstall`
4. `npm start`
5. Go to `http://localhost:3000`

### User stories
- [x] When I click `shorten` button, it should POST to an endpoint and return a new shortened URL
- [x] When I enter an invalid URL, I should see an error message
- [x] When I enter the page, I should see a list of shortened URLs I have created previously
- [x] When I submit a URL, the input field should be cleared
- [x] When I click on a URL from my list of shortened URLs, it should redirect me to that link in a new tab
- [x] When I click the delete icon, it should delete the url
- [x] If a URL in the table is too long, it should be truncated
- [x] When I visit the page on a mobile device, it should display appropriately
