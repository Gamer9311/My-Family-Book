var img = [
    "https://lh3.googleusercontent.com/q_zdXiK5ZoFDeRQ6EFC9yqEAOmUBpSz9DQWoaO54ZTQHBJ-dUjx01tMpMbomwFyv5Aac=s85", "https://lh3.googleusercontent.com/5y8JE77IxvR0nE4pFnwkFV4CzRsMU6XU8XctVBLegD9YQiiwOJsLyofxgj3jwBge2YEc=s85", "https://lh3.googleusercontent.com/WM7nqsETuBAc3LIPI4FhKrSXbpKNVuUn4pyfzLCrTNfqIWLS8oYhKJkVyJD1-JEg-o7nRA=s85", "https://lh3.googleusercontent.com/YA1i4Cnrz77ibUp4ABgK5WfMIWSeOBNEUHTOOfVXBd-EkE11NcCr-_xqdNPLbRZAk6B_HA=s85"
];

var nameof = [
    "Avaneesh Deshpande", "Shweta Deshpande", "Akshay Deshpande", "My Family Book"
];

var counter = 0;

function next() {

    document.getElementById("text").innerHTML = nameof [counter];
    document.getElementById("img").src = img [counter];

    counter++;

    if (counter == 4) {

        counter = 0;
    };
};


console.log(nameof.length);
console.log(img.length);
