$(document).ready(function(){
  //enter button animations
  $("#enterButton").click(function(){
    $("#gameImage").fadeOut("slow");
    $("#enterButton").fadeOut("slow");
    $("#gameImageWell").fadeOut("slow");
    $("#gameImageWell").delay("slow").fadeIn("slow").css('background-image', 'url("playercharacter.png")');
    $("form").delay("slow").fadeIn("slow");

  })

//music
  var ambient=document.getElementById("ambient");
  ambient.play();
  ambient.volume = 0.1;
});

var gameStart = false;

//Booleans for items/requirements pickups
var hasOccultBook=false;
var hasBandages=false;
var hasCoffee=false;
var hasUniform=false;
var hasScissors=false;


//individuals requirements
//Mayu
var isMayuCommunist = false;
var isMayuUpset = false;
var isMayuComplete =false;
var hasMayuConfessed=false;

//Uehara
var hasHadFight=false;
var bandageOptionFromFight=false;
var isBandagedAndUniform=false;
var willDyeHair=false;
var isUeharaComplete=false;
var hasUeharaConfessed = false;

//Sadako
var isExorcised=false;
var isGivenScissors=false;
var isGivenCoffee=false;
var isSadakoComplete=false;
var hasSadakoConfessed=false;

//Maeda
var hasMaedaConfessed=false;

var mayuIndexChanged=false;
var ponderOptionAdded=false;

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

