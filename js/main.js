let btn = document.getElementById("button");

btn.addEventListener("click", function() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    myRequest.onload = function() {
        let myData = JSON.parse(myRequest.responseText);
        console.log(myData[0]);
    };
    myRequest.send(); 
});