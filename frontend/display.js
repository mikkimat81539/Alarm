const slider = document.getElementById("alarm_slider_box")

slider.addEventListener("click", slideToggle)

function slideToggle() {
    if (slider.style.justifyContent == "start") {
        slider.style.justifyContent = "end"
        slider.style.backgroundColor = "gray"
        slider.style.border = "gray"
    }

    else {
        slider.style.justifyContent = "start"
        slider.style.backgroundColor = "orange"
        slider.style.border = "orange"
    }
}