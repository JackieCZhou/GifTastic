// was unable to get my buttons to work or 
// additional buttons to render when the user added an animal.  
// Was also unable to get the gif's to animate/pause on click, Anytime I tried adding in the code commented 
// out below the page would stop loading gifs all together.


    // $("button").on("click", function() {
    //     var animal = $(this).attr("data-animal");
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    //     var topics = [cat, dog]
    //     topics.push("form-control");
    
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //       })
    //         .then(function(response) {
    //           var results = response.data;
    
    //           for (var i = 0; i < topics.length; i++) {
    //             var gifDiv = $("<div>");
    
    //             var rating = results[i].rating;
    
    //             var p = $("<p>").text("Rating: " + rating);
    
    //             var animalImg = $("<img>");
    //             animalImg.attr("src", results[i].images.fixed_height.url);
    
    //             gifDiv.prepend(p);
    //             gifDiv.prepend(personImage);
    
    //             $("#gifs-appear-here").prepend(gifDiv);
    //           }
    //         });
    //     });

    //     $(state).attr('data-animal');


        

    //     if (state === "still");{
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
        
    //     }else if{
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
    //     };