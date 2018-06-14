let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let wrap = document.querySelector('.wrap');
let spanAll = document.querySelectorAll('span');
let container = document.querySelector('.container');
let index = 0;

function changeBtn() {
	for (let i = 0; i < spanAll.length; i++) {
		spanAll[i].className = "";
	}
	spanAll[index].className = "on";
}

function nextPic() {
	index++;
	if (index > 4) {
		index = 0;
	}
	changeBtn();
	let newLeft;
	if (wrap.offsetLeft == -3600) {
		newLeft = -1200;
	} else {
		newLeft = wrap.offsetLeft - 600;
	}
	wrap.style.left = newLeft + "px";
}

function prePic() {
	index--;
	if (index < 0) {
		index = 4;
	}
	changeBtn();
	let newLeft;
	if (wrap.offsetLeft == 0) {
		newLeft = -2400;
	} else {
		newLeft = wrap.offsetLeft + 600;
	}
	wrap.style.left = newLeft + "px";
}


for (let j = 0; j < spanAll.length; j++) {
	spanAll[j].onclick = function() {
		let dis = j - index;
		if (index == 4 && wrap.offsetLeft !== -3000) {
			dis = 5 + dis;
		}
		if (index == 0 && wrap.offsetLeft !== -600) {
			dis = -5 + dis;
		}
		wrap.style.left = wrap.offsetLeft - dis * 600 + 'px';
		index = j;
		changeBtn();
	};
}



let timer = null;

function autoPlay() {
	clearInterval(timer);
	timer = setInterval(function() {
		nextPic();
	}, 3000);
}
autoPlay();

container.onmouseover = function() {
	clearInterval(timer);
}

container.onmouseout = function() {
	autoPlay();
}

arrowLeft.onclick = function() {
	prePic();
};
arrowRight.onclick = function() {
	nextPic();
};