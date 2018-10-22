$(document).ready(function(){

    $('#mainNav').hide();

    function showNavOnScroll(){
    window.addEventListener('scroll',function(){
        $('#mainNav').show();
    })
    }
    showNavOnScroll();

}); //end document ready function

