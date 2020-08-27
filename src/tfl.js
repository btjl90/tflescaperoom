var slsCode = 0;
var aiedCode = 0;
var cotfCode = 0;
var alpmCode = 0;
var casualCode = 0;

function showMainRoom() {
    document.getElementById("intro").style.display = 'none';
    document.getElementById("mainRoom").style.display = 'block';
    document.getElementById("slsRoom").style.display = 'none';
    document.getElementById("slsRoomPuzzle").style.display = 'none';
    document.getElementById("cotfRoom").style.display = 'none';
    document.getElementById("cotfRoomPuzzle").style.display = 'none';
    document.getElementById("aiedRoom").style.display = 'none';
    document.getElementById("aiedRoomPuzzle").style.display = 'none';
    document.getElementById("alpmRoom").style.display = 'none';
    document.getElementById("alpmRoomPuzzle").style.display = 'none';
    document.getElementById("alpmRoomPuzzleTwo").style.display = 'none';
}
//main room
function checkCasualPuzzle() {
    if(document.getElementById("casualInput").value == 'tfl!') {
       alert("Congratulations, you have obtained one part of the key to unlock the exit, do not type in the chat: A");
        casualCode = 1;
    } else {
        alert("Please attempt the questions.");
    }
}
function checkStatus() {
    var totalSolve = 5 - slsCode - aiedCode - cotfCode - alpmCode - casualCode;
    if(slsCode == 1 && aiedCode == 1 && cotfCode == 1 && alpmCode == 1 && casualCode == 1) {
        document.getElementById("mainRoomPuzzle").style.display = 'block';
    } else {
        alert("Please obtain " + totalSolve + " keys before attempting to exit.");
    }
}
function showSlsRoom() {
    document.getElementById("mainRoom").style.display = 'none';
    document.getElementById("mainRoomPuzzle").style.display = 'none';
    document.getElementById("slsRoom").style.display = 'block';
    alert("Welcome to the lair of SLS!");
}
function showAiedRoom() {
    document.getElementById("mainRoom").style.display = 'none';
    document.getElementById("mainRoomPuzzle").style.display = 'none';
    document.getElementById("aiedRoom").style.display = 'block';
    alert("Welcome to the den of AIEd!");
}
function showCotfRoom() {
    document.getElementById("mainRoom").style.display = 'none';
    document.getElementById("mainRoomPuzzle").style.display = 'none';
    document.getElementById("cotfRoom").style.display = 'block';
    alert("Welcome to the sanctuary of COTF!");
}
function showAlpmRoom() {
    document.getElementById("mainRoom").style.display = 'none';
    document.getElementById("mainRoomPuzzle").style.display = 'none';
    document.getElementById("alpmRoom").style.display = 'block';
    alert("Welcome to the cave of ALP/Makers Education!");
}
function checkMainPuzzle() {
    if(document.getElementById("c1").checked == true && document.getElementById("c2").checked == false && document.getElementById("c3").checked == false && document.getElementById("c4").checked == false && document.getElementById("c5").checked == false && document.getElementById("c6").checked == false && document.getElementById("c7").checked == false && document.getElementById("c8").checked == false && document.getElementById("c9").checked == false && document.getElementById("c10").checked == true && document.getElementById("c11").checked == false && document.getElementById("c12").checked == true && document.getElementById("c13").checked == false && document.getElementById("c14").checked == false && document.getElementById("c15").checked == false && document.getElementById("c16").checked == false && document.getElementById("c17").checked == false && document.getElementById("c18").checked == false && document.getElementById("c19").checked == true && document.getElementById("c20").checked == false && document.getElementById("c21").checked == false && document.getElementById("c22").checked == false && document.getElementById("c23").checked == false && document.getElementById("c24").checked == true && document.getElementById("c25").checked == false && document.getElementById("c26").checked == false && document.getElementById("c27").checked == false && document.getElementById("c28").checked == false && document.getElementById("c29").checked == true && document.getElementById("c30").checked == true && document.getElementById("c31").checked == false && document.getElementById("c32").checked == false && document.getElementById("c33").checked == false && document.getElementById("c34").checked == false && document.getElementById("c35").checked == false && document.getElementById("c36").checked == false && document.getElementById("c37").checked == false && document.getElementById("c38").checked == false && document.getElementById("c39").checked == true && document.getElementById("c40").checked == false) {
        alert("You successfully called for Solar Man!");
        document.getElementById("mainRoom").style.display = 'none';
        document.getElementById("mainRoomPuzzle").style.display = 'none';
        document.getElementById("exitRoom").style.display = 'block';
    } else {
        alert("Nothing seem to happen.");
    }
}
//sls room
function showSlsPuzzle() {
    document.getElementById("slsRoomPuzzle").style.display = 'block';
}
function checkSlsPuzzle() {
    if(document.getElementById("slsUserInput").value == 'AGILE' && document.getElementById("slsPassInput").value == 'Forum' || document.getElementById("slsPassInput").value == 'forum') {
        alert("Congratulations, you have obtained one part of the key to unlock the exit, do not type in the chat: G");
        slsCode = 1;
    } else {
        alert("Nothing seem to happen.")
    }
}
//cotf room
function pressProjector() {
    document.getElementById("projectorButton").style.display = 'none';
    document.getElementById("cotfClue").style.display = 'block';
}
function showCotfPuzzle() {
    document.getElementById("cotfRoomPuzzle").style.display = 'block';
}
function checkCotfPuzzle() {
    if(document.getElementById("cotf1").value == '4' && document.getElementById("cotf2").value == '3' && document.getElementById("cotf3").value == '7' && document.getElementById("cotf4").value == '2') {
       alert("Congratulations, the chest opened and you have obtained one part of the key to unlock the exit, do not type in the chat: TA");
        cotfCode = 1;
       } else {
           alert("Nothing seem to happen.");
       }
}
//aied room
function showAiedPuzzle() {
    document.getElementById("aiedRoomPuzzle").style.display = 'block';
}
function checkAiedPuzzle() {
    if(document.getElementById("aied1").value == 1 && document.getElementById("aied2").value == 2 && document.getElementById("aied3").value == 2) {
        alert("Congratulations, the droid awakens and you have obtained one part of the key to unlock the exit, do not type in the chat: NU");
        aiedCode = 1;
    } else {
        alert("Nothing seem to happen.");
    }
}
//alpm room
function showAlpmPuzzle() {
    document.getElementById("alpmRoomPuzzle").style.display = 'block';
}
function checkAlpmPuzzleTwo() {
    if(document.getElementById("alpmBlank").value == 'ALP9ME8') {
        alpmCode = 1;
        alert("Congratulations, you have obtained one part of the key to unlock the exit, do not type in the chat: IK");
    } else {
        alert("Nothing seem to happen.");
    }
}
//for alpm room dnd
var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 1, 2];
  var terms = ['3D Printer', 'Coding & Programming'];
  numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<2; i++ ) {
    $('<div>' + terms[numbers[i]-1] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  var words = ['Tools of Maker Education', 'ALP Tech Domain'];
  for ( var i=1; i<=2; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
      //ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    //$(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
    
    if ( slotNumber != cardNumber ) {
      //ui.draggable.addClass( 'correct' );
    //ui.draggable.draggable( 'disable' );
    //$(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    //correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == 2 ) {
    document.getElementById("alpmRoomPuzzle").style.display = 'none';
    document.getElementById("alpmRoomPuzzleTwo").style.display = 'block';
    alert("Another puzzle has appeared...");
      init();
  }
}

//main room modals
function openLevelModal() {
    document.getElementById("levelModal").style.display = "block";
}
function openToasterModal() {
    document.getElementById("toasterModal").style.display = "block";
}
function openTabletModal() {
    document.getElementById("tabletModal").style.display = "block";
}
function openFridgeModal() {
    document.getElementById("fridgeModal").style.display = "block";
}
//sls room modals
function openAgileModal() {
    document.getElementById("agileModal").style.display = "block";
}
function openReleaseModal() {
    document.getElementById("releaseModal").style.display = "block";
}
function openNoteModal() {
    document.getElementById("noteModal").style.display = "block";
}
//cotf room modals
function openDtModal() {
    document.getElementById("dtModal").style.display = "block";
}
function openPostModal() {
    document.getElementById("postModal").style.display = "block";
}
function openProjectorModal() {
    document.getElementById("projectorModal").style.display = "block";
}
//aied room modals
function openAiModal() {
    document.getElementById("aiModal").style.display = "block";
}
function openDroneModal() {
    document.getElementById("droneModal").style.display = "block";
}
//alpm room modals
function openFolderModal() {
    document.getElementById("folderModal").style.display = "block";
}
function open3dModal() {
    document.getElementById("3dModal").style.display = "block";
}
function openMicroModal() {
    document.getElementById("microModal").style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("levelModal")) {
    document.getElementById("levelModal").style.display = "none";
  }
   if (event.target == document.getElementById("toasterModal")) {
    document.getElementById("toasterModal").style.display = "none";
  } 
    if (event.target == document.getElementById("tabletModal")) {
    document.getElementById("tabletModal").style.display = "none";
  } 
    if (event.target == document.getElementById("fridgeModal")) {
    document.getElementById("fridgeModal").style.display = "none";
  } 
    if (event.target == document.getElementById("agileModal")) {
    document.getElementById("agileModal").style.display = "none";
  } 
    if (event.target == document.getElementById("releaseModal")) {
    document.getElementById("releaseModal").style.display = "none";
  } 
    if (event.target == document.getElementById("noteModal")) {
    document.getElementById("noteModal").style.display = "none";
  } 
    if (event.target == document.getElementById("dtModal")) {
    document.getElementById("dtModal").style.display = "none";
  } 
    if (event.target == document.getElementById("postModal")) {
    document.getElementById("postModal").style.display = "none";
  } 
    if (event.target == document.getElementById("projectorModal")) {
    document.getElementById("projectorModal").style.display = "none";
  } 
    if (event.target == document.getElementById("aiModal")) {
    document.getElementById("aiModal").style.display = "none";
  } 
    if (event.target == document.getElementById("droneModal")) {
    document.getElementById("droneModal").style.display = "none";
  } 
    if (event.target == document.getElementById("folderModal")) {
    document.getElementById("folderModal").style.display = "none";
  } 
    if (event.target == document.getElementById("3dModal")) {
    document.getElementById("3dModal").style.display = "none";
  } 
    if (event.target == document.getElementById("microModal")) {
    document.getElementById("microModal").style.display = "none";
  } 
}