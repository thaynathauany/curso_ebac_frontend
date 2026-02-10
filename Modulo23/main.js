const username = "thaynathauany";
const endpoint = `https://api.github.com/users/${username}`;

const elAvatar = document.querySelector("#avatar");
const elName = document.querySelector("#name");
const elUsername = document.querySelector("#username");
const elRepos = document.querySelector("#repos");
const elFollowers = document.querySelector("#followers");
const elFollowing = document.querySelector("#following");
const elProfileLink = document.querySelector("#profileLink");

async function loadGithubProfile() {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    elAvatar.src = data.avatar_url;
    elAvatar.alt = `Avatar de ${data.login}`;

    elName.textContent = data.name ?? data.login;
    elUsername.textContent = `@${data.login}`;

    elRepos.textContent = data.public_repos;
    elFollowers.textContent = data.followers;
    elFollowing.textContent = data.following;

    elProfileLink.href = data.html_url;
  } catch (error) {
    elName.textContent = "Não foi possível carregar o perfil :(";
    elUsername.textContent = "";
    elRepos.textContent = "-";
    elFollowers.textContent = "-";
    elFollowing.textContent = "-";
    elProfileLink.href = "#";

    console.error("Falha ao buscar dados do GitHub:", error);
  }
}

loadGithubProfile();
