//Load in player names
var lastName= localStorage.getItem("lastname");
var firstName= localStorage.getItem("firstname");



var roomArray = [
	{ //index 0
		title:'Classroom 2-D',
		text:"Kiritsu, Ki o Tsuke, Rei, Chakuseki. <br/><br/>You are in your classroom and your lesson has reached the end."
		+" You've performed well, as per usual, and carried out your class representative duties ith style, grace and elegance."
		+"<br/><br/>From the corner of your bespectacled eyes, you spot a smirking face.<br/><br/>The bastard has come to taunt you again.",
		image:src="classroom.png",
		choices:[
			{
				text:'Approach the smirking bastard',
				index:1
			}
		]
	},

	{	//index 1 Approach man
		title:'Classroom 2-D',
		text:"Maeda Itsuki... Your rival in the upcoming elections"
		+"<br/><br/>Maeda Itsuki: \"" + lastName + ". Looking glum as usual. Already given up on the campaign? It's probably for the best."
		+"<br/>You clearly don't have the skills or popularity to win!\""
		+"<br/><br/>He lets out a hearty laugh.",
		image:src="classroomWithRival.png",
		choices:
		[
			{
				text:'Punch him',
				index:2
			},
			{
				text:'Retort with your superior intelligence',
				index:3
			}
		]
	},

	{	//index 2 Punch him DEAD END
		title:'Classroom 2-D',
		text:"You punch Maeda in his stupid, beautiful face.<br/>Repeatedly."
		+"<br/>You keep punching until your classmates finally manage to drag you off the bloody, pulpy mess that used to be Maeda."
		+"<br/>Later, you find that your blows were fatal. You're going away for a long time, never reaching your goal to become the Student Council President..",
		image:src="maedaDeadEnd.gif",
		choices:[
			{
				text:'Game Over',
				index:0
			}
		]
	},

	{	//index 3 Retort
		title:'Classroom 2-D',
		text:"You smirk while pushing up your glasses in an extremely cool fashion.."
		+"<br/><br/> "+lastName+" "+firstName+": \"Oh Maeda, Maeda, Maeda."
		+"<br/>Boast all you like, but we both know you're not fit for the role of Student Council President."
		+"<br/>Do you really think those fashion glasses can claim victory over prescription?\""
		+"<br/><br/>Maeda's face drops as the full force of your witty retort smacks him.<br/>You've won this round."
		+"<br/><br/>Maeda Itsuki: \"F-f-fool. These glasses are prescription too.<br/>You'll lose, "+lastName+", mark my words."
		+"<br/>A democratic election is no more than a popularity contest"
		+"<br/>Besides, do you even have the mettle to improve troublesome students?"
		+"<br/>How about a a little bet? You sort out these three students by the end of the day, and I'll drop out of the race.\""
		+"<br/>Maeda scribbles some names on a piece of paper and hands it to you."
		+"<br/>\"If you manage this, even I will be impressed. Smell ya later\""
		+"<br/><br/>He laughs and leaves the classroom, fooling no one about his glasses",
		image:src="classroomWithRival.gif",
		choices:[
			{
				text:'Ponder his words',
				index:4
			}
		]
	},

		{	//index 4 Ponder words
		title:'Classroom 2-D',
		text:"As much as you hate to admit it, Maeda is right."
		+"<br/><br/>Though obviously perfect for the job, you are a long way from winning."
		+"<br/>At this rate Maeda would win on popularity alone, and he was right about proving yourself."
		+"<br/>With Maeda out of the race, it would be an easy victory.. <br/>You read the note he gave to you:"
		+"<br/>\"These are the three students"
		+"<br/>Yokoyama Mayu: 2nd Year. A flashy, popular girl. Constantly in trouble for her accessories, makeup and short skirt"
		+"<br/>Uehara Kei: 3rd Year. A high school delinquent. Smoking, fighting, dyed hair and an improper uniform are the main grievances"
		+"<br/>Iwashima Sadako: 1st Year. Strange rumors that she's possesed, but she mostly just skips class to sleep"
		+"<br/>I wont hold my breath\""
		+"<br/><br/>Just three students? Maeda is underestimating you. It's time to wipe that smirk off his face.",
		image:src="classroomnote.png",
		choices:[
			{
				text:'Leave Classroom',
				index:5
			}
		]
	},

	{	//Index 5 - 2nd Floor Hallway
	title:'2nd Floor Hallway',
	text:"You are in the Hallway on the Second Floor."
	+"<br/>The Second Year Classrooms, like your own, are located here."
	+"<br/>The library is also on this floor.",
	image:src="hallway.png",
	choices:[
			{
				text:'Go to Stairwell',
				index:6
			},
			{
				text:'Go To Library',
				index:7
			},
			{
				text:'Go to Class 2-A',
				index:9
			}
		]
	},

	{	//Index 6 Stairwell
	title:'Stairwell',
	text:"You are at the Stairwell."
	+"<br/>You can access other floors and the roof from here.",
	image:src="stairwell.png",
	choices:[
			{
				text:'Go To 3rd Floor Hallway',
				index:14
			},
			{
				text:'Go To 2nd Floor Hallway',
				index:5
			},
			{
				text:'Go To 1st Floor Hallway',
				index:25
			},
			{
				text:'Go To Roof',
				index:19
			}
		]
	},

	{	//Index 7 - Library
	title:'Library',
	text:"You are in the Library."
	+"<br/>As per usual, it is quiet. You feel at ease being surrounded by all the books."
	+"<br/>You feel a moment of peace, as you inhale, taking in the glorious musty smell of pages."
	+"<br/><br/>You notice that someone has left a pile of old books on a table.",
	image:src="library.png",
	choices:[
			{
					text:'Search the pile of books',
					index:8
				},
			{
				text:'Leave the Library',
				index:5
			}
		]
	},

	{	//Index 8 - Search Pile of books
	title:'Library',
	text:"You rummage eagerly through the pile of old books."
	+"<br/><br/>One in particular catches your eye and you pick it up."
	+"<br/>It's an old, tattered book on the Occult."
	+"<br/><br/>This probably won't be particularly useful,"
	+"<br/>but you can't resist a book you haven't read before..",
	image:src="libraryWithOccult.gif",
	choices:[
			{
				text:'Leave the Library',
				index:5
			}
		]
	},

	{	//Index 9 - Classroom 2-A
	title:'Classroom 2-A',
	text:"You are in Classroom 2-A."
	+"<br/>You remember that Yokoyama Mayu is in this class."
	+"<br/>There are many student chattering happily, enjoying their break.",
	image:src="classroom.png",
	choices:[
			{
				text:'Find Yokoyama',
				index:10
			},
			{
				text:'Leave the Classroom',
				index:5
			}
		]
	},

	{	//Index 10 - Find Yokoyama
	title:'Classroom 2-A',
	text:"You see a garish, flashy girl, and are sure that she is Yokoyama."
	+"<br/><br/>"+lastName+" "+firstName+": \"Yokoyama Mayu?"
	+"<br/>I'd like to talk to you about your blatant disregard for the uniform rules.\""
	+"<br/><br/>She looks at you and scoffs, deciding you aren't even worth wasting her words on.",
	image:src="yokoyamapeace.gif",
	choices:[
			{
				text:'Berate Her',
				index:11
			},
			{
				text:'Teach her the faults of materialism',
				index:12
			},
			{
				text:'Leave her be..',
				index:13
			}
		]
	},

	{	//Index 11 - Berate Mayu
	title:'Classroom 2-A',
	text:"How dare she look down on you! You decide to come down hard on her."
	+"<br/><br/>"+lastName+" "+firstName+": \"Frankly, I can't fathom how someone could willingly go through life like you are."
	+"<br/>I can't even tell what you look like with all that muck on your face."
	+"<br/>You look disgusting."
	+"<br/>Do you really think you're impressing anyone, looking like that?"
	+"<br/>It's repulsive.\""
	+"<br/><br/>You carry on like this for a while, your anger at her insolence consuming you."
	+"<br/>You only stop when Yokoyama, furious tears in her eyes, slaps you and storms off."
	+"<br/><br/>A little later, scandalous rumors start to spread about you,"
	+"<br/>saying that you were seen buying extremely questionable figurines in Akihabara."
	+"<br/><br/>You lose the elections, and all dignity and respect you had in school.",
	image:src="maedaDeadEnd.gif",
	choices:[
			{
				text:'Game Over',
				index:0
			}
		]
	},

	{	//Index 12 - Lesson on materialism
	title:'Classroom 2-A',
	text:"You channel the words of Karl Marx:"
+"<br/><br/>"+lastName+" "+firstName+" :\"In the social production of their existence, men inevitably enter into definite relations, which are independent of their will,"
+"<br/>namely relations of production appropriate to a given stage in the development of their material forces of production."
+"<br/>The totality of these relations of production constitutes the economic structure of society, the real foundation,"
+"<br/>on which arises a legal and political superstructure and to which correspond definite forms of social consciousness."
+"<br/>The mode of production of material life conditions the general process of social, political and intellectual life."
+"<br/>It is not the consciousness of men that determines their existence, but their social existence that determines their consciousness."
+"<br/>At a certain stage of development, the material productive forces of society come into conflict with the existing relations of "
+"<br/>production or—this merely expresses the same thing in legal terms—with the property relations"
+"<br/>within the framework of which they have operated hitherto."
+"<br/>From forms of development of the productive forces these relations turn into their fetters."
+"<br/>Then begins an era of social revolution.\""
+"<br/><br/>She looks at you with eyes of wonder, something awakening in her. She thanks you and leaves quickly.",
	image:src="classroom.png",
	choices:[
			{
				text:'Leave the Classroom',
				index:5
			}
		]
	},

	{	//Index 13 - Leave her be
	title:'Classroom 2-A',
	text:"You walk away for now."
	+"<br/><br/>It's clear she won't listen to anything you have to say."
	+"<br/>You'll have to find someone with more social sway to talk  some sense into her.",
	image:src="classroom.png",
	choices:[
			{
				text:'Leave Classroom',
				index:5
			}
		]
	},

	{	//Index 14 - 3rd Floor Hallway
	title:'3rd Floor Hallway',
	text:"You're in the Hallway on the Third Floor."
	+"<br/><br/>The First Years have their classrooms here."
	+"<br/>Also located on this floor are the Lost Property Closet and the Home Economics Room.",
	image:src="classroom.png",
	choices:[
			{
				text:'Search the Lost Property Closet',
				index:15
			},
			{
				text:'Go to the Home Economics Room',
				index:16
			},
			{
				text:'Go to Stairwell',
				index:6
			}
		]
	},

	{	//Index 15 -Lost Property
	title:'Lost Property',
	text:"You rummage through the dingy closet."
	+"<br/><br/>Though small, it's crammed with a lot."
	+"<br/> You find some strange things that you wish you hadn't seen at all..."
	+"<br/><br/>Eventually, you find some spare boys uniform, in suprisingly good condition!"
	+"<br/>These may come in handy later on.",
	image:src="classroom.png",
	choices:[
			{
				text:'Return to Hallway',
				index:14
			}
		]
	},

	{	//Index 16 -Home Economics Room
	title:'Lost Property',
	text:"You are in the Home Economics Room."
	+"<br/><br/>In here you usually have lessons on cooking, sewing and things of that sort."
	+"<br/><br/>There are various utensils in the drawers."
	+"<br/>You left a fine pair of scissors in here a week ago...",
	image:src="classroom.png",
	choices:[
		{
			text:'Search for your scissors',
			index:17
		},
			{
				text:'Leave Room',
				index:14
			}
		]
	},

	{	//Index 17 -Home Economics Room
	title:'Home Economics Room',
	text:"You decide now is a good time to reclaim those scissors."
	+"<br/><br/>You hope that they're still around and that no one has taken them."
	+"<br/>The drawers are the first place you look. Some are locked, for students safety."
	+"<br/>You search the unlocked drawers, but to no avail. All you find are some sewing needles and a bobby pin"
	+"<br/><br/>You start to leave, dejected, but the memory of those scissors compels you to do something risky."
	+"<br/>Using the bobby pin, you attempt to pick the lock of the drawers you haven't searched yet."
	+"<br/>You eventually manage, the locks not being particularly complex, and there you see your beautiful pair of scissors."
	+"<br/><br/>You are content.",
	image:src="classroom.png",
	choices:[
		{
			text:'Leave Room',
			index:14
		}
		]
	},

	{	//Index 18 -Home Economics Room
	title:'Home Economics Room',
	text:"You approach Yokoyama, who is sniffling softly in the corner of the room."
	+"<br/>She hasn't noticed your presence, and jumps slightly when you place a gentle hand on her shoulder."
	+"<br/><br/>"+lastName+" "+firstName+": \"Hey, it's okay. You can let it all out.\""
	+"<br/><br/>You take out your handkerchief and lightly dab away her tears."
	+"<br/><br/>Yokoyama Mayu: \"I-I-I'm sorry y-you had to s-s-see me l-like th-this..."
	+"<br/><br/>"+lastName+" "+firstName+": \"No, no. Don't apologise. It's good to cry."
	+"<br/>Besides, I'm glad that I get to see a little of the real you."
	+"<br/>You don't need to worry about other people."
	+"<br/>Conforming to other people's standards will only bring sadness. Be yourself, okay.\""
	+"<br/><br/>She laughs a little, though tears are still rolling down her cheeks."
	+"<br/><br/>Since you are in the Home Economics Room, you decide to whip up something small to lift her spirits."
	+"<br/>You hand over your delicious creation and leave her to eat in peace.",
	image:src="classroom.png",
	choices:[
		{
			text:'Leave Room',
			index:14
		}
		]
	},

	{	//Index 19 -Roof
	title:'Roof',
	text:"You are on the School Roof."
	+"<br/>The Roof is empty, suprisingly, aside from one intimidating figure staring out to the sky.",
	image:src="classroom.png",
	choices:[
		{
			text:'Approach the man',
			index:20
		},
			{
				text:'Leave Roof',
				index:6
			}
		]
	},

	{	//Index 20 - approach uehara
	title:'Roof',
	text:"Uehara Kei."
	 +"<br/><br/>As you approach him, you observe him carefully."
	 +"<br/>His sweat is glistening slightly under the glaring sun, accentuating his rippling muscles."
	 +"<br/>As you get close he glances at you."
	 +"<br/><br/>Uehara Kei: \"What?\"",
	image:src="schoolroofwithdelinquent.gif",
	choices:[
		{
			text:'Fight Him',
			index:22
		},
		{
			text:'Reason with him',
			index:21
		},
		{
			text:'Leave Promptly',
			index:6
		}
		]
	},

	{	//Index 21 - Reason with him
	title:'Roof',
	text:"You decide to try reason with the brute. No one could stand up to your superior intellect."
	 +"<br/><br/>"+lastName+" "+firstName+": \"I understand that you aren’t on the same level of intellect as me,so you may not comprehend how changing will be beneficial to you."
	 +"<br/>Currently, you’re a nuisance to this school, to society. You plan to carry on like this, do you? Where do you think you’ll be in 5 years?"
	 +"<br/>In the Yakuza? Dead in a gutter? There is still time to turn things around, you just need to listen to me.\""
	 +"<br/><br/>Uehara’s eyes sharpen, and his jaw clenches."
	 +"<br/><br/>Uehara Kei: \"You little shit. You’ll regret this.\""
	 +"<br/><br/>He decks you in the jaw, knocking you out in one powerful hit."
	 +"<br/><br/>Later they find you unconscious, with a suspicious puddle formed around you."
	 +"You become the laughing stock of the school, and lose miserably in the election.",
	image:src="classroom.png",
	choices:[
		{
			text:'Game Over',
			index:0
		}
		]
	},

	{	//Index 22 - Fight Him
	title:'Roof',
	text:"Something inside you tells you that there is only one way to get through to Uehara."
	+"<br/>You have to settle this like men."
	+"<br/><br/>You challenge him to spar with with you. Being in the Jiu Jitsu club, you have some confidence in your combat ability."
	+"<br/>Uehara may have brute strength, but you have agility, and more importantly, strategy."
	+"<br/>You spar for what feels like an eternity, using balance and defensive maneuvers to use his strength against him."
	+"<br/><br/>Uehara Kei: \"You know, I’ve decided I like you. You weren’t what I was expecting. Not just anyone could match me like that."
	+"<br/>Right.. I guess I could help you out. For a little bit.\""
	+"<br/><br/>He looks a little beaten up, but exhilarated.",
	image:src="classroom.png",
	choices:[ //choices added when available
		{
			text:'Convince him to dye his hair back to a natural colour',
			index:24
		},
		{
			text:'Leave',
			index:6
		}
		]
	},

	{	//Index 23 - Bandage him and give uniform
	title:'Roof',
	text:"You patch Uehara up using the bandages you found in the nurse’s office."
	+"<br/>It is an intimate moment, as you gently patch up  his slight wounds."
	+"<br/>He looks into your eyes, thanks you softly, and smiles."
	+"<br/><br/>"+lastName+" "+firstName+": \"Here, take this. You'll catch a cold.\""
	+"<br/><br/>You hand him a spare shirt and gakuran, luckily they fit reasonably well."
	+"<br/>He takes them off you."
	+"<br/><br/>Uehara Kei: \"Thanks man. I'll put these on in a bit.. I'm feeling a little hot at the moment..\"",
	image:src="classroom.png",
	choices:[ //choices added when available
		{
			text:'Convince him to dye his hair back to a natural colour',
			index:24
		},
		{
			text:'Leave',
			index:6
		}
		]
	},

	{	//Index 24 - Convince to dye hair
	title:'Roof',
	text:""+lastName+" "+firstName+": \"You know, I’m not just saying this because it’s for the rules, but I do think black hair would suit you more."
	+"<br/>Black hair is better.\""
	+"<br/><br/>You say this bluntly, not dropping your gaze from him."
	+"<br/>He looks slightly embarrassed."
	+"<br/>Uehara Kei: \"Yeah, yeah, you don’t need to dress it up, okay? I said I’d help you, so I’ll dye it. Doesn’t matter much to me either way.\"",
	image:src="schoolroofwithdelinquent.gif",
	choices:[
			{
			text:'Leave',
			index:6
			}
		]
	},

	{	//Index 25 - First Floor Hallway
	title:'1st Floor Hallway',
	text:"You are in the 1st Floor Hallway."
	+"<br/><br/>The Third years have their lessons here."
	+"<br/>You also have access to the Nurse’s Office, the Sport’s Field and the School Entrance.",
	image:src="classroom.png",
	choices:[
			{
			text:'Go to the Sports Field',
			index:26
			},
			{
			text:'Go to the Nurse\'s  Office',
			index:29
			},
			{
			text:'Go to the School Entrance',
			index:35
			},
			{
			text:'Return to Stairwell',
			index:6
			}
		]
	},

	{	//Index 26 - Sports Field
	title:'Sports Field',
	text:"You are in the Sports Field."
	+"<br/><br/>There are a group of boys playing football."
	+"<br/>Your childhood friend, Iwata Keisuke, usually is here."
	+"<br/>He is sporty and popular, especially with girls."
	+"<br/><br/>He also happens to be in the same class as Yokoyama Mayu."
	+"<br/>You remember that he has somme notes of yours that you need to pick up from him",
	image:src="classroom.png",
	choices:[
			{
			text:'Find Keisuke',
			index: 27
			},
			{
			text:'Leave',
			index:25
			}
		]
	},

	{	//Index 27 - Sports Field
	title:'Sports Field',
	text:"You find Keisuke playing football with some other boys in your year."
	+"<br/>He sees you and waves enthusiastially, and runs towards you."
	+"<br/><br/>Iwata Keisuke: \""+firstName+"! How's it going? You wanna join us?\""
	+"<br/><br/>He smacks you on the back enthusiastically."
	+"<br/><br/>"+lastName+" "+firstName+": \"Thanks Keisuke, but not today.<br/>I just wanted to ask whether I could pick my notes up from you.\""
	+"<br/><br/>Iwata Keisuke: \"Sure! They're just in my desk."
	+"<br/>Let's go get them now!\"",
	image:src="classroom.png",
	choices:[
			{
			text:'Go  with Keisuke to get your notes',
			index: 28
			}
		]
	},

	{	//Index 28 - Class 2-A with Keisuke
	title:'Class 2-A',
	text:"You make your way to Class 2-A with Keisuke."
	+"<br/><br/>As he rummages for your notes, you notice Yokoyama glancing over at Keisuke and blushing."
	+"<br/>This is a prime opportunity for you to take."
	+"<br/><br/>"+lastName+" "+firstName+": \"Hey, Keisuke, what kind of girl do you like?\""
	+"<br/><br/>He looks a little taken aback."
	+"<br/><br/>Iwata Keisuke: \"Hmm.. That's a little sudden.. I don't know.."
	+"<br/><br/>"+lastName+" "+firstName+": \"What about girls like Yokoyama? She's popular, isn't she?\""
	+"<br/><br/>Iwata Keisuke: \"Yokoyama?! No way, man! That girl is like a robot. She tries way too hard.\""
	+"<br/><br/>In that moment Yokoyama pushes past you, and you see there are tears streaming down her face."
	+"<br/>She runs out the classroom."
	+"<br/><br/>Iwata Keisuke: \"Ah.. she heard me.. Um.. Here are your notes. I'll see you later..\"",
	image:src="classroom.png",
	choices:[
			{
			text:'Go find Yokoyama and comfort her',
			index: 18
			},
			{
				text:'Leave Classroom',
				index: 5
			}
		]
	},

	{	//Index 29 - Nurse's Office
	title:'Nurse\'s Office',
	text:"You are in the Nurse’s Office."
	+"<br/><br/>It is cold, despite the warm weather, and you feel an unnatural chill down your spine.."
	+"<br/><br/>The room appears to be empty, but you feel as if you are being watched.",
	image:src="nurseOffice.png",
	choices:[
			{
			text:'Call out to see if anyone is here',
			index: 30
			},
			{
				text:'Leave',
				index: 25
			}
		]
	},

	{	//Index 30 - Nurse's Office - Call out
	title:'Nurse\'s Office',
	text: lastName+" "+firstName+": \"Hello? Is anyone around?\""
	+"<br/>Suddenly, a figure creeps out from behind the curtain surrounding the bed, towards you."
	+"It is Iwashima Sadako, and she is as unnerving as the rumours said."
	+"Iwashima Sadako: \"A-aah... "+lastName+".. How can I help?\""
	+"<br/><br/>She seems polite enough."
	+"<br/><br/>"+lastName+" "+firstName+": \"I need you to conform to school rules… please..\""
	+"<br/><br/>Iwashima Sadako: \"Ahh.. my hair… its too long… if you get me some scissors I can trim it now, if you’d like..\""
	+"<br/><br/>You see from under her hair she is smiling."
	+"<br/>It’s nice to encounter someone reasonable for once.",
	image:src="nurseOfficeWithJuon.png",
	choices:[
			{
				text:'Leave',
				index: 25
			}
		]
	},

	{	//Index 31 - Nurse's Office - Exorcise
	title:'Nurse\'s Office',
	text:"You don’t trust that creepy smile. It is all too convenient."
	+"<br/><br/>You follow your gut instinct and tell Iwashima that you’ll return promptly with some scissors and thank her."
	+"<br/>You leave the room, and find the pages on exorcism."
	+"<br/>Once you memorise the chant you burst back in, reciting the Buddhist prayer, quickly before Iwashima can retaliate."
	+"<br/><br/>She screeches loudly, and you see a black cloud, mildly resembling a human form, pour out from her mouth."
	+"<br/>Her eyes roll back, her body shudders, and eventually she collapses on the ground."
	+"<br/><br/>The room still retains an unnatural chill, it will take a while for things to return to normal."
	+"<br/><br/>Iwashima looks at you and smiles weakly."
	+"<br/><br/>Iwashima Sadako: \"Thank... you…\""
	+"<br/><br/>She places some bandages and plasters in your hand, as if they were a thank you gift."
	+"<br/>A little strange, but she's been through a lot..",
	image:src="exorcism.gif",
	choices:[
			{
				text:'Leave',
				index: 25
			}
		]
	},

	{	//Index 32 - Nurse's Office - Dead end scissors
	title:'Nurse\'s Office',
	text:"You don’t believe the stupid ghost rumours surrounding Iwashima."
	+"<br/>She seemed a pleasant, polite girl. She was probably just misunderstood. Like in that one anime the girls liked."
	+"<br/><br/>You happily pass her the scissors you got from the Home Economics room."
	+"<br/>She laughs sadistically as she gently strokes the pair of sharp scissors.."
	+"<br/><br/>Slowly she approaches you, her eyes manic."
	+"<br/>You feel fear flood into you and you’re frozen on the spot."
	+"<br/><br/>Iwashima Sadako: \""+firstName+" now... won't you stay with me forever..?\""
	+"<br/><br/>You see a flash of steel."
	+"<br/><br/>Then red."
	+"<br/><br/> Your vision blurs and fades to black as your life drains from you..",
	image:src="juonBadEnding.gif",
	choices:[
			{
				text:'Game Over',
				index: 0
			}
		]
	},

	{	//Index 33 - Nurse's Office - Post exorcism scissors
	title:'Nurse\'s Office',
	text:"You feel it's now safe to hand Iwashima the scissors."
	+"<br/>Iwashima smiles as you pass the scissors to her."
	+"<br/><br/>Iwashima Sadako: \"Thank you, "+lastName+"."
	+"<br/>It will feel good to finally get rid of all this hair."
	+"<br/>I’ll cut it when I’m feeling a little stronger\""
	+"<br/><br/>You can’t help but wonder what she’ll look like without all that hair in her face..",
	image:src="classroom.png",
	choices:[
			{
				text:'Leave',
				index: 25
			}
		]
	},

	{	//Index 34 - Nurse's Office - Post exorcism scissors
	title:'Nurse\'s Office',
	text:"Iwashima still is looking weak. The exorcism must have taken a lot out of her.."
	+"<br/><br/>You crouch down next to her and pass her the coffee you bought earlier."
	+"<br/><br/>"+lastName+" "+firstName+": \"Here. You must be exhausted."
	+"<br/>This will give you some energy. Rest up\""
	+"<br/><br/>She takes the coffee gratefully and chugs it down.",
	image:src="classroom.png",
	choices:[
			{
				text:'Leave',
				index: 25
			}
		]
	},

	{	//Index 35 -School Entrance
	title:'School Entrance',
	text:"You are at the the School Entrance."
	+"<br/><br/>There are the Shoe Lockers and Vending machines."
	+"<br/><br/>You can leave school from here.",
	image:src="shoelocker.png",
	choices:[
			{
				text: 'Get your shoes and leave',
				index: 37
			},
			{
				text:'Buy a Coffee',
				index: 36
			},
			{
				text: 'Go to Hallway',
				index: 25
			}
		]
	},

	{	//Index 36 - Buy Coffee
	title:'Vending Machines',
	text:"You buy a coffee from the vending machine.",
	image:src="coffee.gif",
	choices:[
			{
				text:'Return',
				index: 35
			}
		]
	},

	{	//Index 37 -incomplete leaving school
	title:'Shoes Locker',
	text:"You go to your shoes locker."
	+"<br/><br/>You still haven’t completed Maeda’s bet."
	+"<br/>You’re sure you can win nonetheless, and you head home happily."
	+"<br/>There is no way prescription would lose against fashion glasses, afterall."
	+"<br/><br/>The elections come round."
	+"<br/> It’s a close battle, but Maeda’s popularity clinches it..",
	image:src="maedaDeadEnd.gif",
	choices:[
			{
				text:'Game Over',
				index: 0
			}
		]
	},

	{	//Index 38- Shoes Locker complete
	title:'Shoes Locker',
	text:"There is a note in your shoe locker."
	+"<br/><br/>\"Well done."
	+"<br/>Let’s talk, I’m at the School Gate waiting for you."
	+"<br/>Maeda\"",
	image:src="shoelockernote.png",
	choices:[
			{
				text: 'Proceed to School Gate',
				index: 39
			}
		]
	},

	{	//Index 39- Shoes Locker complete
	title:'School Gate',
	text:"You put on your shoes, and smugly walk to the school gate."
	+"<br/>You can’t wait to see Maeda put in his place."
	+"<br/><br/>You see him waiting by the gate, he is looking at the floor nervously."
	+"<br/>You’re sure he regrets making that stupid bet now."
	+"<br/>As you reach him, he looks up at you and smiles warmly. He isn’t acting in his usual smarmy demeanor."
	+"<br/><br/>Maeda Itsuki: \"Ah.. "+lastName+". You came.\""
	+"<br/><br/>He shuffles awkwardly."
	+"<br/><br/>Maeda Itsuki: \"Like promised, I’ll drop out of the race. You did really well.\""
	+"<br/><br/>This wasn’t as satisfying as you’d imagined it. Finally, you see the real Maeda, underneath the bravado, and he was very sweet."
	+"<br/>It was a shame he hadn’t acted this way before."
	+"<br/><br/>Maeda Itsuki: \"T-t-there’s something else I need to tell you. Something important, so please listen to what I have to say!\""
	+"<br/><br/>You smile and nod."
	+"<br/><br/>"+lastName+" "+firstName+": \"Of course, Maeda. What is it?\""
	+"<br/><br/>As he opens his mouth to say something, a loud chorus of voices interrupts him."
	+"<br/>\""+lastName+", wait!\""
	+"<br/>You turn to see Uehara, Yokoyama and Iwashima running towards you."
	+"<br/>\"We all have something we need to tell you!\""
	+"<br/><br/>You’re somewhat confused, unsure of what exactly is going on."
	+"<br/><br/>"+lastName+" "+firstName+": \"Don’t worry, I’m in no rush. I’ll hear you all out properly, one by one.\"",
	image:src="classroom.png",
	choices:[
			{
				text: 'Talk to Maeda Itsuki',
				index: 40 //index 40
			},
			{
				text: 'Talk to Iwashima Sadako',
				index: 41 //index 41
			},
			{
				text: 'Talk to Uehara Kei',
				index: 42 //index 42
			},
			{
				text: 'Talk to Yokoyama Mayu',
				index: 43 //index 43 or 44
			}
		]
	},

	{	//Index 40- Maeda Confession
	title:'Maeda Itsuki',
	text:"You beckon Maeda to come talk to you."
	+"<br/><br/>"+lastName+" "+firstName+": \"So, what is it you were trying to tell me?\""
	+"<br/><br/>Maeda Itsuki: \"T-the truth is, I only wanted to run for Student Council President because of you. You were always so calm, smart and elegant."
	+"<br/>Do you remember? At the entrance ceremony, I was lost and you, without a second thought, helped me."
	+"<br/>You took a look at me, pushed up your glasses and fixed my uniform, too."
	+"<br/> I remember how cool you looked with the sun reflecting off your glasses, with the sakura falling behind you.."
	+"<br/>And before I could even thank you, you smiled, gave me a thumbs up and walked off into the distance."
	+"<br/>Despite also being a first year, you were so confident."
	+"<br/>At first I aspired to be like you, which is why I wear these glasses, but soon I realised it was more than that.."
	+"<br/>I wanted you to notice me. I wanted you to look at me only. Running against you was the only way I could achieve that.\""
	+"<br/><br/>Maeda grabs your arms, a fire alight in his eyes."
	+"<br/><br/>Maeda Itsuki: \"I love you, "+lastName+". I’ve loved you since I first met you.\""
	+"<br/><br/>He looks at you expectantly, waiting for you to say something."
	+"<br/><br/>"+lastName+" "+firstName+": \"This.. is a lot to take in, I have to admit. Please, allow me some time to consider you words.\""
	+"<br/><br/>Maeda nods, his face flushed red with the realisation that his feelings had finally been conveyed.",
	image:src="classroom.png",
	choices:[
			{
				text: 'Return to others',
				index: 39
			}
		]
	},

	{	//Index 41-Sadako Confession
	title:'Iwashima Sadako',
	text:"You call to Iwashima to come to you, and walk a little away from the others."
	+"<br/>Her hair has been cut, finally exposing the pretty girl underneath."
	+"<br/>She has a traditional type of beauty, one that reminds you of folklore stories of foxes that shapeshift into young, beautiful women."
	+"<br/><br/>"+lastName+" "+firstName+": \"I’m glad you are looking better. So, what is it you wanted to tell me?\""
	+"<br/><br/>She blushes and looks to her feet."
	+"<br/><br/>Iwashima Sadako: \"I have to confess..I’ve liked you for a long time. From before I was possessed."
	+"<br/>You won’t remember, but we went to the same Middle School. I actually came to this High School because of you.."
	+"<br/> It’s a little embarrassing saying this out loud now..\""
	+"<br/><br/>She laughs softly."
	+"<br/><br/>Iwashima Sadako: \"I was always watching you from afar.. I was so happy when I got into this school this year.."
	+"<br/>Somehow, though, I got possessed by a malicious spirit after reading a strange book left on my desk."
	+"<br/>The fact it was you that saved me from that torment feels a little like fate to me.."
	+"<br/>Thank you, "+lastName+", for saving me, and treating me so kindly, when others just ran away."
	+"<br/>Even if you can’t return my feelings I will be eternally grateful, and I’m sure my feelings for you will never fade.."
	+"<br/>I don’t expect an answer, and I’m sure you need some  time to mull thing over.. But, again, thank you.\""
	+"<br/><br/>She smiles at you and blushes as you catch eyes.",
	image:src="classroom.png",
	choices:[
			{
				text: 'Return to others',
				index: 39
			}
		]
	},

	{	//Index 42-Uehara Confession
	title:'Uehara Kei',
	text:"You approach Uehara, who is leaning against a wall, a little away from the others."
	+"<br/><br/>"+lastName+" "+firstName+": \"Uehara, that gakuran looks great on you! You wear it very well.\""
	+"<br/><br/>Uehara coughs and looks away, pink slightly creeping on his cheeks."
	+"<br/><br/>Uehara Kei: \"S-shut up. It just looks normal.\""
	+"<br/><br/>You laugh. This shy side to him was pretty cute."
	+"<br/><br/>"+lastName+" "+firstName+": \"You wanted to talk to me about something, right? What is it?\""
	+"<br/><br/>You lean against the wall next to him."
	+"<br/>Uehara stands silently for a few moments, thinking of how to articulate his thoughts."
	+"<br/><br/>Uehara Kei: \"I- uhh- I..\""
	+"<br/><br/>He stumbles on his words."
	+"<br/><br/>Uehara Kei: \"Look, man, I’m not good with words. Usually it’s my fists that do the talking.\""
	+"<br/><br/>You move away from the wall and face him, placing an encouraging hand on his arm."
	+"<br/><br/>"+lastName+" "+firstName+": \"Don’t worry. Take your time.\""
	+"<br/><br/>Uehara looks at your hand on his arm, and fidgets a little, unsure of what to do."
	+"<br/>You realise that touching him may have crossed a line and may have made him uncomfortable."
	+"<br/>You remove your hand, not wanting another fight, and apologise."
	+"<br/><br/>"+lastName+" "+firstName+": \"Sorry, I didn’t mean to make you uncomfortable.\""
	+"<br/><br/>He looks at you earnestly."
	+"<br/><br/>Uehara Kei: \"N-n-no, it’s not that… I- uh...\""
	+"<br/><br/>He sighs exasperatedly."
	+"<br/><br/>Uehara Kei: \"You know, it’ll just be easier to show you.\""
	+"<br/><br/>He grabs your face and pulls you into a kiss."
	+"<br/>Eventually, he lets go of you. He looks away, his face has turned bright red."
	+"<br/><br/>Uehara Kei: \"Y-you get it now, right? N-now give me a moment and don’t look at me please.\""
	+"<br/><br/>You stare at him in shock and try to summon some words."
	+"<br/><br/>"+lastName+" "+firstName+": \"“I-ughhh.. Wha..\""
	+"<br/><br/>Only gibberish comes out."
	+"<br/><br/>Uehara Kei: \"J-j-just give me a few minutes please, okay..\"",
	image:src="classroom.png",
	choices:[
			{
				text: 'Return to others',
				index: 39
			}
		]
	},

	{	//Index 43-Commie ending
	title:'Yokoyama Mayu',
	text:"Yokoyama Mayu is standing, arms folded, waiting for you to approach her. She isn’t to being made to wait."
	+"<br/>You notice she is no longer wearing makeup, and her skirt has been rolled down to be considerably longer."
	+"<br/>You notice that without her makeup, she in fact looks much better. She has a fresh, natural look."
	+"<br/>She looks like she could be part of an idol group."
	+"<br/><br/>Yokoyama Mayu: \""+lastName+"! I wanted to thank you. You really opened my eyes when you talked to me."
	+"<br/>What you said really resonated, and I needed some time to think over my life and my choices, and I decided to read more into Marx."
	+"<br/>I’m happy that I finally have ridden myself of materialistic desires, and can dedicate myself to a worthy cause."
	+"<br/>I wanted to thank you before my plans come into action."
	+"<br/>I know you won’t be happy with what is about to happen, but remember, you have nothing to lose but your chains!\""
	+"<br/><br/>You stare at her, confused. What is she going on about?"
	+"<br/><br/>Suddenly, you hear an explosion. There is now a gaping hole where the teachers lounge used to be."
	+"<br/>Yokoyama looks exhilarated. She laughs loudly and shouts."
	+"<br/><br/>Yokoyama Mayu: \"Let the ruling classes tremble!\""
	+"<br/><br/>There is mass panic as students escape the building. You decide it is a good time to run home."
	+"<br/><br/>Later, you find out that many political buildings and figures had also been targeted."
	+"<br/>As time passes, Yokoyama and her comrades bring the tides of communist revolution through Japan."
	+"<br/><br/>No Student Council Elections take place at schools anymore."
	+"<br/><br/>You’ll never be Student Council President.",
	image:src="commieend.png",
	choices:[
			{
				text: 'Game Over',
				index: 0
			}
		]
	},

	{	//Index 44-Mayu confession
	title:'Yokoyama Mayu',
	text:"Yokoyama Mayu is standing, arms folded, waiting for you to approach her. She isn’t to being made to wait."
	+"<br/>You notice she is no longer wearing makeup, and her skirt has been rolled down to be considerably longer."
	+"<br/>You notice that without her makeup, she in fact looks much better. She has a fresh, natural look."
	+"<br/>She looks like she could be part of an idol group."
	+"<br/><br/>Yokoyama Mayu: \""+lastName+"! I wanted to thank you. You really opened my eyes when you talked to me.\""
	+"<br/><br/>You smile at her."
	+"<br/><br/>"+lastName+" "+firstName+": \"I didn’t do much. I can’t take credit\""
	+"<br/><br/>She laughs and shakes her head."
	+"<br/><br/>Yokoyama Mayu: \"No, when you came to the Home Economics room to comfort me, it made me realise that I had my priorities messed up."
	+"<br/>I’ve been so shallow my entire life."
	+"<br/>It made me realise how much time I wasted pining after a boy who barely knew I existed, turning myself into someone I’m not, all for the sake of a pretty face.\""
	+"<br/><br/>She approaches you, looks into your eyes and takes your hands."
	+"<br/><br/>Yokoyama Mayu: \"I can see now what’s really important. You took care of me, despite not knowing me much at all."
	+"<br/>The food you made was delicious, and warmed my heart."
	+"<br/>It made me realise how I shouldn’t care about what others think. I should stay true to myself, and care for those close to me."
	+"<br/><br/>She looks down and takes a deep breath. She finally gains enough courage to look up at you again."
	+"<br/><br/>Yokoyama Mayu: \"I think I’ve fallen for you, "+lastName+". know this seems sudden, but it’s for real."
	+"<br/>In just a short time, you’ve already managed to change my life, helped me embrace the real me."
	+"<br/>I want to be able to spend everyday with you and grow even more."
	+"<br/>I want to be able to help and support you, like you’ve done for me.\""
	+"<br/><br/>She realises she has been gripping your hands, and lets go quickly, slightly embarrassed."
	+"<br/><br/>Yokoyama Mayu: \"Look, I know this is a lot. I don’t expect an answer right away. Take some time to think things over.\"",
	image:src="classroom.png",
	choices:[
			{
				text: 'Return to others',
				index: 39
			}
		]
	},

	{	//Index 45- Consider Confessions
	title:'School Gate',
	text:"You wander off to think through what has just happened."
	+"<br/>You certainly didn’t start this day expecting to be confessed to by four people in one go."
	+"<br/>Of course, you can understand why, it was hard to resist the allure of a good pair of glasses."
	+"<br/><br/>You can’t deny that there is one who makes your heart skip a beat, and brought a wave of joy when you heard their confession."
	+"<br/><br/>You turn to Maeda, Iwashima, Uehara and Yokoyama, who are all standing by the gate, looking expectantly at you."
	+"<br/><br/>"+lastName+" "+firstName+": \"Listen.. I appreciate all of your feelings and honesty. The truth is, I’m in love with:\"",
	image:src="classroom.png",
	choices:[
			{
				text: 'Maeda Itsuki',
				index: 46
			},
			{
				text: 'Iwashima Sadako',
				index: 47
			},
			{
				text: 'Uehara Kei',
				index: 48
			},
			{
				text: 'Yokoyama Mayu',
				index: 49
			},
			{
				text: 'No one',
				index: 50
			}
		]
	},

	{	//Index 46 - Choosing Maeda
	title:'Maeda Itsuki Happy Ending!',
	text:"You take a deep breath, and look at Maeda."
	+"<br/><br/>"+lastName+" "+firstName+": \"Maeda…\""
	+"<br/><br/>He looks at you in shock. He is frozen in place, eyes wide."
	+"<br/>You approach him, and take off his glasses."
	+"<br/><br/>"+lastName+" "+firstName+": \"You don’t need these to impress me, you look perfect the way you are.\""
	+"<br/><br/>Maeda blushes, and beams at you."
	+"<br/><br/>How did you not notice how cute he was before?<br/>You were so engrossed in winning that you lost precious time that you could have spent with him."
	+"<br/><br/>You pull Maeda into an embrace and plant an affectionate kiss on his forehead."
	+"<br/>As you both pull away from each other you notice his tie has become crooked."
	+"<br/>As you fix his tie, you notice how happy he looks."
	+"<br/><br/>Maeda Itsuki: \"It’s like the first time we met, but better!\""
	+"<br/><br/>He laughs happily and your feelings overwhelm you."
	+"<br/>You take his hand and get down on one knee."
	+"<br/><br/>"+lastName+" "+firstName+": \"Maeda Itsuki. Will you be my Vice President?\""
	+"<br/><br/>Maeda blushes, and replies happily with a simple happy yes."
	+"<br/><br/><br/>Elections come round, and you gain an easy victory."
	+"<br/>With Maeda at your side, the council runs smoothly, and gains unprecedented power and respect in the school."
	+"<br/><br/>As your time at High School ends, you and Maeda apply for the same prestigious University and continue your romantic bliss there",
	image:src="classroom.png",
	choices:[
			{
				text: '♥　Replay?　♥',
				index: 0
			}
		]
	},

	{	//Index 47 - Choosing Iwashima
	title:'Iwashima Sadako Happy Ending!',
	text:lastName+" "+firstName+": \"Iwashima\""
	+"<br/><br/>You walk to Iwashima, and gently take her hand."
	+"<br/><br/>"+lastName+" "+firstName+": \"I’m sorry it took me so long to notice you.\""
	+"<br/>Iwashima smiles sweetly, and softly strokes your cheek."
	+"<br/><br/>Iwashima Sadako: \"It’s okay, "+lastName+". How could you know, when I never tried to speak with you?\""
	+"<br/><br/>You look at this sweet girl, and can’t believe you have the love of someone so gentle and kind."
	+"<br/><br/>"+lastName+" "+firstName+": \"You don’t need to call me by my last name. Use my given name.\""
	+"<br/><br/>She blushes and looks surprised."
	+"<br/><br/>Iwashima Sadako: \"Really? I’m so happy!\""
	+"<br/><br/>She smiles to herself."
	+"<br/><br/>Iwashima Sadako: \""+firstName+"..\""
	+"<br/><br/>She laughs and repeats your name quietly to herself."
	+"<br/><br/>Iwashima Sadako: \"I feel like the luckiest person in the world! You have to call me by my first name too, okay.\""
	+"<br/><br/>You pat her on the head"
	+"<br/><br/>"+lastName+" "+firstName+": \"It should be me saying that I feel like the luckiest person in the world."
	+"<br/>In fact, I am, Sadako, since I have you.\""
	+"<br/><br/>She beams at you, clearly ecstatic at how things have turned out."
	+"<br/><br/><br/>Student life goes on, and with Maeda out of running you win the role of Student Council President easily."
	+"<br/> Influenced by Sadako’s kind heart, you become a benevolent leader, and are much loved by the students and teachers of the school."
	+"<br/><br/>Though your time at High School eventually reaches an end, your relationship with Sadako continues to flourish to the very end,"
	+"<br/>and you both live happy, peaceful lives as pillars of your community.",
	image:src="classroom.png",
	choices:[
			{
				text: '♥　Replay?　♥',
				index: 0
			}
		]
	},

	{	//Index 48 - Choosing Uehara
	title:'Uehara Kei Happy Ending!',
	text:"You look to Uehara, and catch eyes with him."
	+"<br/>In that one moment, he understands your feelings for him."
	+"<br/><br/>"+lastName+" "+firstName+": \"Uehara…\""
	+"<br/><br/>He laughs and turns pink, awkwardly scratching the back of his head and avoiding your eyes."
	+"<br/><br/>Uehara Kei: \"Ahh….. I’m really happy…\""
	+"<br/><br/>He shuffles awkwardly."
	+"<br/><br/>Uehara Kei: \"I.. umm.. You wanna walk home with me?\""
	+"<br/><br/>You laugh and walk up to him. You punch his chest lightly."
	+"<br/><br/>"+lastName+" "+firstName+": \"Of course. Lets go.\""
	+"<br/><br/>He looks pleased with himself and drapes his arm around your shoulder as you walk home together."
	+"<br/>As you walk Uehara loses his nervousness and the conversation flows easily. You don’t want this walk to ever end."
	+"<br/><br/>Eventually, you reach Uehara’s home, and he invites you in for tea, to which you happily oblige. You want this time with him to last forever."
	+"<br/>As you finish your tea, Uehara moves to sit next to you on the sofa, pulling you into his chest."
	+"<br/><br/>Uehara Kei: \"This all still feels like a dream..\""
	+"<br/><br/>He sighs happily."
	+"<br/><br/>Uehara Kei: \"I love you, "+firstName+"..\""
	+"<br/><br/>Hearing these words sends a spark of electricity through your body, and you know you’ll never tire of hearing them."
	+"<br/><br/>"+lastName+" "+firstName+": \"I love you too, Uehara..\""
	+"<br/><br/>Uehara smiles, and pulls you into a deep, passionate kiss, that feels like it lasts an eternity.."
	+"<br/><br/><br/>You wake up the next morning, feeling refreshed, happily nestled in your lover’s arms,<br/>relishing the feeling of Uehara’s warm body against yours."
	+"<br/><br/>The day you become Student Council President has a morning just like this one, and every day after.",
	image:src="classroom.png",
	choices:[
			{
				text: '♥　Replay?　♥',
				index: 0
			}
		]
	},

	{	//Index 49 - Choosing Yokoyama
	title:'Yokoyama Mayu Happy Ending!',
	text:"Truthfully, your feelings surprised you a little."
	+"<br/>Yokoyama wasn’t at all what you expected in the beginning, and seeing her true personality shine through captured your heart."
	+"<br/><br/>"+lastName+" "+firstName+": \"Yokoyama. It’s true that this is all sudden, but I know that I’ve fallen for you too.\""
	+"<br/><br/>Yokoyama’s face brightens and she runs to you, capturing you in a tight hug."
	+"<br/>She looks up at you and smiles."
	+"<br/><br/>"+lastName+" "+firstName+": \"I’m happy that I’ll be able to get to know the real you. Please take care of me.\""
	+"<br/><br/>And you truly feel that way."
	+"<br/><br/>The election comes by and you win the position of student council president easily."
	+"<br/><br/>Time passes, and as you and Mayu get to know each other more, your love grows."
	+"<br/>She has become a fearless, cunning, and strong person, and you love her unstoppable nature dearly."
	+"<br/><br/>On the day of your graduation, Mayu approaches you."
	+"<br/><br/>Yokoyama Mayu: \"There is something I haven’t told you yet, "+firstName+".. I’m sorry it's taken this long to say anything…"
	+"<br/><br/>She looks nervous, and you feel worried about what she has to say."
	+"<br/><br/>"+lastName+" "+firstName+": \"What is it, Mayu?\""
	+"<br/><br/>Yokoyama Mayu: \"The truth is, my father is the kaicho of the Sasai family.. I’m not going to go to University."
	+"<br/>I’m going to follow in my father’s footsteps and become a powerful leader."
	+"<br/><br/>Though the news that Mayu comes from a Yakuza family shocks you, you understand that this is what she needs to do to follow her true self."
	+"<br/>You cannot bring yourself to let her go, however, and make a radical decision."
	+"<br/><br/>"+lastName+" "+firstName+": \"Mayu, I’m joining you. I promise to stay with you through thick and thin. I’ll always support you.\""
	+"<br/><br/>Her eyes widen with surprise at your words."
	+"<br/><br/>Yokoyama Mayu: \""+firstName+"... Are you sure about this? It will be dangerous…\""
	+"<br/><br/>"+lastName+" "+firstName+": \"Of course, Mayu. I’ll do anything so long as I can stay with you."
	+"<br/><br/><br/>Though you both face many trials, you eventually both become formidable leaders in the Sasai family.<br/>Your fingers and love remain intact..",
	image:src="classroom.png",
	choices:[
			{
				text: '♥　Replay?　♥',
				index: 0
			}
		]
	},

	{	//Index 50 - Choosing no one
	title:'School Gate',
	text:"As you are about to deny having feelings for any of them, you stop yourself."
	+"<br/><br/>No."
	+"<br/><br/>You can’t lie to yourself like this."
	+"<br/>Who were you kidding? How could you deny the way they made you feel?"
	+"<br/><br/>You start again."
	+"<br/><br/>"+lastName+" "+firstName+": \"I’m in love with:\"",
	image:src="classroom.png",
	choices:[
		{
			text: 'Maeda Itsuki',
			index: 46
		},
		{
			text: 'Iwashima Sadako',
			index: 47
		},
		{
			text: 'Uehara Kei',
			index: 48
		},
		{
			text: 'Yokoyama Mayu',
			index: 49
		}
		]
	},

] // end of array
