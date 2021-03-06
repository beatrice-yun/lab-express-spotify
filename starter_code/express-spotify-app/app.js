var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste your credentials here
var clientId = '1c30624cba6742dcb792991caecae571',
    clientSecret = '746977b1e77240faa9d0d2411c3e0efe';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});

const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require("path");

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/artists"', function (req, res) {
  res.send(req.query)
})