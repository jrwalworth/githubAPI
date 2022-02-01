var username = '';

function getUsername(element) {
    username = element.value;
}

var cardsDiv = document.querySelector("#cards")
function makeUserCard(data) {
    var res = `<div class="card">
                    <div class="header"></div>
                    <img id="profile-pic" src="${data.avatar_url}" alt="${data.login}">
                    <div class="info">
                        <h3 class="name">${data.name}</h3>
                        <div class="location">
                            <img class="icon" id="mark" src="icons/map-marker.png" alt="Map Marker">
                            <h2>${data.location}</h2>
                        </div>
                        <div class="details">
                            <p>Company: ${data.company}</p>
                            <p class="deets">Bio: ${data.bio}</p>
                            <p class="deets">Started github: ${data.created_at}</p>
                        </div>
                        <div class="follows">
                            <p class="follow">Followers: ${data.followers}<p>
                            <p class="follow">Following: ${data.following}<p>
                        </div>
                    </div>
                </div>`
    return res;
}


async function search() {
    var response = await fetch("https://api.github.com/users/" + username);
    var resData = await response.json();
    console.log(resData);
    cardsDiv.innerHTML = makeUserCard(resData) + cardsDiv.innerHTML;
}
