//Console Log Check:

console.log("Your index.js file is loaded correctly!");


//Event Listener: When you click 'View my Work', it will create function scroll down to 'My Work' section

$("#btnScroll").click(function(){
    $("html").animate({
        scrollBottom:$("#myWork").offset()
    },800); //speed of scroll
});