//select room function for game pages. also contains controles for choice buttons
function SelectRoom(roomIndex)
{
	var room = roomArray[roomIndex];
  currentRoomIndex = roomIndex;
	document.getElementById('roomTitle').innerHTML = room.title;
	document.getElementById('roomText').innerHTML = room.text;
  document.getElementById('roomImage').src=room.image;

  document.getElementById('roomChoices').innerHTML = "";
	for(var i = 0; i < room.choices.length; i++)
	{
    document.getElementById("roomChoices").innerHTML += "<button class = 'btn-primary' 'roomChoiceButton' type= 'button' onclick = \"setTimeout(SelectRoom("+ room.choices[i].index +"),3000)\">" + room.choices[i].text + "</button>";
  }

  if (roomIndex == 1)
  {
    gameStart= true;
  }
  if (roomIndex == 0 && gameStart == true)
  {
    window.location.href = 'gamesetup.html';
  }

  //Yokoyama controls
    //communist ending
    if (roomIndex == 12)
    {
      isMayuCommunist = true;
      roomArray[9].choices.splice(0,1);
    }

    //upsetting Mayu
    if (roomIndex == 28)
    {
      isMayuUpset = true;
      roomArray[9].choices.splice(0,1); //remove ability to speak to mayu in class
      roomArray[26].choices.splice(0.1); //remove ability to find keisuke
      roomArray[16].choices.splice(0,0,{text:"Comfort Yokoyama", index: 16}); //index to be changed to 18 - addition of comfort mayu choice
      roomArray[17].choices.splice(0,0,{text:"Comfort Yokoyama", index: 16}); //option from after finding scissors
    }

    //completeing Mayu
    if (roomIndex==18)
    {
      isMayuComplete = true;
      roomArray[16].choices.splice(0,1); //remove comfort option
      roomArray[17].choices.splice(0,1);
    }


  //Uehara controls
    //Lost property
    if (roomIndex == 15)
    {
      hasUniform = true;
      roomArray[14].choices.splice(0,1); //remove option to find uniform

    }

    //fighting
    if (roomIndex == 22)
    {
      hasHadFight = true;

      //remove fight and reason option and add hair choice
      roomArray[20].choices.splice(0,2,{text:'Convince him to dye his hair back to a natural colour', index: 24});

      //add choice to bandage and give uniform
      if (hasBandages == true && hasUniform == true)
      {
        //add bandage and uniform choice button
        roomArray[24].choices.splice(0,0,{text:"Bandage Uehara and give him the spare uniform", index:23});

        roomArray[20].choices.splice(1,0,{text:"Bandage Uehara and give him the spare uniform", index:23});

        hasBandages = false;
        }
    }

      if (hasBandages == true && hasUniform == true && bandageOptionFromFight==false)
      {
        roomArray[22].choices.splice(0,0,{text:"Bandage Uehara and give him the spare uniform", index:23});
        bandageOptionFromFight = true;
      }




    if (roomIndex == 23)
    {
      isBandagedAndUniform = true;

      //remove bandage and uniform option
      if(willDyeHair == true)
      {
        roomArray[20].choices.splice(0,1);
      }
      else
      {
        roomArray[20].choices.splice(1,1);
        roomArray[24].choices.splice(0,1);
      }

    }

    if (roomIndex == 24)
    {
      willDyeHair = true;
      //remove dye hair option from all instances
      roomArray[20].choices.splice(0,1);
      roomArray[23].choices.splice(0,1);
    }

    if (willDyeHair == true && isBandagedAndUniform == true)
    {
      isUeharaComplete = true;
    }

    //Iwashima controls
    //library choice button control - occult book
      if (roomIndex == 8)
      {
        hasOccultBook = true;
         roomArray[7].choices.splice(0,1);

         roomArray[30].choices.splice(0,0,{text:"Attempt to Exorcise her", index:31})
      }
      //home econommics - hasScissors
      if (roomIndex == 17)
      {
        hasScissors = true;
        roomArray[16].choices.splice(0,1); //no more find scissors choice

        roomArray[30].choices.splice(0,0,{text:"Give Iwashima the scissors", index:32})
        roomArray[31].choices.splice(0,0,{text:"Give Iwashima the scissors", index:33})
        roomArray[34].choices.splice(0,0,{text:"Give Iwashima the scissors", index:33})

        if (isExorcised == true)
        {
            roomArray[29].choices.splice(0,0,{text:"Give Iwashima the scissors", index:33})
        }
      }

      //entrance canned Coffee
      if (roomIndex == 36)
      {
        hasCoffee = true;

        roomArray[35].choices.splice(1,1); //remve ability to buy Coffee

        roomArray[33].choices.splice(0,0,{text:"Give Iwashima some coffee", index:34})
        if (isExorcised == true)
        {
          if (hasScissors == false || isGivenScissors == true)
            {
            roomArray[29].choices.splice(0,0,{text:"Give Iwashima some coffee", index:34})
            }
          else
            {
            roomArray[29].choices.splice(1,0,{text:"Give Iwashima some coffee", index:34})
            }
          }
        }

      //nurse office - Exorcise
      if (roomIndex == 30)
      {
        roomArray[30].text= "You call out to Iwashima again."
        +"<br/><br/>Iwashima emerges, smiling at you in a creepy manner."
        +"<br/><br/>Your skin crawls slightly. Something isn't quite right."
      }
      if (roomIndex == 31)
      {
        isExorcised = true;
        hasBandages = true;

        roomArray[29].text= "You are in the Nurse’s Office."
      	+"<br/><br/>Iwashima is in the room, looking a little weak."
      	+"<br/><br/>You no longer feel the strange, murderous aura that surrounded Iwashima before." //change text

        roomArray[29].choices.splice(0,1);

        if(hasScissors == true)
        {
          roomArray[29].choices.splice(0,0,{text:"Give Iwashima the scissors", index:30}) //index 33
        }

        if (hasCoffee == true)
        {
          if (hasScissors == false)
          {
          roomArray[29].choices.splice(0,0,{text:"Give Iwashima some coffee", index:29}) // index 34
          }
          else
          {
          roomArray[29].choices.splice(1,0,{text:"Give Iwashima some coffee", index:29}) // index 34
          }
        }
      } // roomIndex 31 end

      // give scissors after exorcism
      if (roomIndex == 33)
      {
        isGivenScissors = true;

        roomArray[29].choices.splice(0,1);
        roomArray[34].choices.splice(0,1);
      }

      if (roomIndex == 34)
      {
        isGivenCoffee = true;

        roomArray[33].choices.splice(0,1);

        if(hasScissors == true)
        {
          if(isGivenScissors == false)
          {
            roomArray[29].choices.splice(1,1);
          }
        }
        else
          {
            roomArray[29].choices.splice(0,1);
          }
        }

        //completing sadako
        if (isGivenCoffee == true && isGivenScissors == true)
        {
          isSadakoComplete = true;
        }

        //sadako controls end


        //end game
          //shoes Locker
          if (isUeharaComplete == true && isSadakoComplete == true && (isMayuComplete == true || isMayuCommunist == true))
          {
            roomArray[35].choices[0].index = 38;

            if (mayuIndexChanged == false && isMayuComplete == true)
            {
              roomArray[39].choices[3].index = 44;
              mayuIndexChanged = true;
            }
          }

          //confessions
          if (roomIndex == 39)
          {
            roomArray[39].text = "You walk back towards the small group.<br/><br/>Everyone is looking at you expectantly."
          }

          if(hasMaedaConfessed==true && hasUeharaConfessed == true && hasSadakoConfessed == true && hasMayuConfessed == true)
          {
            roomArray[39].choices.splice(0,0,{text:"Consider everyone's confessions", index:45})
          }

          //maeda confessed
          if (roomIndex == 40)
          {
            roomArray[39].choices.splice(0,1);

            hasMaedaConfessed = true;

            if(hasMaedaConfessed==true && hasUeharaConfessed == true && hasSadakoConfessed == true && hasMayuConfessed == true)
            {
              roomArray[39].choices.splice(0,0,{text:"Consider everyone's confessions", index:45})
            }
          }

          //sadako confessed
          if (roomIndex == 41)
          {

            if (hasMaedaConfessed == true)
            {
              roomArray[39].choices.splice(0,1);
            }
            else
           {
              roomArray[39].choices.splice(1,1);
            }
              hasSadakoConfessed = true;

              if(hasMaedaConfessed==true && hasUeharaConfessed == true && hasSadakoConfessed == true && hasMayuConfessed == true)
              {
                roomArray[39].choices.splice(0,0,{text:"Consider everyone's confessions", index:45})
              }
          }

          //uehara confessed
          if (roomIndex == 42)
          {


            if (hasMaedaConfessed == true || hasSadakoConfessed == true)
            {
              if (hasSadakoConfessed == true && hasMaedaConfessed == true)
              {
                roomArray[39].choices.splice(0,1);
              }
              else {
                roomArray[39].choices.splice(1,1);
              }
            }
            else
            {
                roomArray[39].choices.splice(2,1);
            }

              hasUeharaConfessed = true;

              if(hasMaedaConfessed==true && hasUeharaConfessed == true && hasSadakoConfessed == true && hasMayuConfessed == true)
              {
                roomArray[39].choices.splice(0,0,{text:"Consider everyone's confessions", index:45})
              }
          }

          //mayu confessed
          if (roomIndex == 44)
          {


            if (hasMaedaConfessed == true || hasUeharaConfessed == true || hasSadakoConfessed == true)
            {
              if (hasMaedaConfessed == true && hasUeharaConfessed == true && hasSadakoConfessed == true)
              {
                roomArray[39].choices.splice(0,1);
              }
              else if ((hasMaedaConfessed == true && hasUeharaConfessed == true) || (hasUeharaConfessed == true && hasSadakoConfessed == true) || (hasMaedaConfessed == true && hasSadakoConfessed == true))
              {
                roomArray[39].choices.splice(1,1);
              }
              else
              {
                roomArray[39].choices.splice(2,1);
              }
            }
            else {
              roomArray[39].choices.splice(3,1);
            }

            hasMayuConfessed = true;

            if(hasMaedaConfessed==true && hasUeharaConfessed == true && hasSadakoConfessed == true && hasMayuConfessed == true)
            {
              roomArray[39].choices.splice(0,0,{text:"Consider everyone's confessions", index:45})
            }
          }

}


//about me text functions
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

//boolean to determine background
var isElmo = false;
//inverts about page colours and changes background, about me image and language
function invert(){

$("html").toggleClass("inversed");
if (isElmo == false)
{
$("body").css('background-image', 'url("elmo.gif")');
$("#myFace").attr("src","dancingskeleton.gif");

isElmo = true;
}
else {
  $("body").css('background-image', 'url("petals2.gif")')
  $("#myFace").attr("src","myface.png");
  isElmo = false;
}
}

function FadeIn()
{
  $("#gamePagesWell").hide().fadeIn("slow");
}
