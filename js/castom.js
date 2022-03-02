/**

	Full Name : MD Mehedi Hasan
	Address : Kamarkhali, Mahukhali, Faridpur
	Phone Number : 01316229257
	Gmail : mehedi888012@gmail.com
	Yahoo : sadmia.com@yahoo.com
	Website : www.sadmia.com
	Facebook page : https://www.facebook.com/sadmia.page
	Facebook page : https://www.facebook.com/mehedihasansad.page
	Facebook profile : https://www.facebook.com/mehedihasansad.profile
	Twitter: https://twitter.com/SadMiaOfficial
	Instagram: https://www.instagram.com/sadmia.com.bd
	GitHub: https://github.com/sadmia
	YouTube : (Searce - Sadmia)

**/



"use strict";

// data Input Start
let titleTextInput = "Ohe Ki Korile Bolo l School Love Story l Sakib Al Islam l Go Entertainment";
let videoSource = "video/video.mp4";
// data Input End

let haderSection = document.querySelector(".haderSection");
let videoTitle = document.getElementById("videoTitle");

let playerScreen = document.getElementById('PlayerScreen');
let fullIcon = document.getElementById('fullScreen');
let backFullIcon = document.getElementById('backScreen');

let minimizeBtn = document.getElementById('minimizeBtn');
let closeBtn = document.getElementById('closeBtn');

let video = document.getElementById('VideoSection');

let timeLineBar = document.getElementById('timeLineBar');

let backForword = document.getElementById('backForword');
let fastForword = document.getElementById('fastForword');

let playBtn = document.getElementById('playBtn');
let playIcon = document.getElementById('playIcon');
let pauseIcon = document.getElementById('pauseIcon');

let VoliumBtn = document.getElementById('VoliumBtn');
let voliumIcon1 = document.getElementById('voliumIcon1');
let voliumIcon0 = document.getElementById('voliumIcon0');
let voliumIcon3 = document.getElementById('voliumIcon3');
let voliumIcon6 = document.getElementById('voliumIcon6');

let voliumInputLI = document.getElementById('voliumInputLI');
let voliumInput = document.getElementById('voliumInput');

let videoUpdateTime = document.getElementById('videoUpdateTime');
let videoEndTime = document.getElementById('videoEndTime');

let loopVideoBtn = document.getElementById('loopVideoBtn');
let loopOn = document.getElementById('loopOn');
let loopOff = document.getElementById('loopOff');

let settingBtn = document.getElementById('settingBtn');

let fullScreenBtn = document.getElementById('fullScreenBtn');
let fullPrevIcon = document.getElementById('backFullIcon');
let fullOkIcon = document.getElementById('fullIcon');

/** Div Varibale add **/
let controleDiv = document.querySelector(".controleDiv");
let videoPlayer = document.querySelector(".videoPlayer");

let speedVideoBtn = document.getElementById("speedVideoBtn");
let settingMainDiv = document.getElementById("settingMainDiv");
let firstStap = document.querySelector(".firstStap");
let nextAction = document.querySelector(".nextAction");

let backBtnSpeed = document.querySelector(".backBtnSpeed");


// Logic Value Set
let settingBtnvlu = 0;


//** ** ** ** ** Work Plase Start ** ** ** ** **

