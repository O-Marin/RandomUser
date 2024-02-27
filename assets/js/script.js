let randomUsers = "https://randomuser.me/api/?results=10";

let getUsers = (async () => {
  let res = await fetch(randomUsers);
  let data = await res.json();
  try {
    let getUsers = function () {
      return new Promise((resolve, reject) => {
        resolve(data);
      });
    };

    return {
      getUsers,
    };
  } catch (E) {
    console.log(E);
  }
})();

(async () => {
  let resolve = await getUsers;
  let data = await resolve.getUsers();
  console.log(data.results[0].picture.thumbnail);
  data.results.forEach((x, index) => {
    document.querySelector("#user-data").innerHTML += 
    `<p> <img src="${data.results[index].picture.thumbnail}"/><br>
    ${data.results[index].name.first} ${data.results[index].name.first} <br>
    ${data.results[index].email} <br>
    ${data.results[index].phone} <br>
    </p>`;
  });
})();
