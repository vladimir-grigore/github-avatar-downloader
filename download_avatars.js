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
  let url = buildRequestURL(repoOwner, repoName);

  request.get(url)
         .on('error', (err) => {
            throw err;
          })
         .on('response', (response) => {
            console.log('Response Status Code: ', response.statusCode);
            console.log('Response Status Message:', response.statusMessage);
            // console.log(response);
         });
}

getRepoContributors('jquery', 'jquery', function(err, result){
  console.log("Errors:", err);
  console.log("Result:", result);
})