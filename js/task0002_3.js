window.onload = function() {
	var list = $('.picList');
	var items = document.getElementById('lightButton').getElementsByTagName('li');
	var index = 0;
	animation = false;

	function showButton() { 							// 显示小圆点
		for(var i = 0, len = items.length; i < len; i++) {
			if(items[i].className === 'light') {
				items[i].className = '';
				break;
			}
		}
		items[index].className = 'light';
	}

	function animate(offset) {
		animation = true;
		var newLeft = parseInt(list.style.left) + offset;
		var time = 300;
		var interval = 10;
		var everyMove = offset / (time / interval);
		move();

		function move() {
			if((everyMove > 0 && parseInt(list.style.left) < newLeft) || (everyMove < 0 && parseInt(list.style.left) > newLeft)) {
				list.style.left = parseInt(list.style.left) + everyMove + 'px';
				setTimeout(move, interval);
			} else {
				list.style.left = newLeft + 'px';
				if(newLeft >= 0) {
					list.style.left = -3600 + 'px';
				} else if(newLeft <= -4200) {
					list.style.left = -600 + 'px';
				}
				animation = false;
			}
		}
	}

	for(var j = 0, len = items.length; j < len; j++) {
		items[j].onclick = function() {
			if(!animation) { //this
				var toIndex = parseInt(this.getAttribute('index'));
				if(toIndex === index) {
					return;
				}
				animate((toIndex - index) * (-600));
				index = toIndex;
				showButton();
			}
		}
	}

	$('.next').onclick = function next() {
		if(!animation) {
			animate(-600);
		}
		index++;
		if(index === 6) {
			index = 0
		}
		showButton();
	}
	
	$('.prev').onclick = function prev() {
		if(!animation) {
			animate(600);
		}
		index--;
		if(index === -1) {
			index = 5
		}
		showButton();
	}
}

var timer;
function playRight() {
	if(timer) {
		pause();
	}
	timer = setInterval(function() {
		$('.next').onclick();
	}, 1000);
}

function playLeft() {
	if(timer) {
		pause();
	}
	timer = setInterval(function() {
		$('.prev').onclick();
	}, 1000);
}

function pause() {
	clearInterval(timer);
}