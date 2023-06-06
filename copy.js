let newURl=document.getElementById("shorturl")

let coptButton=document.getElementById("copy");
coptButton.onclick=()=>{
    newURl.select();
    window.navigator.clipboard.writeText(newURl.value);
}