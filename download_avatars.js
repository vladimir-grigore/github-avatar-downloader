var request = require('request');
const GITHUB_USER = 'vladimir-grigore';
const GITHUB_TOKEN = '91b2f0714f02e3d8c25476ded3ba6764e53fbdc1';

console.log('Welcome to the GitHub Avatar Downloader!');

//Build a custom API request url
function buildRequestURL(repoOwner, repoName){
  var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  return requestURL;
}

function getRepoContributors(repoOwner, repoName, cb) {
  //build the request url
  let queryUrl = buildRequestURL(repoOwner, repoName);

  //construct an option object to hold our request url and user-agent
  var options = {
    url: queryUrl,
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Student Project"
    }
  };

  //Make the request and return the body
  request(options, (err, response, body) => {
    cb(err, JSON.parse(body));
  });
}

//Call the getRepoContributors function and handle errors
getRepoContributors('jquery', 'jquery', function(err, result) {
  if (err) {
    console.log("ERROR:", err)
    return false;
  }

  //iterate through each item and display the avatar_url
  result.forEach((item) => {
    console.log(item.avatar_url);
    console.log("------------------------------------------------------");
  })
});