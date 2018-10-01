




var actors = ["arnold schwarzenegger", "John Travolta", "Nicolas Cage", "Samuel L Jackson", "Keanu Reeves"];

var queryURL = "https://api.giphy.com/v1/gifs/search?q=%22%20+%20actors%20+%20%22&api_key=l4iAli7gESZ6f4rQ7sblfPH6hEHgf4wH&limit=10&rating=g";

function displayActors() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data[0].rating);
    });
    

    var action = $("<button>");
    action.text("test");
    $("#arnold").append(action);
    console.log(action);
 
    $("#arnold").on("click", function (event) {
        event.preventDefault();
        for (i = 0; i < response.data.length; i++){
            var a = (response.data[i].images.fixed_height_still.url);
            var m = (response.data[i].images.fixed_height.url);
            var r = (response.data[i].rating.url);
            $("#arnold").append(displayInfo(a,m,r));
        }
        

        
    });
    // for (i = 0; i < response.data.length; i++){
    //     var a = (response.data[i].images.fixed_height_still.url);
    //     var m = (response.data[i].images.fixed_height.url);
    //     var r = (response.data[i].rating.url);
    //     $("#arnold").append(displayInfo(a,m,r));
    // }
    
    
}
function displayInfo() {
var div = $("<div>");
div.addClass("another");
div.append(displayImg);
div.append("<p>").text("the rating is" + rating);

};

function displayImg() {
    var img = $("<img>");
    img.addClass("photos");
    img.attr("src"), (response.data[0].images.fixed_height_still.url);
}



function actorsAll() {
    $("#arnold").empty();
    for (i = 0; i < actors.length; i++) {
        var action = $("<button>");
        action.addClass("arnold");
        action.attr("data-name", actors[i]);
        action.text(actors[i]);
        $("#arnold").append(action);
    }
    
    // var  action = $("<button>");
    // action.addClass
}
actorsAll();
displayActors();