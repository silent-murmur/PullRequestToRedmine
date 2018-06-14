// Saves options to chrome.storage
function save_options() {
  var github_username = document.getElementById('github_username').value;
  var github_api_key = document.getElementById('github_api_key').value;
  var redmine_username = document.getElementById('redmine_username').value;
  var redmine_api_key = document.getElementById('redmine_api_key').value;
  chrome.storage.sync.set({
    githubUsername: github_username,
    githubApiKey: github_api_key,
    redmineUsername: redmine_username,
    redmineApiKey: redmine_api_key

  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    githubUsername: 'Your github username goes here.',
    githubApiKey: 'Your github API Key goes here.',
    redmineUsername: 'Your redmine username goes here.',
    redmineApiKey: 'Your redmine API Key goes here.'
  }, function(items) {
    document.getElementById('github_username').value = items.githubUsername;
    document.getElementById('github_api_key').value = items.githubApiKey;
    document.getElementById('redmine_username').value = items.redmineUsername;
    document.getElementById('redmine_api_key').value = items.redmineApiKey;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);