video.ontimeupdate = function() {
	let currentVideoTime = Math.floor(video.currentTime);
	let endVideoTime = Math.floor(video.duration);

	timeLineBar.value = currentVideoTime;
	timeLineBar.max = endVideoTime;
	
	// Play fast Button Click For Work Start
	fastForword.addEventListener("click", function() {
		video.currentTime = currentVideoTime + 5;
	})
	backForword.addEventListener("click", function() {
		let preVLuBF = currentVideoTime - 5;
		if (preVLuBF < 0) {
			preVLuBF = 0;
		} else {
			video.currentTime = currentVideoTime - 5;
		}
	})
	// Play fast Button Click For Work End
	
	if (currentVideoTime == endVideoTime && video.loop == false) {
		pauseIcon.style.display = "none";
		playIcon.style.display = "block";
		video.currentTime = 0;
		video.pause();
		timeLineBar.value = 0;
	}

	// timeLineBar Start
	timeLineBar.addEventListener("input", function() {
		let timeLineVlu = timeLineBar.value;
		video.currentTime = timeLineVlu;
	})
	// timeLineBar End

	timeFunction(endVideoTime, videoEndTime);
	timeFunction(currentVideoTime, videoUpdateTime);

	speed025.addEventListener("click", function() {
		video.playbackRate = 0.25;
		matchClocs();
		selectIcon(speed025);
		removeOk(speed2,speed050,speed075,speed1,speed125,speed150,speed175);
	})
	speed050.addEventListener("click", function() {
		video.playbackRate = 0.50;
		matchClocs();
		selectIcon(speed050);
		removeOk(speed025,speed2,speed075,speed1,speed125,speed150,speed175);
	})
	speed075.addEventListener("click", function() {
		video.playbackRate = 0.75;
		matchClocs();
		selectIcon(speed075);
		removeOk(speed025,speed050,speed2,speed1,speed125,speed150,speed175);
	})
	speed1.addEventListener("click", function() {
		video.playbackRate = 1;
		matchClocs();
		selectIcon(speed1);
		removeOk(speed025,speed050,speed075,speed2,speed125,speed150,speed175);
	})
	speed125.addEventListener("click", function() {
		video.playbackRate = 1.25;
		matchClocs();
		selectIcon(speed125);
		removeOk(speed025,speed050,speed075,speed1,speed2,speed150,speed175);
	})
	speed150.addEventListener("click", function() {
		video.playbackRate = 1.50;
		matchClocs();
		selectIcon(speed150);
		removeOk(speed025,speed050,speed075,speed1,speed125,speed2,speed175);
	})
	speed175.addEventListener("click", function() {
		video.playbackRate = 1.75;
		matchClocs();
		selectIcon(speed175);removeOk(speed025,speed050,speed075,speed1,speed125,speed150,speed2);
	})
	speed2.addEventListener("click", function() {
		video.playbackRate = 2;
		matchClocs();
		selectIcon(speed2);
		removeOk(speed025,speed050,speed075,speed1,speed125,speed150,speed175);
	})

	let matchClocs = function() {
		settingMainDiv.classList.remove("speed-Div");
		settingBtnvlu = 1;
		firstStap.style.display = "block";
		nextAction.style.display = "none";
		// settingMainDiv.style.display = "none";
	}

	let selectIcon = function(idName) {
		let idChild = idName.querySelector("i");
		idChild.style.display = "block";
	}
	let removeOk = function(a,b,c,d,e,f,g) {
		a.querySelector("i").style.display = "none";
		b.querySelector("i").style.display = "none";
		c.querySelector("i").style.display = "none";
		d.querySelector("i").style.display = "none";
		e.querySelector("i").style.display = "none";
		f.querySelector("i").style.display = "none";
		g.querySelector("i").style.display = "none";
	}
}



// minimize Button Click For Work Start
minimizeBtn.addEventListener("click", function() {
	video.classList.add("disNone");
	controleDiv.classList.add("disNone");
})

videoTitle.addEventListener("click", function() {
	video.classList.remove("disNone");
	controleDiv.classList.remove("disNone");
})
// minimize Button Click For Work End

// Close Button Click For Work Start
closeBtn.addEventListener("click", function() {
	videoPlayer.remove();
})
// Close Button Click For Work End

// playerScreen Button Click For Work Start
backFullIcon.addEventListener("click",function() {
	videoPlayer.classList.add("displayFull");
	backFullIcon.style.display = "none";
	fullIcon.style.display = "block";


	fullPrevIcon.style.display = "none";
	fullOkIcon.style.display = "block";
})
fullIcon.addEventListener("click",function() {
	videoPlayer.classList.remove("displayFull");
	backFullIcon.style.display = "block";
	fullIcon.style.display = "none";


	fullPrevIcon.style.display = "block";
	fullOkIcon.style.display = "none";
})
// playerScreen Button Click For Work End


// video full Button Click For Work Start
fullPrevIcon.addEventListener("click", function() {
	videoPlayer.classList.add("displayFull");
	fullPrevIcon.style.display = "none";
	fullOkIcon.style.display = "block";

	backFullIcon.style.display = "none";
	fullIcon.style.display = "block";
})
fullOkIcon.addEventListener("click", function() {
	videoPlayer.classList.remove("displayFull");
	fullOkIcon.style.display = "none";
	fullPrevIcon.style.display = "block";

	backFullIcon.style.display = "block";
	fullIcon.style.display = "none";
})
// video full Button Click For Work End

// loopVideo Button Click For Work Start
loopOn.addEventListener("click", function() {
	loopOn.style.display = "none";
	loopOff.style.display = "block";
	video.loop = true;
}) 
loopOff.addEventListener("click",function() {
	loopOff.style.display = "none";
	loopOn.style.display = "block";
	video.loop = false;
})
// loopVideo Button Click For Work End


// volium Button Click For Work Start
voliumIcon1.addEventListener("click", function() {
	voliumIcon1.style.display = "none";
	voliumIcon0.style.display = "none";
	voliumIcon3.style.display = "none";
	voliumIcon6.style.display = "block";
	video.volume = 0.6;
	voliumInput.value = 7;
})
voliumIcon6.addEventListener("click", function() {
	voliumIcon1.style.display = "none";
	voliumIcon0.style.display = "none";
	voliumIcon3.style.display = "block";
	voliumIcon6.style.display = "none";
	video.volume = 0.3;
	voliumInput.value = 4;
})
voliumIcon3.addEventListener("click", function() {
	voliumIcon1.style.display = "none";
	voliumIcon0.style.display = "block";
	voliumIcon3.style.display = "none";
	voliumIcon6.style.display = "none";
	video.volume = 0;
	voliumInput.value = 0;
})
voliumIcon0.addEventListener("click", function() {
	voliumIcon1.style.display = "block";
	voliumIcon0.style.display = "none";
	voliumIcon3.style.display = "none";
	voliumIcon6.style.display = "none";
	video.volume = 1;
	voliumInput.value = 11;
})

