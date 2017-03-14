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

  request(options, (err, response, body) => {
    console.log(body);
  });
}


getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});