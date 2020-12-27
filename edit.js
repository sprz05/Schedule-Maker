var text;
var selectedText;
var next = document.getElementById("next");
var inputAssignments = document.getElementById("inputAssignments");
var addAssignmentBtn = document.getElementById("addAssignmentBtn");
var closeAssignmentBtn = document.getElementById("closeAssignmentBtn");
var schedule = document.getElementById("schedule");
var closeAddAssignmentBtn = document.getElementById("closeAddAssignmentBtn");


var currentlyDragged;
 var currentClass;

var blue = document.getElementById("blue");
var blue2 = document.getElementById("blue2");

var mulAsi = document.getElementById("mulAsi");
var oneAsi = document.getElementById("oneAsi");




function showInputA(){
  inputAssignments.style.display = "block";
  
  blue.style.display = "none";
  mulAsi.style.display = "none";

  oneAsi.style.display = "block";
  blue2.style.display = "block";
  closeAddAssignmentBtn.style.display = "block";

  next.style.display = "none";
  addAssignmentBtn.style.display = "none";
}


function closeInputA(){
    inputAssignments.style.display = "none";
}

function closeInputA(){
  inputAssignments.style.display = "none";
  addAssignmentBtn.style.display = "block";
}

function showSchedule(){
  inputAssignments.style.display = "none";
  schedule.style.display = "block";
}





var elementCounter = 0;
function addElement() {
  var classN = event.target.id;
  text = document.getElementById("input").value;
  // create a new div element and give it a unique id
  var newDiv = document.createElement("div");
  newDiv.id = 'temp' + elementCounter;
  newDiv.classList = "div";
  elementCounter++
  if (classN == "blue") {
    newDiv.classList = "blue"
    newDiv.setAttribute("data-id", "blue"); 
  } /*else if (classN == "red") {
    newDiv.classList = "red"
    newDiv.setAttribute("data-id", "red");
  } else if (classN == "green") {
    newDiv.classList = "green"
    newDiv.setAttribute("data-id", "green");
  } else if (classN == "blue2") {
    newDiv.classList = "blue2"
    newDiv.setAttribute("data-id", "blue2");
  }*/
  // and give it some content
  var newContent = document.createTextNode(text);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  
  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

  $(function() {

    var currentlyDragged;

/*
    $(function() {
      $("div").dblclick(function(e) {
        $("#editHeader").css("display", "block");
        clickedTD = event.target;
        $(clickedTD).addClass("selected");
      });
    });
*/

    $("[id^='temp']").draggable({
      drag: function(e) {
        currentClass = $("#" + currentlyDragged).attr("class");
        console.log(currentClass);

        currentlyDragged = e.target.id;
        console.log(currentlyDragged)

        selectedText = event.target;
        text = $(selectedText).html();
      }
    });


    var slectedTD;
    var currentlyDraggedNewDiv;
    $("td").droppable({
      drop: function(event, ui) {
        selectedTD = event.target.id;

        $(this).removeClass();
        var newDiv = $("<div>"+ text +"</div>");
        //$(newDiv).addClass($("#" + currentlyDragged).attr("data-id"));
        $( this ).append(newDiv);
 
        console.log(currentlyDragged)

        $("div").draggable({
        drag: function(e) {

        currentlyDraggedNewDiv = e.target;
        text = $(currentlyDraggedNewDiv).html();
        console.log(currentlyDraggedNewDiv);

      }
    }); 
        $("#" + currentlyDragged).remove();
      }
    });

  });

  document.getElementById("input").value = " ";


}

var clickedTH;

  $(function () {
    $(".th").dblclick(function (e) {
        clickedTH = event.target; 
        e.stopPropagation();
        var currentEle = $(clickedTH);
        var value = $(clickedTH).html();
        updateVal2(currentEle, value);
    });
});


var tdCounter = 0;
function addTr() {
  // create a new div element and give it a unique id
  var newTr = 
  $("<tr><th class='th' width=100>0:00 PM</th><td width='100'></td><td width='100'></td><td width='100'></td><td width='100'></td><td width='100'></td><td class='delTr' onclick='delTr()'><button class='editDel'>Delete</button></td></tr>")
  newTr.id = 'td' + tdCounter;
  newTr.classList = "div";
  tdCounter++

  // add the newly created element and its content into the table
  $("table").append(newTr)

    $(".th").dblclick(function (e) {
        clickedTH = event.target; 
        e.stopPropagation();
        var currentEle = $(clickedTH);
        var value = $(clickedTH).html();
        updateVal2(currentEle, value);
    });
 // alert("you just added a row to your table double click the 0:00 to edit the time")
}



var editTxt = document.getElementById("editTxt");
var redBg = document.getElementById("redBg");
var del = document.getElementById("del");
var clickedTD;



var div = document.getElementsByTagName("div");
function closeEditH(){
  $("#editHeader").css("display","none");
  $(div).removeClass("selected"); 
}

