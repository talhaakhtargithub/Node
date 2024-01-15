console.log('Before');
getUser(1, getUsername);
function getUsername(user) {
    getRepo(user.githubUsername, displayRepo);
    console.log(user);
    
}

function displayRepo(repo) {
    getCommits(repo, displayCommit);
    console.log(repo)
}

function displayCommit(commits) {
    console.log(commits);
}





console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user database');
        callback({ id: id, githubUsername: 'talha' });
    }, 2000);
}

function getRepo(username, callback) {
    setTimeout(() => {
        console.log('Calling Github Repo');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(username, callback) {
    // Simulating an asynchronous operation to fetch commits
    setTimeout(() => {
        console.log('Calling Github Commits');
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}
