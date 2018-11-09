$(document).ready(function(){
  var scorecard = new Scorecard();

  $('#runningTotal').text(scorecard.total);

  $('#one').click(function(){
    scorecard.addOne();
    updateTotal();
  });

  $('#two').click(function(){
    scorecard.addTwo();
    updateTotal();
  });

  $('#three').click(function(){
    scorecard.addThree();
    updateTotal();
  });

  $('#four').click(function(){
    scorecard.addFour();
    updateTotal();
  });

  $('#five').click(function(){
    scorecard.addFive();
    updateTotal();
  });

  $('#six').click(function(){
    scorecard.addSix();
    updateTotal();
  });

  $('#seven').click(function(){
    scorecard.addSeven();
    updateTotal();
  });

  $('#eight').click(function(){
    scorecard.addEight();
    updateTotal();
  });

  $('#nine').click(function(){
    scorecard.addNine();
    updateTotal();
  });

  $('#strike').click(function(){
    scorecard.addTen();
    updateTotal();
  });

  $('#zero').click(function(){
    scorecard.addZero();
    updateTotal();
  });

  $('#finish').click(function(){
    if(scorecard.total === 0){
      alert('Gutter Game!');
    } else if(scorecard._strikeArray.length === 10) {
      alert('Well done you rolled the perfect game!');
    } else {
      alert('Well done you scored '+scorecard.total);
    };
  });

  // function updateTotal(){
  //   $('#runningTotal').text(scorecard.total);
  //   for (var i = 1; i <= 20; i ++){
  //     $('#move' + i).text(scorecard._scoreArray[i - 1]);
  //   };
  //   $('#frame1').text(scorecard.frameOne());
  //   $('#frame2').text(scorecard.frameTwo());
  //   $('#frame3').text(scorecard.frameThree());
  //   $('#frame4').text(scorecard.frameFour());
  //   $('#frame5').text(scorecard.frameFive());
  //   $('#frame6').text(scorecard.frameSix());
  //   $('#frame7').text(scorecard.frameSeven());
  //   $('#frame8').text(scorecard.frameEight());
  //   $('#frame9').text(scorecard.frameNine());
  //   $('#frame10').text(scorecard.frameTen());
  // };

  function updateTotal(){
    $('#runningTotal').text(scorecard.total);
    console.log('total without bonus '+ scorecard.total);

    $('#move1').text(scorecard._scoreArray[0]);
    $('#move2').text(scorecard._scoreArray[1]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[0]+scorecard._scoreArray[1]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move2').text("");
      $('#move2').text(scorecard._scoreArray[1]);
    }

    $('#move3').text(scorecard._scoreArray[2]);
    $('#move4').text(scorecard._scoreArray[3]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[2]+scorecard._scoreArray[3]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move4').text("");
      $('#move4').text(scorecard._scoreArray[3]);
    }

    $('#move5').text(scorecard._scoreArray[4]);
    $('#move6').text(scorecard._scoreArray[5]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[4]+scorecard._scoreArray[5]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move6').text("");
      $('#move6').text(scorecard._scoreArray[5]);
    }

    $('#move7').text(scorecard._scoreArray[6]);
    $('#move8').text(scorecard._scoreArray[7]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[6]+scorecard._scoreArray[7]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move8').text("");
      $('#move8').text(scorecard._scoreArray[7]);
    }

    $('#move9').text(scorecard._scoreArray[8]);
    $('#move10').text(scorecard._scoreArray[9]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[8]+scorecard._scoreArray[9]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move10').text("");
      $('#move10').text(scorecard._scoreArray[9]);
    }

    $('#move11').text(scorecard._scoreArray[10]);
    $('#move12').text(scorecard._scoreArray[11]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[10]+scorecard._scoreArray[11]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move12').text("");
      $('#move12').text(scorecard._scoreArray[11]);
    }

    $('#move13').text(scorecard._scoreArray[12]);
    $('#move14').text(scorecard._scoreArray[13]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[12]+scorecard._scoreArray[13]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move14').text("");
      $('#move14').text(scorecard._scoreArray[13]);
    }

    $('#move15').text(scorecard._scoreArray[14]);
    $('#move16').text(scorecard._scoreArray[15]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[14]+scorecard._scoreArray[15]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move16').text("");
      $('#move16').text(scorecard._scoreArray[15]);
    }

    $('#move17').text(scorecard._scoreArray[16]);
    $('#move18').text(scorecard._scoreArray[17]);
    // Validates the roll cannot be more than 10
    if(scorecard._scoreArray[16]+scorecard._scoreArray[17]>=11){
      alert('Sorry try again, max pins in one frame is 10');
      scorecard._scoreArray.pop();
      $('#move18').text("");
      $('#move18').text(scorecard._scoreArray[17]);
    }

    // frame 10

    $('#move19').text(scorecard._scoreArray[18]);
    if (scorecard._scoreArray[18]===10){
      $('#move20').text(scorecard._scoreArray[19]);
      $('#move21').text(scorecard._scoreArray[20]);
      $('#totalAmount').text(scorecard.resultTen);
      if (scorecard._scoreArray[19]+scorecard._scoreArray[20]>=11){
        alert('Sorry try again, max pins in one frame is 10');
        scorecard._scoreArray.pop();
        $('#move21').text("");
        $('#move21').text(scorecard._scoreArray[20]);
        $('#totalAmount').text(scorecard.resultTen);
      }
    } else {
      $('#move20').text(scorecard._scoreArray[19]);
      // Validates the roll cannot be more than 10
      if(scorecard._scoreArray[19]===10){
        $('#move21').text(scorecard._scoreArray[20]);
      } else if (scorecard._scoreArray[18]+scorecard._scoreArray[19]===10) {
        $('#move21').text(scorecard._scoreArray[20]);
        $('#totalAmount').text(scorecard.resultTen);
      }
      if (scorecard._scoreArray[18]+scorecard._scoreArray[19]>=11){
        alert('Sorry try again, max pins in one frame is 10');
        scorecard._scoreArray.pop();
        $('#move20').text("");
        $('#move20').text(scorecard._scoreArray[19]);
      }
      $('#totalAmount').text(scorecard.resultTen);
    }


    $('#frame1').text(scorecard.frameOne());
    $('#frame2').text(scorecard.frameTwo());
    $('#frame3').text(scorecard.frameThree());
    $('#frame4').text(scorecard.frameFour());
    $('#frame5').text(scorecard.frameFive());
    $('#frame6').text(scorecard.frameSix());
    $('#frame7').text(scorecard.frameSeven());
    $('#frame8').text(scorecard.frameEight());
    $('#frame9').text(scorecard.frameNine());
    $('#frame10').text(scorecard.frameTen());
  };

});
