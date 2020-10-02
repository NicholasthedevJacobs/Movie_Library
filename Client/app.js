

// function searchBYMovieId(){
//     (function($){
//         function processForm( e ){
//             var dict = {
            
//                 MovieId: this["movieID"].value
//             };
    
            
    
//             $.ajax({
//                 url: 'https://localhost:44325/api/movie',
//                 dataType: "json",           
//                 type: 'get',
//                 contentType: 'application/json',
//                 data: JSON.stringify(dict),
//                 success: function( data, textStatus, jQxhr ){
//                     $('#response pre').html( data );
//                 },
//                 error: function( jqXhr, textStatus, errorThrown ){
//                     console.log( errorThrown );
//                 }
//             });
    
//             e.preventDefault();
//         }
    
        
    
    //     $('#my-movie-search').submit( processForm );
    // })(jQuery);
// }
function getMovieByID(el){
    // document.getElementById("AddMovie").innerHTML = 
           let inputID = $("#movieID").val();

            let apiEndpoint = `https://localhost:44325/api/movie/${inputID}`;
            $.get(apiEndpoint,function(data){
                console.log(data)

                $("#Get-By-ID").append(`<div> Title: ${data.title} </div>
                <div> Director: ${data.director}</div>
                <div> Genre: ${data.genre}</div>
                <br>`);

               
            })
            
    }
function getList(el){
    $(function(){

        $.get("https://localhost:44325/api/movie/", function(data){
            console.log(data);
    
            data.map(function(el){
                $("#Movies").append(`<tr><td><div> Title: ${el.title} </div>
                <div> Director: ${el.director}</div>
                <div> Genre: ${el.genre}</td></tr></div>
                <br>`);
            })
        })
    })
}
$(function(){

    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);

        data.map(function(el){
            $("#Movies").append(`<tr><td><div> Title: ${el.title} </div>
            <div> Director: ${el.director}</div>
            <div> Genre: ${el.genre}</td></tr></div>
            <br>`);
        })
    })
})
    

function addMovie(e){
    // document.getElementById("AddMovie").innerHTML = 
            //console.log(e);
    
            var dict = {
            
                Title : document.getElementById("title").value,
                Director: document.getElementById("director").value,
                Genre: document.getElementById("genre").value,
            };
                console.log("dict", dict);   
            $.ajax({
                url: 'https://localhost:44325/api/movie',
                dataType: "json",           
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(dict),
                success: function( data, textStatus, jQxhr ){
                    // $('#response pre').html( data );
                    console.log(data);
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
    
            e.preventDefault();
        }

function updateMovie(e){
    // document.getElementById("AddMovie").innerHTML = 
            //console.log(e);
        let movieToUpdate = $("#title").val();
            //let movieToUpdate = getMovieByID();
            
                console.log(movieToUpdate);   
            $.ajax({
                url: 'https://localhost:44325/api/movie',
                dataType: "json",           
                type: 'put',
                contentType: 'application/json',
                data: JSON.stringify(dict),
                success: function( data, textStatus, jQxhr ){
                    // $('#response pre').html( data );
                    console.log(data);
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
    
            e.preventDefault();
        }
        
    
           


// (function($){
//     function processForm( e ){
//         var dict = {
        
//             Title : this["title"].value,
//              Director: this["director"].value,
//              Genre: this["genre"].value,
//         };

        

//         $.ajax({
//             url: 'https://localhost:44325/api/movie',
//             dataType: "json",           
//             type: 'put',
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

    

//     $('#Update-Movie').submit( processForm );
// })(jQuery);

(function($){
    function processForm( e ){
        var dict = {
        
            MovieId : this["movieID"].value,
            Title : this["title"].value,
             Director: this["director"].value,
             Genre: this["genre"].value,
        };

        

        $.ajax({
            url: $`https://localhost:44325/api/movie/${id}`,
            dataType: "json",           
            type: 'delete',
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

    
    

    $('#Delete-Movie').submit( processForm );
})(jQuery);

function getAllMovies(){
    $("#displayMovies").html(" ");

    

        
    
    $.ajax({
        url: "https://localhost:44325/api/movie",
        contentType: 'application/json',
        type: 'get',
        success: function (data, textStatus, jQxhr){
            console.log("Success");
            console.log(data);
            var tableContent = '<tr>'
            for (let i = 0; i<data.length; i++){
                $("#displayMovies").append(
                `<tr><td>
                 ${data[i]["title"]}
                 ${data[i]["director"]}
                 ${data[i]["genre"]} 
                </td></tr>`)

               
            };
        }
    })
}

// function updateMovie(){
//     $(function($){

//         $.post(`https://localhost:44325/api/movie`, function(data){
//             console.log(data);
        
//             data.map(function(el){
//                 $("#Add-Movie").append(`<div> Movie Title: ${el.title} </div>
//                 <div> Movie Director: ${el.director}</div>
//                 <div> Genre: ${el.genre}</div>
//                 <br>`);
//             })
        
//         })
//     });
// }
