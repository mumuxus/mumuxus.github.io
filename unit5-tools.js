//-------------------------------------Unit 5-----------------------------------------------//
//-------------------------------------Scroll to top----------------------------------------//
function scrollTop() {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    // window.scrollTo(0, 0);
}

//-------------------------------------Theme Toggle----------------------------------------//
function theme() {
    let num = Math.floor(Math.random() * 7); //generate a random number from 1-6
    let name = "theme-" + num;  //concatenate the num with the string to construct the theme name
    document.body.classList.toggle(name)  //toggle through different classList and this will change the color theme of the site.
}

//-------------------------------------Search---------------------------------------------//
var countResults;  //declaring this outside the loop/function and using var, so it remembers the value
var i;  //'i' is a variable that will iterate through every index of our larger Characters array

var Characters = document.getElementsByTagName("*");

//this will get all the characters on the page and store them in this characters array.

function search() {  //will be activated through an onclick command in our html
    countResults = 0;
    for (i = 0; i < Characters.length; i++) {
        // we are going to go through the ith index of our array and see if it belongs to a tag that would contain text
        if ((Characters[i].tagName == "H1") || (Characters[i].tagName == "H2") || (Characters[i].tagName == "H3") || (Characters[i].tagName == "H4") || (Characters[i].tagName == "p") || (Characters[i].tagName == "a") || (Characters[i].tagName == "li") || (Characters[i].tagName == "pre") || (Characters[i].tagName == "span")) {

            let searchTag = document.getElementById("key");
            //local variable searchTag stores the user input search from the site.
            let regularExpression = new RegExp(`${searchTag}`, "gi");
            //RegExp is used for matching text with a pattern.
            // over here we are trying to match the pattern of our searchTag and indicating that we wish to do a global search that is case-insensitive

            if (Characters[i].textContent.toUpperCase().indexOf(searchTag.toUpperCase()) !== -1) {
                countResults++;
                //in this statement we are comparing from our array (that has been filtered for tags with text)
                // and seeing if they match with our searchTag. This is done using the method indexOf() which will
                // search the parent string (Characters[i] and by the substring searchTag and return the first index
                // of a match and if there is no match it returns -1. hence if not -1 increment counter
            }

            Characters[i].innerHTML = Characters[i].textContent.replace(regularExpression, found => `<highlight>${found}</highlight>`);
            // once the text is a confirmed match we highlight it for the user's convenience.
        }
        // else {
        //     continue;
        // }
    }
    if (countResults == 0) {
        alert("0 searches found.");
    }
}