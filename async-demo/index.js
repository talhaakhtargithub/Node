console.log('Before');
// getUser(1, getUsername);
// function getUsername(user) {
//     getRepo(user.githubUsername, displayRepo);
//     console.log(user);

// }

// function displayRepo(repo) {
//     getCommits(repo, displayCommit);
//     console.log(repo)
// }

// function displayCommit(commits) {
//     console.log(commits);
// }


getUser(1)
    .then(user => getRepo(user.githubUsername))
    .then(respos => getCommits(respos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error',err))


console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user database');
            resolve({ id: id, githubUsername: 'talha' });
        }, 2000);
    })

}

function getRepo(username) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github Repo');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })

}

function getCommits(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github Commits');
            resolve(['commit1', 'commit2', 'commit3']);
        }, 2000);
    })

}
