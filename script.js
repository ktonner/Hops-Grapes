// document.getElementById("hit").addEventListener("click", (event) => {
//     //no refresh
//     event.preventDefault();
//     //console.log(document.getElementById("test").value);
//     // //AJAX Call to Brewery API
//     // const queryURL = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/breweries?key=c89b3a27cf9adf60c71b39ce50ffa671&";
//     //get the users position from the geolocation API
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat + "and" + long);
    //Query for google places
    const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=500&types=wine&key=AIzaSyBRbn4-RYBysbGOiH11a0r5xu4NLIwM4iA"
    //AJAX Call to Places API
    $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
        console.log(response);
    });
});
;


//Dropdown Menu JS
//clicking on the menu opens it
$(".dropdown").on("click", function () {
    event.stopPropagation();
    $(".dropdown").addClass("is-active")

})
//if you click off the menu it closes
$(window).click(function () {
    $(".dropdown").removeClass("is-active")
});

//clicking on a beer sets the value
($(".dropdown-item")).on("click", function(){
    $(event.target).addClass("is-active")
    beerChoice = event.target.text 
    console.log($(".dropdown-title").innerHTML)
})