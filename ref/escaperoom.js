var labVaccine = 0;
var zombieCure = 0;
var nuclearAbort = 0;

function showExit() {
    if(confirm("Are you sure you want to exit this room?")) {
        exitGame();
    }
}

function exitGame() {
    document.getElementById("mainRoom").style.display = 'none';
     document.getElementById("statusVaccine").style.display = 'none';
     document.getElementById("statusZombie").style.display = 'none';
     document.getElementById("statusNuclear").style.display = 'none';
    if(zombieCure == 1 && nuclearAbort == 1) {
        document.getElementById("exitSuccess").style.display = 'block';
    } else {
        document.getElementById("exitFail").style.display = 'block';
    }
    if(zombieCure == 0) {
        document.getElementById("failZombie").style.display = 'block';
    }
    if(nuclearAbort == 0) {
        document.getElementById("failNuclear").style.display = 'block';
    }
}

function showMainRoom() {
    document.getElementById("mainRoom").style.display = 'block';
    document.getElementById("intro").style.display = 'none';
    document.getElementById("computerRoom").style.display = 'none';
     document.getElementById("computerPuzzle").style.display = 'none';
    document.getElementById("labRoom").style.display = 'none';
     document.getElementById("labPuzzle").style.display = 'none';
     document.getElementById("labPuzzle2").style.display = 'none';
    document.getElementById("cageRoom").style.display = 'none';
    document.getElementById("cagePuzzle").style.display = 'none';
    document.getElementById("warRoom").style.display = 'none';
    document.getElementById("warPuzzle").style.display = 'none';
}

//for main room
function showBut1() {
    document.getElementById("tabletBut1").style.display = 'block';
     document.getElementById("tabletBut2").style.display = 'none';
     document.getElementById("tabletBut3").style.display = 'none';
}

function showBut2() {
    document.getElementById("tabletBut1").style.display = 'none';
     document.getElementById("tabletBut2").style.display = 'block';
     document.getElementById("tabletBut3").style.display = 'none';
}

function showBut3() {
    document.getElementById("tabletBut1").style.display = 'none';
     document.getElementById("tabletBut2").style.display = 'none';
     document.getElementById("tabletBut3").style.display = 'block';
}

function showWarRoom() {
    document.getElementById("warRoom").style.display = 'block';
    document.getElementById("mainRoom").style.display = 'none';
}

function hideLabRoom() {
    alert("This room is locked.");
}

function showLabRoom() {
    document.getElementById("labRoom").style.display = 'block';
    document.getElementById("mainRoom").style.display = 'none';
}

function showCageRoom() {
    document.getElementById("cageRoom").style.display = 'block';
    document.getElementById("mainRoom").style.display = 'none';
}

function showComputerRoom() {
    document.getElementById("computerRoom").style.display = 'block';
    document.getElementById("mainRoom").style.display = 'none';
}
//for com room
function showComputerPuzzle() {
    document.getElementById("computerPuzzle").style.display = 'block';
}

function checkCom() {
    if(document.getElementById("com1").value == 'crimZon' && document.getElementById("com2").value == '73') {
        document.getElementById("patientModal").style.display = 'block';
        document.getElementById("enterLab").innerHTML = '<area shape="rect" coords="185,0,220,25" onclick="showLabRoom()">';
        document.getElementById("denyLab").innerHTML = '';
    } else {
        alert("Nothing seem to happen.");
    }
}
//for lab room
function showLabPuzzle() {
    document.getElementById("labPuzzle").style.display = 'block';
}

function checkLabPuzzle2() {
    if(document.getElementById("patientName").value == 3) {
        labVaccine = 1;
        document.getElementById("statusVaccine").style.display = 'block';
    }
    alert ("You have obtained a vaccine, and placed it in a syringe.");
}
//for cage room
function showCagePuzzle() {
    document.getElementById("cagePuzzle").style.display = 'block';
}

function checkCagePuzzle() {
    if(document.getElementById("padOne").value == 1 && document.getElementById("padTwo").value == 1 && document.getElementById("padThree").value == 2 && document.getElementById("padFour").value == 5) {
        if(labVaccine == 1) {
            alert("You released the zombie and successfully administered the cure. The zombie returns to human form proving that the cure works.");
            zombieCure = 1;
            document.getElementById("statusZombie").style.display = 'block';
            document.getElementById("statusVaccine").style.display = 'none';
        } else {
        alert("You released the zombie but administered the incorrect cure. You were then killed by the zombie.");
            document.getElementById("exitFail").style.display = 'block';
            document.getElementById("cageRoom").style.display = 'none';
            document.getElementById("cagePuzzle").style.display = 'none';
            document.getElementById("statusNuclear").style.display = 'none';
        }
} else {
    alert("Nothing seem to happen.");
}
}
//for war room
function showWarPuzzle() {
    document.getElementById("warPuzzle").style.display = 'block';
}

