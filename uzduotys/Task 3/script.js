/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


const output = document.querySelector("#output");
const messagePlaceholder = document.querySelector("#message"); // Press "Show Users" button to see users
const btn = document.querySelector("#btn"); // show users

async function getMessages() {
  const response = await fetch(ENDPOINT);
  const messages = response.json();
  return messages;
}

async function showMessages() {
  const messages = await getMessages();

  messagePlaceholder.remove();

  messages.forEach((message) => {
    const messageHolder = document.createElement("div");
    output.append(messageHolder);
    messageHolder.classList.add("messageHolder");

    const login = document.createElement("p");
    messageHolder.append(login);
    login.classList.add("login");
    login.textContent = `Login: ${message.login}`;

    const avatarUrl = document.createElement("p");
    messageHolder.append(avatarUrl);
    avatarUrl.classList.add("avatar_url");
    avatarUrl.textContent = `avatar_url: ${message.avatarUrl}`;
  });
}

btn.addEventListener("click", showMessages);