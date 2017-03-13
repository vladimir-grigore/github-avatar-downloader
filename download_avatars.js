var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // TODO implement the function
}

getRepoContributors('jquery', 'jquery', function(err, result){
  console.log("Errors:", err);
  console.log("Result:", result);
})