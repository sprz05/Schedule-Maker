var text;
var selectedText;
var next = document.getElementById("next");
var inputAssignments = document.getElementById("inputAssignments");
var addAssignmentBtn = document.getElementById("addAssignmentBtn");
var closeAssignmentBtn = document.getElementById("closeAssignmentBtn");
var schedule = document.getElementById("schedule");
var closeAddAssignmentBtn = document.getElementById("closeAddAssignmentBtn");

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

  newDiv.id = 'temp'+elementCounter;
  newDiv.classList = "div";
  elementCounter++

  if (classN == "blue"){
    newDiv.classList = "blue"
      } else if (classN == "red"){
        newDiv.classList = "red"
      } else if (classN == "green"){
        newDiv.classList = "green"
      } else if (classN == "blue2"){
        newDiv.classList = "blue2"
      }

  // and give it some content
  var newContent = document.createTextNode(text); 
  
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 

  $(function() {
    
    var currentlyDragged;
 
    $("div").draggable({
     drag: function (e) {
         currentlyDragged = e.target.id
         selectedText = event.target;
         text = $(selectedText).html();     
    }
    });

$(function () {
    $("div").dblclick(function (e) {
        $("#editHeader").css("display","block");
        clickedTD = event.target;
    });
});

  });
  document.getElementById("input").value = " ";
}




var editTxt = document.getElementById("editTxt");
var redBg = document.getElementById("redBg");
var del = document.getElementById("del");
var clickedTD;




function closeEditH(){
  $("#editHeader").css("display","none");
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
            $(currentEle).html($(".thVal").val().trim());
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val().trim());
    });
}

//edit color

  $(function () {
    $(redBg).click(function (e) {
        $(clickedTD).css("background-color", "red");
    });
});

$(function () {
    $(blueBg).click(function (e) {
        $(clickedTD).css("background-color", "blue");
    });
});

$(function () {
    $(whiteBg).click(function (e) {
        $(clickedTD).css("background-color", "white");
        $(clickedTD).css("color", "blue");
    });
});

//delete

 $(function () {
    $("#del").click(function (e) {
          $(clickedTD).html(" ").css("background-color", "white");
    });
});

function updateVal(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" value="' + " " + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val().trim());
             $("#editHeader").css("display","none");
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val().trim());
            $("#editHeader").css("display","none");
    });



}


  //"trash can"


  $(function() {
    
    var trash = document.getElementById('trash');

    $(trash).droppable({
      drop: function( event, ui ) {
      let removeEl = document.querySelector('#' + ui.draggable[0].getAttribute('id'))
      removeEl.remove();
      
      }
    });
  });


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


function updateVal2(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" value="' +  value  + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val().trim());
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val().trim());
    });
}