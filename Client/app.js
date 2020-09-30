// $(function($){
//     function processForm( e ){
//         var dict = {
//         	Title : this["title"].value,
//             Director: this["director"].value,
//             Genre: this["genre"].value,
          
//         };

      

//         $.ajax({
//             url: 'https://localhost:44325/api/movie',
//             dataType: 'json',
//             type: 'post',
//             contentType: 'application/json',
//             data: JSON.stringify(dict),
//             success: function( data, textStatus, jQxhr ){
//                 $('#response pre').html( data );
//             },
//             error: function( jqXhr, textStatus, errorThrown ){
//                 console.log( errorThrown );
//             }
//         });

//         e.preventDefault();
//     }

    

//     $('#Add-Movie').submit( processForm );
// })(jQuery);

(function($){
    function processForm( e ){
        var dict = {
        
            MovieId: this["movieID"].value
        };

        

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: "json",           
            type: 'get',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    

    $('#my-movie-search').submit( processForm );
})(jQuery);

(function($){
    function processForm( e ){
        var dict = {
        
            Title : this["title"].value,
             Director: this["director"].value,
             Genre: this["genre"].value,
        };

        

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: "json",           
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    

    $('#Update-Movie').submit( processForm );
})(jQuery);

$(function($){

    $.post(`https://localhost:44325/api/movie`, function(data){
        console.log(data);
    
        data.map(function(el){
            $("#Add-Movie").append(`<div> Movie Title: ${el.title} </div>
            <div> Movie Director: ${el.director}</div>
            <div> Genre: ${el.genre}</div>
            <br>`);
        })
    
    })
});

