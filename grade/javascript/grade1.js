var score;
var coins;
if(JSON.parse(localStorage.getItem('savedscore')) > 0) {
  score = JSON.parse(localStorage.getItem('savedscore'))
  document.getElementById("finprompt").innerHTML="Score\n"+score;
  document.getElementById("dropdownscore").innerHTML="Score: "+score;
}
else{
  score = 0;
}

if(JSON.parse(localStorage.getItem('savedcoin')) > 0) {
  coins = JSON.parse(localStorage.getItem('savedcoin'))
  document.getElementById("coins").innerHTML="Coins\n"+coins;
  document.getElementById("dropdowncoins").innerHTML="Coins: "+coins;
}
else{
  coins = 0;
}


if(coins>0)
  {
    document.getElementById("game").style.display = "block";
  }
else
  {
    document.getElementById("game").style.display = "none";
  }

 operations = ['+','-'];
 operation = operations[Math.floor(Math.random() * operations.length)];
 if(operation == '+')
 {
    num1 = 500;
    num2 = 500;
    accans = num1 + num2;
    while(accans>70)
    {
      num1 = Math.floor(Math.random()*70+1);
      num2 = Math.floor(Math.random()*70+1);
      accans = num1 + num2;
    } 
    document.getElementById("question").innerHTML = num1+" + "+num2;
 }
 else if(operation == '-')
 {
   num1 = Math.floor(Math.random()*50+1);
   num2 = Math.floor(Math.random()*50+1);
  if(num1 > num2)
  {
    document.getElementById("question").innerHTML = num1+" - "+num2;
    accans = num1 - num2;
  }
  else
  {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    document.getElementById("question").innerHTML = num1+" - "+num2;
    accans = num1 - num2;
  }
  
 }

function game () {
  coins =  coins - 1;
  document.getElementById("coins").innerHTML="Coins\n"+coins;
  document.getElementById("dropdowncoins").innerHTML="Coins: "+coins;
  window.location.href="/game";
  document.getElementById("game").style.display = "none";
}
 
function newquestion() {
  localStorage.setItem('savedscore',JSON.stringify(score));
  if(score % 15 == 0 && score != 0)
    {
      coins = coins + 1;
      document.getElementById("coins").innerHTML="Coins\n"+coins;
      document.getElementById("dropdowncoins").innerHTML="Coins: "+coins;
    }
  if(coins>0)
    {
      document.getElementById("game").style.display = "block";
    }
  else
    {
      document.getElementById("game").style.display = "none";
    }
  localStorage.setItem('savedcoin',JSON.stringify(coins));
  document.getElementById('textbox').style.color = "white";
  document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw blue";
  document.getElementById("textbox").readOnly = false;
    
  function setCaretPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos); 
  } 
  else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

  var input = document.getElementById('textbox');
  setCaretPosition(input, input.value.length);
  document.getElementById('textbox').value = '';
   operations = ['+','-'];
 operation = operations[Math.floor(Math.random() * operations.length)];
 if(operation == '+')
 {
    num1 = 500;
    num2 = 500;
    accans = num1 + num2;
    while(accans>70)
    {
      num1 = Math.floor(Math.random()*70+1);
      num2 = Math.floor(Math.random()*70+1);
      accans = num1 + num2;
    } 
    document.getElementById("question").innerHTML = num1+" + "+num2;
 }
 else if(operation == '-')
 {
   num1 = Math.floor(Math.random()*50+1);
   num2 = Math.floor(Math.random()*50+1);
  if(num1 > num2)
  {
    document.getElementById("question").innerHTML = num1+" - "+num2;
    accans = num1 - num2;
  }
  else
  {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    document.getElementById("question").innerHTML = num1+" - "+num2;
    accans = num1 - num2;
  }
  
 }
}

function actual() {
  if ($(window).width() < 900) {
    document.getElementById('textbox').value = accans;
    document.getElementById('textbox').style.textShadow = "0px 0px white";
    document.getElementById('textbox').style.color = "green";
  }
  else {
    document.getElementById('textbox').value = accans;
    document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw green";
  }
}

function outputname() {
  document.getElementById("textbox").readOnly = true;
  var x,y,name,a,b,answer;
  y = document.getElementById("textbox").value;
  if (y == accans) {
    if ($(window).width() < 900) {
      score = score + 1;
      document.getElementById('textbox').style.textShadow = "0px 0px white";
      document.getElementById('textbox').style.color = "green";
      document.getElementById("finprompt").innerHTML="Score\n"+score;
      document.getElementById("dropdownscore").innerHTML="Score: "+score;
    }
    else {
      score = score + 1;
      document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw green";
      document.getElementById("finprompt").innerHTML="Score\n"+score;
      document.getElementById("dropdownscore").innerHTML="Score: "+score;
    }
  } 
  else {
    if ($(window).width() < 900) {
      if(score>1) {
        score = score - 2;
        document.getElementById('textbox').style.textShadow = "0px 0px white";
        document.getElementById('textbox').style.color = "red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
      else if(score==1) {
        score = score - 1;
        document.getElementById('textbox').style.textShadow = "0px 0px white";
        document.getElementById('textbox').style.color = "red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
      else {
        document.getElementById('textbox').style.textShadow = "0px 0px white";
        document.getElementById('textbox').style.color = "red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
    }
    else {
      if(score>1) {
        score = score - 2;
        document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
      else if(score==1) {      
        score = score - 1;
        document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
      else {
        document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
    }
  }
}

var input = document.getElementById("textbox");
input.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("check").click();
    setTimeout(newquestion,2250);
  }
});

function setCaretPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  } 
  else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

var input = document.getElementById('textbox');
setCaretPosition(input, input.value.length);

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}


// Install input filters.
setInputFilter(document.getElementById("textbox"), function(value) {
  return /^-?\d*$/.test(value); });