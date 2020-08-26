let pageCounter = 1;
let animalContainer = document.getElementById("animal-info")
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    myRequest.onload = function() {
        let myData = JSON.parse(myRequest.responseText);
        renderHTML(myData);
    };
    myRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.style.display = "none";
    }
});

function renderHTML(data) {
    let HTMLString = "";
    for (i = 0; i < data.length; i++) {
        HTMLString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat "
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                HTMLString += data[i].foods.likes[ii];
            } else {
                HTMLString += " and " + data[i].foods.likes[ii];
            }
        }
        HTMLString += ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', HTMLString);
}