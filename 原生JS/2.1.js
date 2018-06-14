let Lists = document.querySelectorAll('#index li');
let imgList = document.querySelectorAll('#imgList li');
let container = document.querySelector('#container');
let timer = null;
let index = 0;
function moveIndex() {
	for (let i = 0; i < Lists.length; i++) {
		if (Lists[i].className == "on") {
			Lists[i].className = "";
		}
	}
	Lists[index].className = "on";
}

function moveImg() {
	for (let j = 0; j < imgList.length; j++) {
		if (imgList[j].className == "opa") {
			imgList[j].className = "";
		}
		imgList[index].className = "opa";
	}
}

for (let i = 0; i < Lists.length; i++) {
	Lists[i].onmouseover = function() {
		clearInterval(timer);
		index = i;
		moveImg();
		moveIndex();
	};
	Lists[i].onmouseout = function() {
			autoPlay();
	}
}

function play() {
	index += 1;
	if (index > 4) {
		index = 0;
	}
	moveIndex(index);
	moveImg(index);
}

function autoPlay() {
	clearInterval(timer);
	timer = setInterval(function() {
		play();
	}, 3000);
}
autoPlay();
container.onmouseover = function(){
	clearInterval(timer);
};
container.onmouseout = function(){
	autoPlay();
};