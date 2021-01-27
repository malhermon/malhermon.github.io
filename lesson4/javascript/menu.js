function toggleMenu() {
    document.getElementsByClassName("nav-bar")[0].classList.toggle("menu-id");
  }
 
  const thisYear = new Date();
  let year = thisYear.getFullYear();
  document.getElementById("currentYear").textContent = year;

  const lastModDate = new Date(document.lastModified);
  let strLMD = + lastModDate.getMonth()+1 + "/" + lastModDate.getDate() + "/" 
             + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
             + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
  document.getElementById("lastUpdate").textContent = strLMD;