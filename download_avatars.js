var request = require('request');
const GITHUB_USER = 'vladimir-grigore';
const GITHUB_TOKEN = '91b2f0714f02e3d8c25476ded3ba6764e53fbdc1';

console.log('Welcome to the GitHub Avatar Downloader!');

function buildRequestURL(repoOwner, repoName){
  var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  return requestURL;
}

function getRepoContributors(repoOwner, repoName, cb) {
  // TODO implement the function
  let queryUrl = buildRequestURL(repoOwner, repoName);

  var options = {
    url: queryUrl,
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Student Project"
    }
  };

  request(options, cb);
}

function parseResponse(err, result){
  console.log("Errors:", err);
  console.log("In the callback")
  console.log("Result:", result.body);

}

getRepoContributors('jquery', 'jquery', parseResponse);