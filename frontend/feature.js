// Define Variables
const btnSwitch = document.getElementById("switch")
const amBtn = document.getElementById("AMbtn")
const amBorder = document.getElementById("am")

const pmBtn = document.getElementById("PMbtn")
const pmBorder = document.getElementById("pm")

const dayBTN = document.querySelectorAll('.btnDay')

const form = document.getElementById("inputTime")
const writeTime = document.getElementById("write_time")

// Event Listeners
btnSwitch.addEventListener("click", colorBGToggleAM) 
btnSwitch.addEventListener("click", colorBGTogglePM)

form.addEventListener("submit", timeData)

// Loop
dayBTN.forEach(button => {
  button.addEventListener('click', colorDayToggle);
});


// Functions
function colorBGToggleAM() {
    if (amBtn.style.backgroundColor === "orange") {
        amBtn.style.backgroundColor = "gray"
        amBorder.style.border = "2px solid gray"
    }

    else {
        amBtn.style.backgroundColor = "orange"
        amBorder.style.border = "2px solid orange"
    }
}

function colorBGTogglePM() {
    if (pmBtn.style.backgroundColor === "gray") {
        pmBtn.style.backgroundColor = "orange"
        pmBorder.style.border = "2px solid orange"
    }

    else {
        pmBtn.style.backgroundColor = "gray"
        pmBorder.style.border = "2px solid gray"
    }
}

function colorDayToggle() {
  if (this.style.backgroundColor === 'orange') {
    this.style.backgroundColor = 'white';
  } else {
    this.style.backgroundColor = 'orange';
  }
}

function timeData(e) {
  e.preventDefault();

  const writeTimeValue = writeTime.value;
}
