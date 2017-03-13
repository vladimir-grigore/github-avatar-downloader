var request = require('request');
const GITHUB_USER = 'vladimir-grigore';
const GITHUB_TOKEN = '91b2f0714f02e3d8c25476ded3ba6764e53fbdc1';

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // TODO implement the function
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN
    + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
}

getRepoContributors('jquery', 'jquery', function(err, result){
  console.log("Errors:", err);
  console.log("Result:", result);
})