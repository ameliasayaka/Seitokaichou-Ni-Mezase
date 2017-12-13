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
		image:src="classroom.png",
		choices:[
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
		image:src="classroom.png",
		choices:[
			{
				text:'Try Again?',
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
		image:src="classroom.png",
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
		+"<br/>Yokoyama Mayu: A flashy, popular girl. Constantly in trouble for her accessories, makeup and short skirt"
		+"<br/>Uehara Kei: A high school delinquent. Smoking, fighting, dyed hair and an improper uniform are the main grievances"
		+"<br/>Iwashima Sadako: Strange rumors that she's possesed, but she mostly just skips class to sleep"
		+"<br/>I wont hold my breath\""
		+"<br/><br/>Just three students? Maeda is underestimating you. It's time to wipe that smirk off his face.",
		image:src="classroom.png",
		choices:[
			{
				text:'To be continued...',
				index:0
			}
		]
	}
]
