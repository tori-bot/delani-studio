
$(document).ready(function () {
    $("#des-clickable").click(function () {
        $("#des-clickable").hide();
        $("#des-explainer").show();
    });
    $("#des-explainer").click(function () {
        $("#des-explainer").hide();
        $("#des-clickable").show();
    });
});
$(document).ready(function () {
    $("#dev-clickable").click(function () {
        $("#dev-clickable").hide();
        $("#dev-explainer").show();
    });
    $("#dev-explainer").click(function () {
        $("#dev-explainer").hide();
        $("#dev-clickable").show();
    });
});
$(document).ready(function () {
    $("#pm-clickable").click(function () {
        $("#pm-clickable").hide();
        $("#pm-explainer").show();
    });
    $("#pm-explainer").click(function () {
        $("#pm-explainer").hide();
        $("#pm-clickable").show();
    });
});

$(document).ready(function(){
    $("#work4").mouseover(function(){
      $(".card-body4").show();
    }).mouseout(function(){
      $(".card-body4").hide();
    });
});
$(document).ready(function(){
    $("#work3").mouseover(function(){
      $(".card-body3").show();
    }).mouseout(function(){
      $(".card-body3").hide();
    });
});
$(document).ready(function(){
    $("#work2").mouseover(function(){
      $(".card-body2").show();
    }).mouseout(function(){
      $(".card-body2").hide();
    });
});
$(document).ready(function(){
    $("#work1").mouseover(function(){
      $(".card-body1").show();
    }).mouseout(function(){
      $(".card-body1").hide();
    });
});
$(document).ready(function(){
    $("#work5").mouseover(function(){
      $(".card-body5").show();
    }).mouseout(function(){
      $(".card-body5").hide();
    });
});
$(document).ready(function(){
    $("#work6").mouseover(function(){
      $(".card-body6").show();
    }).mouseout(function(){
      $(".card-body6").hide();
    });
});
$(document).ready(function(){
    $("#work7").mouseover(function(){
      $(".card-body7").show();
    }).mouseout(function(){
      $(".card-body7").hide();
    });
});
$(document).ready(function(){
    $("#work8").mouseover(function(){
      $(".card-body8").show();
    }).mouseout(function(){
      $(".card-body8").hide();
    });
});

$(document).ready(function () {
  $("button").click(function () {
    var client = document.getElementById("name").value;
    alert(' Dear ' + client + ', we have received your message successfully.');
    event.preventDefault();
  });

  $("button").click(function () {
    $('form').each(function () {
      this.reset();
    });
  });
});