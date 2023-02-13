//-------------------------------------Unit 5-----------------------------------------------//
//-------------------------------------Scroll to Top----------------------------------------//
function scrollTop() {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
}

//-------------------------------------Theme Toggle----------------------------------------//
function theme() {
    let num = Math.floor(Math.random() * 7) + 1; //generate a random number from 1-7
    let name = "theme-" + num;  //concatenate the number with the string to construct the theme name
    document.body.classList.toggle(name);  //toggle through different classList and this will change the color theme of the site.
}

//-------------------------------------Search---------------------------------------------//
var countResults = 0;  //declaring this outside the loop/function and using let, so it can be re-assigned
let i;  //'i' is a variable that will iterate through every index of our larger Characters array

const Characters = document.querySelectorAll("h1, h2, h3, h4, p, a, li, pre, span");

//this will get all the elements with specified tags and store them in the 'Characters' NodeList

function search() {  //will be activated through an onclick command in the HTML
    countResults = 0;
    let searchTag = document.getElementById("key").value;
    //local variable 'searchTag' stores the user input search from the site.
    let regularExpression = new RegExp(searchTag, "gi");
    //RegExp is used for matching text with a pattern.
    // over here we are trying to match the pattern of our searchTag and indicating that we wish to do a global search that is case-insensitive

    Characters.forEach(char => {
        if (char.textContent.toUpperCase().includes(searchTag.toUpperCase())) {
            countResults++;
            //in this statement we are comparing from our NodeList and seeing if they match with our searchTag.
            // This is done using the method includes() which will search the parent string (Characters[i]
            // and by the substring searchTag and return a boolean indicating if a match was found.
        }
        char.innerHTML = char.textContent.replace(regularExpression, found => `<mark>${found}</mark>`);
        // once the text is a confirmed match we highlight it for the user's convenience.
    });

    if (countResults === 0) {
        alert("0 searches found.");
    }
}
