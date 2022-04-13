const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
         
};

getData();

let userResults = results.map(function (userResults) {
    return userResults;
    console.log(userResults);
    displayUsers(userResults);
});


const displayUsers = function (userResults) {
    userResults = [];
    randomFolks.innerHTML = "";
    
    for (let user of userResults) {
        const country = user.location["country"];
        const name = user.name["first"];
        const imageURL = user.picture["medium"];
        }
    const userDiv = document.createElement("div");
        userDiv.innerHTML = `
                <h3>${name}</h3>
                <p>${country}</p>
                <img src=${imageURL} alt="User avatar" />
                `;
        randomFolks.append(userDiv);
        const hide = document.querySelector(".num-users hide");
        hide.classList.remove("hide");
        hide.classList.add("show");

    }

    
