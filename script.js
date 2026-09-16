const githubUser = 'NoobieDoesModding';
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const githubFollowers = document.getElementById('github-followers');
const githubFollowing = document.getElementById('github-following');
const githubLocation = document.getElementById('github-location');

async function loadGitHubProfile() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUser}`);

    if (!response.ok) {
      throw new Error(`GitHub API request failed: ${response.status}`);
    }

    const data = await response.json();

    if (profileImage) {
      profileImage.src = data.avatar_url || profileImage.src;
      profileImage.alt = `${data.login || githubUser} GitHub profile picture`;
    }

    if (profileName) {
      profileName.textContent = data.name || data.login || githubUser;
    }

    if (profileBio) {
      profileBio.textContent = data.bio || 'Developer and project builder';
    }

    if (githubFollowers) {
      githubFollowers.textContent = `${data.followers ?? 0} follower${(data.followers ?? 0) === 1 ? '' : 's'}`;
    }

    if (githubFollowing) {
      githubFollowing.textContent = `${data.following ?? 0} following`;
    }

    if (githubLocation) {
      githubLocation.textContent = data.location || 'Location hidden';
    }
  } catch (error) {
    console.error('Failed to load GitHub profile:', error);
  }
}

loadGitHubProfile();
