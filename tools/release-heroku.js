const path = require('path');
const git = require('simple-git/promise');
const del = require('del');
const fs = require('fs-extra');

const repoURL = `https://${process.env.GH_TOKEN}@github.com/grommet/grommet-docs.git`;
const localFolder = path.resolve('./.tmp/grommet-docs');
const localDist = path.resolve('./dist');

if (process.env.CI) {
  del(localFolder).then(() => {
    git().silent(true)
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout('heroku'))
      .then(() => del([`${localFolder}/**/*`]))
      .then(() => fs.copy(localDist, localFolder))
      .then(() => git(localFolder).add(['--all', '.']))
      .then(() => git(localFolder).commit('heroku updated'))
      .then(() => git(localFolder).push('origin', 'heroku'))
      .catch(err => console.error('failed: ', err));
  });
} else {
  console.warn('Skipping release. Release:heroku task should be executed by CI only.');
}
