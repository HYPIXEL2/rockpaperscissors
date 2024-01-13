let win,loss,tie,total;
win=0;
loss=0;
tie=0;

function handleButtonClick(buttonId)
{
  let cam = Math.random();

  if (buttonId==='reset')
  {
    var textById= document.getElementById("score");
    textById.textContent="Played:0,Won:0,Lost:0,Tie:0";

    var imageById = document.getElementById("player");
    imageById.src="nothing.png";

    var imageById = document.getElementById("computer");
    imageById.src="nothing.png";

    win=0;
    loss=0;
    tie=0;
    total=0;
  }

  //rock
  else if (buttonId==='rock')
  {

    var imageById = document.getElementById("player");
    imageById.src = "rock-emoji.png";

    console.log(cam);
    if(cam<=1/3)
    {

      var elementById = document.getElementById("wl");
      elementById.textContent = "Its a tie";

      var imageById = document.getElementById("computer");
      imageById.src= "rock-emoji.png";

      tie++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total},Won:${win},Lost:${loss},Tie:${tie}`;
    }
    else if(cam<=2/3)
    {
      
      var elementById = document.getElementById("wl");
      elementById.textContent = "You lost";

      var imageById = document.getElementById("computer");
      imageById.src= "paper-emoji.png";

      loss++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total}, Won:${win},Lost:${loss},Tie:${tie}`;
    }
    else
    {
  
      
      var elementById = document.getElementById("wl");
      elementById.textContent = "You won";

      var imageById = document.getElementById("computer");
      imageById.src= "scissors-emoji.png";

      win ++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total}, Won:${win},Lost:${loss},Tie:${tie}`;
    }
  }

  //scissors
  else if (buttonId==='scissors')
  {
    var imageById = document.getElementById("player");
    imageById.src="scissors-emoji.png";
    console.log(cam);
    if(cam<=1/3)
    {
     
      var elementById = document.getElementById("wl");
      elementById.textContent = "You lost";

      var imageById = document.getElementById("computer");
      imageById.src= "rock-emoji.png";

      loss++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total}, Won:${win},Lost:${loss},Tie:${tie}`;
    }
    else if(cam<=2/3)
    {
      
      var elementById = document.getElementById("wl");
      elementById.textContent = "You won";

      var imageById = document.getElementById("computer");
      imageById.src= "paper-emoji.png";

      win++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total}, Won:${win},Lost:${loss},Tie:${tie}`;
    }
    else
    {
     
      var elementById = document.getElementById("wl");
      elementById.textContent = "Its a tie";

      var imageById = document.getElementById("computer");
      imageById.src= "scissors-emoji.png";

      tie++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total}, Won:${win},Lost:${loss},Tie:${tie}`;
    }
  }

  //paper
  else if(buttonId==='paper')
  {
    var imageById = document.getElementById("player");
    imageById.src="paper-emoji.png";
    console.log(cam);
    if(cam<=1/3)
    {
     
      var elementById = document.getElementById("wl");
      elementById.textContent = "You won";

      var imageById = document.getElementById("computer");
      imageById.src= "rock-emoji.png";

      win++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total}, Won:${win},Lost:${loss},Tie:${tie}`;
    }
    else if(cam<=2/3)
    {
      
      var elementById = document.getElementById("wl");
      elementById.textContent = "Its a tie";

      var imageById = document.getElementById("computer");
      imageById.src= "paper-emoji.png";

      tie++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total}, Won:${win},Lost:${loss},Tie:${tie}`;
    }
    else
    {
     
      var elementById = document.getElementById("wl");
      elementById.textContent = "You lost";

      var imageById = document.getElementById("computer");
      imageById.src= "scissors-emoji.png";

      loss++;
      total=win+loss+tie;

      var textById = document.getElementById("score");
      textById.textContent = `Played:${total}, Won:${win},Lost:${loss},Tie:${tie}`;
    }
  }
}