function checkWarPuzzle() {
    if(document.getElementById("c1").checked == true && document.getElementById("c4").checked == true && document.getElementById("c12").checked == true && document.getElementById("c13").checked == true && document.getElementById("c15").checked == true && document.getElementById("c17").checked == true && document.getElementById("c22").checked == true && document.getElementById("c23").checked == true && document.getElementById("c26").checked == true && document.getElementById("c27").checked == true && document.getElementById("c31").checked == true && document.getElementById("c34").checked == true && document.getElementById("c36").checked == true && document.getElementById("c38").checked == true && document.getElementById("c40").checked == true && document.getElementById("c41").checked == true && document.getElementById("c43").checked == true && document.getElementById("c46").checked == true && document.getElementById("c48").checked == true && document.getElementById("c50").checked == true && document.getElementById("c51").checked == true && document.getElementById("c53").checked == true && document.getElementById("c55").checked == true && document.getElementById("c58").checked == true && document.getElementById("c60").checked == true) {
        alert("You have successfully aborted the nuclear launch.");
        document.getElementById("statusNuclear").style.display = 'block';
        nuclearAbort = 1;
    } else {
        alert("Nothing seem to happen.");
    }
}
//for lab room dnd
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
  var numbers = [ 1, 2, 3, 4, 5, 6 ];
  var terms = ['PURPLE', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE', 'RED'];
  numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<6; i++ ) {
    $('<div>' + terms[numbers[i]-1] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  var words = [ '1', '2', '3', '4', '5', '6' ];
  for ( var i=1; i<=6; i++ ) {
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

  if ( correctCards == 6 ) {
    document.getElementById("labPuzzle").style.display = 'none';
      document.getElementById("labPuzzle2").style.display = 'block';
      init();
  }

}
//main room modals
function openNoteModal() {
  document.getElementById("noteModal").style.display = "block";
}

function openTabletModal() {
  document.getElementById("tabletModal").style.display = "block";
}

function openFileModal() {
  document.getElementById("fileModal").style.display = "block";
}

//com room modals
function openPostModal() {
  document.getElementById("postModal").style.display = "block";
}
//lab room modals
function openSignModal() {
  document.getElementById("signModal").style.display = "block";
}

function openRainbowModal() {
  document.getElementById("rainbowModal").style.display = "block";
}

function openSyringeModal() {
  document.getElementById("syringeModal").style.display = "block";
}
//cage room modals
function openWarningModal() {
  document.getElementById("warningModal").style.display = "block";
}
//war room modals
function openMissileModal() {
  document.getElementById("missileModal").style.display = "block";
}
function openMushroomModal() {
  document.getElementById("mushroomModal").style.display = "block";
}
function openMorseModal() {
  document.getElementById("morseModal").style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("noteModal")) {
    document.getElementById("noteModal").style.display = "none";
  }
    if (event.target == document.getElementById("tabletModal")) {
    document.getElementById("tabletModal").style.display = "none";
  }
    if (event.target == document.getElementById("fileModal")) {
    document.getElementById("fileModal").style.display = "none";
  }
     if (event.target == document.getElementById("postModal")) {
    document.getElementById("postModal").style.display = "none";
  }
     if (event.target == document.getElementById("patientModal")) {
    document.getElementById("patientModal").style.display = "none";
  }
    if (event.target == document.getElementById("signModal")) {
    document.getElementById("signModal").style.display = "none";
  }
    if (event.target == document.getElementById("rainbowModal")) {
    document.getElementById("rainbowModal").style.display = "none";
  }
    if (event.target == document.getElementById("syringeModal")) {
    document.getElementById("syringeModal").style.display = "none";
  }
     if (event.target == document.getElementById("warningModal")) {
    document.getElementById("warningModal").style.display = "none";
  }
    if (event.target == document.getElementById("missileModal")) {
    document.getElementById("missileModal").style.display = "none";
  }
    if (event.target == document.getElementById("mushroomModal")) {
    document.getElementById("mushroomModal").style.display = "none";
  }
    if (event.target == document.getElementById("morseModal")) {
    document.getElementById("morseModal").style.display = "none";
  }
}