//edit text

  $(function () {
    $(editTxt).click(function (e) {
        e.stopPropagation();
        var currentEle = $(clickedTD);
        var value = $(clickedTD).html();
        updateVal(currentEle, value);
    });
});

function updateVal(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" value="' +  text  + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val());
            closeEditH();
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val());
            closeEditH();
    });
}



function updateVal(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" value="' + " " + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val());
             $("#editHeader").css("display","none");
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val());
            $("#editHeader").css("display","none");
    });



}


  //"trash can"


  $(function() {
    
    var trash = document.getElementById('trash');

    $("#trash").droppable({
      drop: function( event, ui ) {
      for (let i = 0; i < ui.draggable.length; i++) {
        ui.draggable[i].remove();
      }
      
      }
    });
  });






var takeScreenShot = function() {
    html2canvas(document.getElementById("container"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
            tempcanvas.width=350;
            tempcanvas.height=350;
            var context=tempcanvas.getContext('2d');
            context.drawImage(canvas,112,0,288,200,0,0,350,350);
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = 'screenshot.jpg';
            link.click();
        }
    });
}

//how can we save it in local storage??????
var htmlContents = document.getElementById("output");

function save(){
localStorage.setItem('mySchedule', JSON.stringify(htmlContents ));
}

function showImgSchedule(){
localStorage.getItem('mySchedule');
console.log("showingSchedule")
}
//how can we save it in local storage??????





 /* var td = document.getElementsByTagName('td');

  $( "td" ).hover(
  function() {
    $( this ).append( $( "<a class='button'> Delete</a>" ) );

    function dump() {
      $(this).parent().html("").removeClass();
    }
$( "a" ).on( "click", dump );


  }, function() {
    $( this ).find( "a" ).last().remove();
  }
);*/


var doubleClickedTD;

$(function () {
    $("td").dblclick(function (e) {
      doubleClickedTD = event.target;
        $("#editHeader").css("display","none");
        $("#editTDHeader").css("display","block");       
    });
});


function closeEditHTD(){
  $("#editTDHeader").css("display","none");
}

//edit text


  $(function () {
    $(editTDTxt).click(function (e) {
        e.stopPropagation();
        var currentEle = $(doubleClickedTD);
        var value = $(doubleClickedTD).html();
        updateVal(currentEle, value);
    });
});

function updateVal(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" value="' +  text  + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val());
            closeEditHTD();
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val());
            closeEditHTD();
    });
}

//edit color


  $(function () {
    $(redBgTD).click(function (e) {
      $(doubleClickedTD).removeClass();
        $(doubleClickedTD).addClass("redBg");
        closeEditHTD();
    });
});

$(function () {
    $(blueBgTD).click(function (e) {
      $(doubleClickedTD).removeClass();
        $(doubleClickedTD).addClass("blue2Bg");
        closeEditHTD();
    });
});


$(function () {
    $(purpleBgTD).click(function (e) {
      $(doubleClickedTD).removeClass();
        $(doubleClickedTD).addClass("blueBg");
        closeEditHTD();
    });
});

$(function () {
    $(greenBgTD).click(function (e) {
      $(doubleClickedTD).removeClass();
        $(doubleClickedTD).addClass("greenBg");
        closeEditHTD();
    });
});


function showSnap(){ 
  document.getElementById("saveSchedTxt").style.display ="block";
  document.getElementById("screenshotTxt").style.display = "block";
}


  function checkSnap(){
    document.getElementById("editConsole").style.display = "none";
    document.getElementById("CheckSnap").style.display = "block";
  }

  function goBackToMain(){
    document.getElementById("editConsole").style.display = "block";
    document.getElementById("CheckSnap").style.display = "none";
  }

   


function set(){
 localStorage.setItem('Table', document.getElementById("tableInIndex").innerHTML);
 getAndSet();
}

window.addEventListener('load', (event) => {

      var currentlyDragged;

    $("div").draggable({
      drag: function(e) {

        currentlyDragged = e.target;
        newDiv = currentlyDragged;
        console.log(currentlyDragged)

        text = $(currentlyDragged).html();

      }
    });



    var slectedTD;
    var currentlyDraggedNewDiv;
    $("td").droppable({
      drop: function(event, ui) {
        selectedTD = event.target.id;


        var newDiv = $("<div>"+ text +"</div>");


        $( this ).append(newDiv);
 
        console.log(currentlyDragged)

        $("div").draggable({
        drag: function(e) {

        currentlyDraggedNewDiv = e.target;
        text = $(currentlyDraggedNewDiv).html();




        console.log(currentlyDraggedNewDiv);

      }
    }); 
        $(currentlyDraggedNewDiv).remove();
      }
    });

  });



function updateVal2(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" value="' +  value  + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val());
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val());
    });
}



    
