document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-user').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const userName = document.getElementById('inputName').value;
        const endpoint = `https://api.github.com/users/${userName}`;

        xhttp.open('GET', endpoint);
        xhttp.send();

        const avatarElement = document.getElementById('avatar');
        const nameElement = document.getElementById('nome');
        const usernameElement = document.getElementById('userName');
        const reposElement = document.getElementById('repos');
        const followersElement = document.getElementById('followers');
        const followingElement = document.getElementById('following');
        const linkElement = document.getElementById('link');

        fetch(endpoint).then(function(res) {
            return res.json();
        })
        .then(function(json) {
            console.log(json);

            if (json.status == 404) {
                throw new Error("user not found");
            }

            avatarElement.src = json.avatar_url;
            nameElement.innerHTML = json.name;
            usernameElement.innerHTML = json.login;
            reposElement.innerHTML = json.public_repos;
            followersElement.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert(erro);
        })
    })
})