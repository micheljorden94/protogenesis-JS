window.onload = function() {
    let picGallery = document.querySelector('.picGallery');
    let preKey = document.querySelector('.arrow-left');
    let nextKey = document.querySelector('.arrow-right');
    let btn = document.querySelectorAll('span');
    let container = document.querySelector('#container');
    let timer = null;
    let index = 0;

    preKey.onclick = function() {
        prePic();
    };
    nextKey.onclick = function() {
        nextPic();
    };

    function buttonChange() {
        for (let i = 0; i < btn.length; i++) {
            btn[i].className = "";
        }
        btn[index].className = "on";
    }

    function prePic() {
        let newLeft = 0;
        index--;
        if (index < 0) {
            index = 4;
        }
        buttonChange();
        // let styleEnd = window.getComputedStyle(picGallery,null).left;
        if (picGallery.style.left == '0px') {
            newLeft = -2400;
        } else {
            newLeft = parseInt(picGallery.style.left) + 600;
        }
        picGallery.style.left = newLeft + 'px';
    }

    function nextPic() {
        let newLeft = 0;
        index++;
        if (index > 4) {
            index = 0;
        }
        buttonChange();
        // let styleEnd = window.getComputedStyle(picGallery,null).left;
        if (picGallery.style.left == '-3600px') {
            newLeft = -1200;
        } else {
            newLeft = parseInt(picGallery.style.left) - 600;
        }
        picGallery.style.left = newLeft + 'px';
    }

    function autoPlay() {
        clearInterval(timer);
        timer = setInterval(function() {
            nextPic();
        }, 3000);
    }
    autoPlay();

    container.onmouseenter = function() {
        clearInterval(timer);
    };
    container.onmouseleave = function() {
        setTimeout(function() {
            autoPlay();
        }, 1000);
    };
    for(let j = 0; j < btn.length; j++){
    	btn[j].onclick = function(){
    		let dis = index - j;
    		if(index == 4 && parseInt(picGallery.style.left)!==(-3000)){
    			dis = dis - 5;
    		}
    		if(index == 0 && parseInt(picGallery.style.left)!==(-600)){
    			dis = dis + 5;
    		}
    		picGallery.style.left = (parseInt(picGallery.style.left)+dis*600)+'px';
    		index = j;
    		buttonChange();
    	};
    }
};