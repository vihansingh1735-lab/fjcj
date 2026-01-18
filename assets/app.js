const guildId = new URLSearchParams(location.search).get("guildId");

fetch(`https://YOUR_ORIHOST_IP:PORT/api/premium?guildId=${guildId}`)
  .then(r=>r.json())
  .then(d=>{
    document.getElementById("premium").innerText =
      d.premium ? "⭐ Premium Active" : "Free";

    if(d.premium){
      document.getElementById("automod").classList.remove("locked");
    }
  });
