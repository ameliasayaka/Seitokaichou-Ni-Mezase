$(document).ready(function(){
  $("#enterButton").click(function(){
    $("#gameImage").fadeOut("slow");
    $("#enterButton").fadeOut("slow");
    $("form").delay("slow").fadeIn("slow");
    $('#gameImageWell').delay("slow").css('background-image', 'url("playercharacter.png")');
  })

  var ambient=document.getElementById("ambient");
  ambient.play();
  ambient.volume = 0.1;
});



function OnLoad()
{
  var firstname = localStorage.getItem("firstname");
  document.getElementById('firstname').innerText = firstname;
  var lastname = localStorage.getItem("lastname");
  document.getElementById('lastname').innerText = lastname;

  document.body.style.height= "100%";

  
  SelectRoom(0);
}

function StorePlayerData()
{
  var firstName = document.forms[0]["firstname"].value;
  localStorage.setItem("firstname",firstName);

  var lastName = document.forms[0]["lastname"].value;
  localStorage.setItem("lastname",lastName);

}

function SelectRoom(roomIndex)
{
	var room = roomArray[roomIndex];
	document.getElementById('roomTitle').innerHTML = room.title;
	document.getElementById('roomText').innerHTML = room.text;
 document.getElementById('roomImage').src=room.image;

document.getElementById('roomChoices').innerHTML = "";
	for(var i = 0; i < room.choices.length; i++)
	{
		document.getElementById("roomChoices").innerHTML += "<button class = 'btn-primary' type= 'button' onclick = SelectRoom("+ room.choices[i].index +")>" + room.choices[i].text + "</button>";
	}
}

var aboutMeText = ["Name:","Amelia Cutler","Age:","22","Star Sign","Cancer","Likes:","Spicy food, Cats, X-Files","Dislikes:","Cold Weather, Capitalism"]
var japaneseAboutMeText =
["名前：","アミリア　カトラー","年齢：","二十ニ歳","星印：","カンサー","好きな物：","辛い食べ物、猫、エックスファイルス","嫌いな物：","寒い天気、資本主義"]
function WriteAboutText()
{
var ambient=document.getElementById("ambient");
ambient.play();
ambient.volume = 0.1;

  document.getElementById('textOne').innerHTML = aboutMeText[0];
  document.getElementById('textTwo').innerHTML = aboutMeText[1];
  document.getElementById('textThree').innerHTML = aboutMeText[2];
  document.getElementById('textFour').innerHTML = aboutMeText[3];
  document.getElementById('textFive').innerHTML = aboutMeText[4];
  document.getElementById('textSix').innerHTML = aboutMeText[5];
  document.getElementById('textSeven').innerHTML = aboutMeText[6];
  document.getElementById('textEight').innerHTML = aboutMeText[7];
  document.getElementById('textNine').innerHTML = aboutMeText[8];
  document.getElementById('textTen').innerHTML = aboutMeText[9];
}


var isEnglish = true;
function SwitchText()
{
  if (isEnglish == true)
  {
    document.getElementById('textOne').innerHTML = japaneseAboutMeText[0];
    document.getElementById('textTwo').innerHTML = japaneseAboutMeText[1];
    document.getElementById('textThree').innerHTML = japaneseAboutMeText[2];
    document.getElementById('textFour').innerHTML = japaneseAboutMeText[3];
    document.getElementById('textFive').innerHTML = japaneseAboutMeText[4];
    document.getElementById('textSix').innerHTML = japaneseAboutMeText[5];
    document.getElementById('textSeven').innerHTML = japaneseAboutMeText[6];
    document.getElementById('textEight').innerHTML = japaneseAboutMeText[7];
    document.getElementById('textNine').innerHTML = japaneseAboutMeText[8];
    document.getElementById('textTen').innerHTML = japaneseAboutMeText[9];

    isEnglish = false
  }
  else {
    document.getElementById('textOne').innerHTML = aboutMeText[0];
    document.getElementById('textTwo').innerHTML = aboutMeText[1];
    document.getElementById('textThree').innerHTML = aboutMeText[2];
    document.getElementById('textFour').innerHTML = aboutMeText[3];
    document.getElementById('textFive').innerHTML = aboutMeText[4];
    document.getElementById('textSix').innerHTML = aboutMeText[5];
    document.getElementById('textSeven').innerHTML = aboutMeText[6];
    document.getElementById('textEight').innerHTML = aboutMeText[7];
    document.getElementById('textNine').innerHTML = aboutMeText[8];
    document.getElementById('textTen').innerHTML = aboutMeText[9];

    isEnglish = true;
  }

}

var isElmo = false;
function invert(){

$("html").toggleClass("inversed")
if (isElmo == false)
{
$("body").css('background-image', 'url("elmo.gif")')
$("#myFace").attr("src","dancingskeleton.gif");

isElmo = true;
}
else {
  $("body").css('background-image', 'url("petals2.gif")')
  $("#myFace").attr("src","myface.png");
  isElmo = false;
}
}
