# Tombardier Frontend

<br>

### *Portfolio Building Made Simple*

---

<br>

Tombardier is a browser based portfolio builder for developers to quickly build and deploy a personal site

Built with a Ruby on Rails API backend, and a React/Redux front-end(this file) for Flatiron School Software Engineering Program

Check out the **[Live Demo](https://tombardier.netlify.app/)** to try it out.

<br>


**This repo is built to run on it's companion [backend]() so I recommend setting that up first.**

<br>

---
---

## Getting Started

<br>


Fork and clone this repo, and run

`npm install`

<br>

---

<br>

## Running Locally

<br>

At this point you should have your backend up and running locally.

When your Rails server is running, check that the first key value pair is **id: 1** 

<br>

If the id is different from that, *possibly from reseeding the file a few times*, 

copy the id number and open ***actions.js*** inside *src/redux* and change **line 1** to the new id number

`const userId = *newIdeaNumberHere*`
<br>

Once you have the proper id number, run

`npm start`

<br>

When everything looks good, you're ready to move to production. Complete the backend production deployment before the next section.

<br>

---

<br>

## Getting Tombardier Frontend into Production

<br>

### Connecting your backend 

At this point, you should have a url for your backend, and now all we need to do is drop that into our ***actions.js*** file. 

<br>

Inside ***actions.js*** ( *src/redux/actions.js*) add your backend url to line 2 

`export const baseUrl = yourBackendUrlHere`

<br>

That's it, start up React and make sure that works then we can deploy our frontend to production.

<br>

---

<br>

### Deploying through Netlify

<br>

