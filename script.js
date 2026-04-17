const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("andrewsucks")

if(!localStorage.getItem("andrewsucks")){
  localStorage.setItem("andrewsucks", JSON.stringify({"andrewsucks":[]}))
}

const andrewsucks = JSON.parse(localStorage.getItem("andrewsucks"))
andrewsucks.andrewsucks.push(code)

localStorage.setItem("andrewsucks", JSON.stringify(andrewsucks))

$("body").text(code.split("-").map((str)=>str.charAt(0).toUpperCase() + str.slice(1)).join(" "))
