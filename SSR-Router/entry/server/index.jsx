import React from 'react';
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router';
import routes from '../../src/common/routes';

const express = require('express');
const path = require('path');
const compression = require('compression');

function renderPage(appHtml, title) {
    return `
  <!doctype html public="storage">
  <html>
  <meta charset=utf-8/>
  <meta name="description" content=">Tobu - ${title}">
  <title>Tobu</title>
      <link rel="icon" href="/favicon.ico">
      <!--reset.css-->
      <link rel="stylesheet" href="css/reset.css">
      <!--主要的css-->
      <link rel="stylesheet" href="css/index.css">
      <link rel="stylesheet" href="css/about.css">
      <link rel="stylesheet" href="css/portfolio.css">
  <div id=app>${appHtml}</div>
  <script src="/bundle.js"></script>
 `;
}

const app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, '../../publish')));

app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
        if (err) {
      // there was an error somewhere during route matching
            res.status(500).send(err.message);
        } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
      // if we got props then we matched a route and can render
            const appHtml = renderToString(<RouterContext {...props} />);
            let title = null;
            switch (props.location.pathname) {

            case '/portfolio': {
                title = 'Portfolio';
                break;
            }
            case '/': {
                title = 'About';
                break;
            }
            default: {
                title = 'About';
                break;
            }
            }
            res.send(renderPage(appHtml, title));
        } else {
      // no errors, no redirect, we just didn't match anything
            res.status(404).send('Not Found');
        }
    });
});
/* 參考來源 https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering */


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.info(`==> 🌎  Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
});
