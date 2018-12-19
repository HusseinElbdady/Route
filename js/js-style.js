$(document).ready(function(){


//slide toggle box
 $(".slidText h2").click(function(){
        
        $(this).next().slideToggle(400);
         $(".slidText div").not($(this).next()).slideUp(400);
        console.log("done")
    });

//text area
function checkKey(key) { //to stop keys when 100 chars except left and right and backspace key
            return  key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}
$("textarea").keydown(function(){
    
    var textLength = $("textarea").val().length, //To get length of inputs
        maxNum = 100 - textLength //to make it countdown from 100 to 0
    console.log(textLength)
    
    if(textLength <= 100)
        {
            $(".maxchars").text(maxNum)
            $(".textToRemove").show()   //to show Character Reamining text befor 100 chars
        
        }
        else{
            $(".maxchars").text("Sorry Max chars is 100").css({backgroundColor:"red", color:"white"})
            $(".textToRemove").hide() //to hide Character Reamining text after 100 chars
            return checkKey(event.key) // to active checkkey function after 100 chars
            }
    
})
// CountDown Timer using cowntdown library
$(".countdown_timer")
  .countdown("2019/01/01", function(event) {
    $(this).text(
      event.strftime('%D days %H:%M:%S')
    );
});


})