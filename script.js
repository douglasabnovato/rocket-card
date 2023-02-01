'use strict';

const generate = document.querySelector(".box");

function generatebkg() {
    let red = Math.floor(Math.random() * (255 - 0) + 0);
    let green = Math.floor(Math.random() * (255 - 0) + 0);
    let blue = Math.floor(Math.random() * (255 - 0) + 0);

    generate.style.background = `rgb(${red}, ${green}, ${blue} )`;
}

function getApi(url_github) {

    let request = new XMLHttpRequest();

    request.open("GET", url_github, false);
    request.send();

    return request.responseText;
}

function main() {
    let data = getApi("https://api.github.com/users/douglasabnovato/repos");
    let repositories = JSON.parse(data);
    
    let div_box_projects = document.getElementById("box-projects");
    repositories.forEach((repository) => {
      let repo = createRepo(repository);
      div_box_projects.appendChild(repo);
    });
  }