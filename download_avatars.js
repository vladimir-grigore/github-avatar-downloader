var request = require('request');
var GITHUB_USER = 'vladimir-grigore';
var GITHUB_TOKEN = '91b2f0714f02e3d8c25476ded3ba6764e53fbdc1';

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // TODO implement the function
}

getRepoContributors('jquery', 'jquery', function(err, result){
  console.log("Errors:", err);
  console.log("Result:", result);
})