voliumInput.addEventListener("input", function() {
	let volumeVlu = voliumInput.value;
	
	if (volumeVlu == 0) {
		video.volume = 0;
	} else if (volumeVlu == 1) {
		video.volume = 0.1;
	} else if (volumeVlu == 2) {
		video.volume = 0.2;
	} else if (volumeVlu == 3) {
		video.volume = 0.3;
	} else if (volumeVlu == 4) {
		video.volume = 0.4;
	} else if (volumeVlu == 5) {
		video.volume = 0.5;
	} else if (volumeVlu == 6) {
		video.volume = 0.6;
	} else if (volumeVlu == 7) {
		video.volume = 0.7;
	} else if (volumeVlu == 8) {
		video.volume = 0.8;
	} else if (volumeVlu == 9) {
		video.volume = 0.9;
	} else if (volumeVlu == 10) {
		video.volume = 1;
	}

	if (volumeVlu <= 10 && volumeVlu >= 9) {
		voliumIcon1.style.display = "block";
		voliumIcon0.style.display = "none";
		voliumIcon3.style.display = "none";
		voliumIcon6.style.display = "none";
	} else if (volumeVlu <= 8 && volumeVlu >= 4) {
		voliumIcon1.style.display = "none";
		voliumIcon0.style.display = "none";
		voliumIcon3.style.display = "none";
		voliumIcon6.style.display = "block";
	} else if (volumeVlu <= 3 && volumeVlu >= 1) {
		voliumIcon1.style.display = "none";
		voliumIcon0.style.display = "none";
		voliumIcon3.style.display = "block";
		voliumIcon6.style.display = "none";
	} else if (volumeVlu == 0) {
		voliumIcon1.style.display = "none";
		voliumIcon0.style.display = "block";
		voliumIcon3.style.display = "none";
		voliumIcon6.style.display = "none";
	}
})
// volium Button Click For Work End


// Play Button Click For Work Start
playIcon.addEventListener("click", function() {
	playIcon.style.display = "none";
	pauseIcon.style.display = "block";
	video.play();
})
pauseIcon.addEventListener("click", function() {
	pauseIcon.style.display = "none";
	playIcon.style.display = "block";
	video.pause();
})
// Play Button Click For Work End



let timeFunction = function(lTime, address) {
	let endTime = lTime;

	let miniteCounte = Math.floor(endTime / 60);
	let secend = Math.floor(endTime % 60);
	let hourCount = Math.floor(secend / 60);
	let hour = Math.floor(miniteCounte / 60);
	let minite = Math.floor(miniteCounte % 60);


	if (endTime < 60) {

		if (secend <= 9) {
			address.innerText = "0:0" + secend;
		} else {
			address.innerText = "0:" + secend;
		}

	} else if (endTime >= 60 && endTime < 3600) {

		if (secend <= 9 && minite <= 9) {
			address.innerText = minite + ":" + "0" + secend;
		} else if (secend <= 9 && minite > 9) {
			address.innerText = minite + ":" + "0" + secend;
		} else {
			address.innerText = minite + ":" + secend;
		}

	} else if (endTime >= 3600) {

		if (secend <= 9 && minite <= 9) {
			address.innerText = hour + ":" + "0" + minite + ":" + "0" + secend;
		} else if (secend <= 9 && minite > 9) {
			address.innerText =  hour + ":" + minite + ":" + "0" + secend;
		} else if (secend > 9 && minite <= 9) {
			address.innerText =  hour + ":" + "0"+ minite + ":" + secend;
		} else {
			address.innerText = hour + ":" + minite + ":" + secend;
		}

	}
}



speedVideoBtn.addEventListener("click", function() {
	settingMainDiv.classList.add("speed-Div");
	firstStap.style.display = "none";
	nextAction.style.display = "block";
})

backBtnSpeed.addEventListener("click", function() {
	settingMainDiv.classList.remove("speed-Div");
	firstStap.style.display = "block";
	nextAction.style.display = "none";
})


settingBtn.addEventListener("click", function() {
	settingBtnvlu = settingBtnvlu + 1;
	if (settingBtnvlu == 1) {
		settingBtnvlu = 1;
		settingMainDiv.style.display = "block";
	} else if (settingBtnvlu == 2) {
		settingBtnvlu = 0;
		settingMainDiv.style.display = "none";
		settingMainDiv.classList.remove("speed-Div");
		firstStap.style.display = "block";
		nextAction.style.display = "none";
	}
})



let titleTextLength = titleTextInput.length;

if (titleTextLength > 70) {
	let text70 = titleTextInput.slice(0,70);
	videoTitle.innerText = text70 + "...";
} else {
	videoTitle.innerText = titleTextInput;
}

video.src = videoSource;