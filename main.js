
function reqListener () {
  let data = JSON.parse(this.responseText);
  let name = data.name;
  let gitHubUrl = data.url;
  let email = data.email;
  let company = data.company;
  let website = data.blog;
  let bio = data.bio;
  let avatarpic = data.avatar_url;


  let myname = document.getElementById("myname");
  let container = document.getElementById("container");
  let myheader = document.getElementById("myheader");
  let basicinfo = document.getElementById("basicinfo");
  let storyinfo = document.getElementById("storyinfo");
  let avatar = document.getElementById("avatar");



  let myprofileheader = `

  	<h1>${name}</h1

  `
  myheader.innerHTML += myprofileheader

  let mybasicinfo = `


  	<p class = "style">Name: </p><p>${name}</p>
  	<p class = "style">GitHub URL: </p><p>${gitHubUrl}</p>
  	<p class = "style">Email: </p><p>${email}</p>
  	<p class = "style">Company: </p><p>${company}</p>
  	<p class = "style">Website: </p><p>${website}</p>


  	`
  basicinfo.innerHTML += mybasicinfo

  let mystoryinfo = `

  	<p>${bio}</p>

  	`
  storyinfo.innerHTML += mystoryinfo

  let myavatar = `

  	<img id = "myprofilepic" src = "${avatarpic}">

  	`
  avatar.innerHTML += myavatar

}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/rossjcoop");
req.addEventListener("load", reqListener);
req.send();




