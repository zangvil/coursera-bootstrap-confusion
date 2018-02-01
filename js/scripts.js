$(document).ready(function() {
    $("#mycarousel").carousel( { interval: 3000 });
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });
});

$(document).ready(function() {
    $('#reserveButton').click(function () {
        $('#reserveModal').modal('show')
    });
    $('#closeReserveModal').click(function() {
        $('#reserveModal').modal('hide')
    });
    $('#cancelReserveModal').click(function(event) {
        $('#reserveModal').modal('hide')
    });
});

$(document).ready(function() {
    $('#loginButton').click(function () {
        $('#loginModal').modal('show')
    });
    $('#closeLoginModal').click(function() {
        $('#loginModal').modal('hide')
    });
    $('#cancelLoginModal').click(function(event) {
        $('#loginModal').modal('hide')
    });
});