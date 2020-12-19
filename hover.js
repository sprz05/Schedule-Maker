var td = document.getElementsByTagName('td');

  $( "td" ).hover(
  function() {
    $( this ).append( $( "<button id="delBtn">Delete</button>" ));

    function dump() {
      $(this).parent().html("").removeClass("div");
    }
$(delBtn).on( "click", dump );


  }, function() {
    $( this ).find(delBtn).last().remove();
  }
);