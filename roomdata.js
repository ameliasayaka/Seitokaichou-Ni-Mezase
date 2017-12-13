var lastName= localStorage.getItem("lastname");
var firstName= localStorage.getItem("firstname");
var roomArray = [
	{
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
	{
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
	{
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
	{
		title:'Classroom 2-D',
		text:"You smirk while pushing up your glasses in an extremely cool fashion.."
		+"<br/><br/> "+lastName+" "+firstName+": \"Oh Maeda, Maeda, Maeda."
		+"<br/>Boast all you like, but we both know you're not fit for the role of Student Council President."
		+"<br/>Do you really think those fashion glasses can claim victory over prescription?\""
		+"<br/><br/>Maeda's face drops as the full force of your witty retort smacks him.<br/>You've won this round."
		+"<br/><br/>Maeda Itsuki: \"F-f-fool. These glasses are prescription too.<br/>You'll lose, "+lastName+", mark my words."
		+"<br/>A democratic election is no more than a popularity contest"
		+"<br/>Besides, you can't even sort out those four idiots in your class, how do you expect people to trust you to be President?\""
		+"<br/><br/>He huffs and leaves the classroom, fooling no one about his glasses",
		image:src="classroom.png",
		choices:[
			{
				text:'Ponder his words',
				index:4
			}
		]
	},
		{
		title:'Classroom 2-D',
		text:"As much as you hate to admit it, Maeda is right."
		+"<br/><br/>Though obviously perfect for the job, you are a long way from winning."
		+"<br/>At this rate Maeda would win on popularity alone, and he was right about your classmates."
		+"<br/>With those four still causing trouble, even you wouldn't vote for yourself"
		+"<br/><br/>It's time to get moving, and sort those four out.",
		image:src="classroom.png",
		choices:[
			{
				text:'Return to your seat',
				index:1
			}
		]
	}
]
