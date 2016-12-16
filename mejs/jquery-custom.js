
//Third go around
window.onload = function() {
	//Video
	var video = document.getElementById("video_one");

	//Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");
	var videoTimer = document.getElementById("videotimer");
	var curtime = video.currentTime;

	//Set the sentences for highlighting purposes
	var sentOne = document.getElementById("sentOne");
	var sentTwo = document.getElementById("sentTwo");
	var sentThree = document.getElementById("sentThree");
	var sentFour = document.getElementById("sentFour");
	var sentFive = document.getElementById("sentFive");
	var sentSix = document.getElementById("sentSix");
	var sentSeven = document.getElementById("sentSeven");
	var sentEight = document.getElementById("sentEight");


	//Slider
	var seekBar = document.getElementById("seek-bar");
	var bufferBar = document.getElementById("buffer-bar");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function(){

		if (video.paused == true) {
			//Play the video
			video.play();


			//Update the button text to 'Pause'
			playButton.setAttribute("style", "background-image: url(css/icons/pause-icon.png); background-repeat: no-repeat");
		} else {
			//Pause the video
			video.pause();

			//Update the button text to 'Play'
			playButton.setAttribute("style", "background-image: url(css/icons/play-icon.png); background-repeat: no-repeat");
		}
	});

	//Event listener for the mute button
	muteButton.addEventListener("click", function(){
		if(video.muted == false) {
			//Mute the video
			video.muted = true;

			//Update the button text
			muteButton.setAttribute("style", "background-image: url(css/icons/volume-off-icon.png); background-repeat: no-repeat");
		} else {
			//Unmute the video
			video.muted = false;

			//Update the button text
			muteButton.setAttribute("style", "background-image: url(css/icons/volume-on-icon.png); background-repeat: no-repeat");
		}
	});

	//Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function(){
		if (video.requestFullScreen) {
			video.requestFullScreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); //for Firefox browsers
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen(); //for Chrome and Safari browsers
		}
	});


	// //Event listener for the seek bar

	seekBar.addEventListener('click', function(e){
		var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
	   video.currentTime = pos * video.duration;
	});


		//Create the timer for time updates
	var gTimeFormat = function(seconds){
		var m = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds /60) : Math.floor(seconds / 60);
		var s = Math.floor(seconds - (m * 60)) < 10 ? '0' + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
		return m + ':' + s;
	};

	//Update the seek bar as the video plays
	video.addEventListener("timeupdate", function(){

		//Add the time progess 
		videoTimer.innerHTML = gTimeFormat(video.currentTime) + " / 00:59"; 

		// calculate the buffer value;
		var buffer_value = (100 / video.duration) * video.buffered.end(0);
		
		//Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		//Update the slider value
		seekBar.value = value;
		bufferBar.value = buffer_value;
	});

	var vidSeek = addEventListener("change", function(){

	});

	//Pause the video when the slider handle is being dragged
	seekBar.addEventListener("mousedown", function(){
		video.play();
	});

	//Play the video when the slider handle is dropped
	seekBar.addEventListener("mouseup", function(){
		video.play();
	});

	// Transcipt  - highlight as video plays

		video.addEventListener("timeupdate", function(){
				if (video.currentTime > -1 && video.currentTime < 7.535) {
					sentOne.className = 'highlight';
				} else if (video.currentTime > 7.535 && video.currentTime < 13) {
					sentTwo.className = 'highlight';
					sentOne.className = "";
				} else if (video.currentTime > 13 && video.currentTime < 17) {
					sentThree.className = 'highlight';
					sentTwo.className = "";
				} else if (video.currentTime > 17 && video.currentTime < 32) {
					sentFour.className = 'highlight';
					sentThree.className = "";
				} else if (video.currentTime > 32 && video.currentTime < 42) {
					sentFive.className = 'highlight';
					sentFour.className = "";
				} else if (video.currentTime > 42 && video.currentTime < 53) {
					sentSix.className = 'highlight';
					sentFive.className = "";
				} else if (video.currentTime > 53 && video.currentTime < 57) {
					sentSeven.className = 'highlight';
					sentSix.className = "";
				} else if (video.currentTime > 57 && video.currentTime < 59) {
					sentEight.className = 'highlight';
					sentSeven.className = "";
				}
		});
}








