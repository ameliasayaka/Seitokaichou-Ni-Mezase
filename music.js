window.onload=function()
{
  var ambient=document.getElementById("ambient");
  ambient.play();
  ambient.volume = 0.1;
  document.getElementById('alien').pause();
  document.getElementById('coin').pause();
  var bell = document.getElementById('schoolbell');
  bell.pause();


}

function togglePlay()
{
  var myAudio = document.getElementById("ambient");
  var alienAudio = document.getElementById("alien");



  if (myAudio.paused && alienAudio.paused)
  {
    myAudio.play();
  }
  else if (myAudio.paused && !alienAudio.paused)
  {
    alienAudio.pause();
  }
  else {
    myAudio.pause();
  }

}
function playAlien()
{

  var alienAudio = document.getElementById("alien");
  var myAudio = document.getElementById("ambient");

  ;

  SwitchText();
  invert();
  if (alienAudio.paused)
  {
    myAudio.pause();
    alienAudio.play();


  }
  else
    {
      alienAudio.pause();
      myAudio.play();
    }
  }
function coinNoise()
{
  var coinNoise = document.getElementById('coin');
  coinNoise.play();
  coinNoise.volume= 0.1;
}

function schoolBellNoise()
{
  var schoolBellNoise = document.getElementById('schoolbell');
  schoolBellNoise.play();
  schoolBellNoise.volume= 0.1;
}
function toggleBGM()
{
  var myAudio = document.getElementById("ambient");

  if (myAudio.paused)
  {
    myAudio.play();
  }

  else {
    myAudio.pause();
  }
}
