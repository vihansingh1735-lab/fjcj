const guildId = new URLSearchParams(location.search).get("guildId");
const API_BASE = "http://2.56.246.81:30085";
fetch(`https://YOUR_ORIHOST_IP:PORT/api/premium?guildId=${guildId}`)
  .then(r=>r.json())
  .then(d=>{
    document.getElementById("premium").innerText =
      d.premium ? "⭐ Premium Active" : "Free";

    if(d.premium){
      document.getElementById("automod").classList.remove("locked");
    }
  });
