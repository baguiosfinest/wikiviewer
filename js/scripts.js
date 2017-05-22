$(document).ready(function(){
  $("#btn-search").on("click",function(){
    var qr = $('.inputsearch').val();

    $("#searchResults").empty().removeClass("fadeInUp");

    if(qr == ""){
      $(".inputsearch").focus();
    }else{

      // Using jQuery
      $.ajax( {
          url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + qr,
          dataType: 'jsonp',
          type: 'POST',
          crossDomain: true,
          headers: { 'Api-User-Agent': 'FCCWikiviewer/1.0' },
          success: function(data) {
            for( var s in data.query.search){
              var html = "";
              html += "<div class='post'>";
              html += "<h3>" + data.query.search[s].title +"</h3>";
              html += "<p class='snippet'>" + data.query.search[s].snippet + "...</p>"
              html += "</div>"
              $("#searchResults").append(html).addClass("animated fadeInUp");
            }

          }
      } );

    }

  });


});
