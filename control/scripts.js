$(".dark-btn").click(
  function() {
   $("body").toggleClass("dark");
   $('#hiddenText').toggle();
   $('#newText').toggle();
   $('#nicole').show();
  }
);

$('#showTicket').click(function() {
        $('#ticket').show();
    });

$(document).ready(function() {
    $('#fillButton').click(function() {
        $('#popcornBucket').removeClass('empty').attr('src', 'popcorn.png');
    });
});

$(document).ready(function() {
    $('#butterButton').click(function() {
        $('#popcornBucket').removeClass('empty').attr('src', 'buttered.png');
    });
});