function colourText() 
{
    var text = document.getElementById("name"); 
    text.style.color = '#9dd8ff';    
}

function resetText()
{
    var text = document.getElementById("name"); 
    text.style.color = 'black'
}

function about()
{
    window.location.href = "/about.html"
}


$(function(){  // $(document).ready shorthand
    $('.CS').fadeIn('slow');
  });
  
  $(document).ready(function() {
      console.log("hi")
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.Taiwan').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });
