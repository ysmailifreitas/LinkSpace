function changeSec(){
  // SET ACTIVE

  let btn = document.getElementById("btn")
  btn.classList.add("active")

  let btn2 = document.getElementById("btn2")
  btn2.classList.remove("active")

  // SET DISPLAY

  let sec1 = document.getElementById("sec1")
  sec1.classList.remove("remove")

  let sec2 = document.getElementById("sec2")
  sec2.classList.add("remove")
}

function changeSec2(){
  // SET ACTIVE

  let btn = document.getElementById("btn")
  btn.classList.remove("active")

  let btn2 = document.getElementById("btn2")
  btn2.classList.add("active")

  // SET DISPLAY
  let sec2 = document.getElementById("sec2")
  sec2.classList.remove("remove")

  let sec1 = document.getElementById("sec1")
  sec1.classList.add("remove")
}