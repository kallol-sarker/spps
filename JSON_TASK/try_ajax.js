$(function () {

  $("input").change(function () {

    numeroAleatoire = Math.floor((Math.random() * 4) + 1); 
    numeroPage = $(this)[0].value;
    $.ajax({
      url: "json-" + numeroPage + ".json",
      success: function (data) {
        $("#title").html('<H1>' + data.title + '</H1>'); 
       
        $("#title").append('<H2>' + data.subtitle + '</H2>'); 
      }
    });

  });

});