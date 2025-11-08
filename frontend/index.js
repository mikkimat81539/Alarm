const addbtn = document.getElementById("create")

addbtn.addEventListener("click", urlAlarm)

function urlAlarm(){
    fetch("features.html")
    .then(response => response.text())     // convert to plain text
    .then(html => {
        document.open();       // Clear the current document
        document.write(html);  // Write the fetched HTML
        document.close();      // Finish and render
  })
    .catch(error => console.error(error))
}