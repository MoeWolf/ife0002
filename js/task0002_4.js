var nameList = ['Anna','Brittany','Cinderella','Diana','Eva','Fiona','Gunda','Hege','Inga','Johanna','Kitty','Linda','Nina','Ophelia','Petunia','Amanda','Raquel','Cindy','Doris','Eve','Evita','Sunniva','Tove','Unni','Violet','Liza','Elizabeth','Ellen','Wenche','Vicky','Quality','Quote','Work','Review','Yet','You','Zero','Zip','Xylophone','Xylene','Material'];		//提示数据
var myInput = $('.myDateText');
var selectBar = $('.select');
var selec = selectBar.getElementsByTagName('li');

addInputEvent();

function addInputEvent () {										//添加输入事件
	if(myInput.addEventListener) {								//all browsers except IE before version 9
		myInput.addEventListener('input',onInput);
	}
	else if(myInput.attachEvent) {								//IE support
		myInput.attachEvent('onpropertychange',onPropChanged);
	}
}

function onInput(event) {										// Firefox, Google Chrome, Opera, Safari from version 5, Internet Explorer from version 9
	var myText = event.target.value;
	handleInput(myText);
}

function onPropChanged(event) {									//IE support
	var myText = '';
	if(event.propertyName.toLowerCase() == 'value') {
		myText = event.srcElement.value;
		handleInput(myText);
	}
}

function handleInput(inputText) {								//匹配输入的字符，并创建子选项
	if(inputText === '') {
		selectBar.innerHTML = '';
	}
	else{
		selectBar.style.display = 'block';
		var reg = new RegExp("^" + myInput.value, "i");
		var result;
		result = nameList.filter(function(item) {
					return item.match(reg);
				});
				var litext = "";
				for(var i = 0; i < result.length; i++) {
					litext += "<li>" + result[i] + "</li>"
					selectBar.innerHTML = litext;
				}
		}
	onmouse();
	}

function onmouse() {											//鼠标事件（划过，点击）
	for(var i = 0, len = selec.length; i < len; i++) {
		selec[i].addEventListener('click', function(e) {
			var seltar = this.innerHTML;
			myInput.value = seltar;
			clearSelectBar();
		});
		selec[i].addEventListener('mousemove', function(e) {
			this.className = 'active';
		});
		selec[i].addEventListener('mouseleave', function(e) {
			this.className = '';
		});
	}
}

function clearSelectBar() {										//清除选择栏
	selectBar.style.display = 'none';
}

document.onkeydown = function(e) {								//键盘事件
	if(e.keyCode == 40) {	//上
		var actli = selectBar.getElementsByClassName("active")[0];
		if(actli) {
			if(actli.nextElementSibling == null) {
				return false;
			}
			actli.nextElementSibling.className = "active";
			actli.className = "";
		}
		else {
			var allLi = selectBar.getElementsByTagName("li");
			allLi[0].className = 'active';
		}
	}
	if(e.keyCode == 38) {	//下
		var actli = selectBar.getElementsByClassName("active")[0];
		if(actli) {
			if(actli.previousElementSibling == null) {
				return false;
			}
			actli.previousElementSibling.className = "active";
			actli.className = "";
		}
	}
	if(e.keyCode == 13) {	//ENTER
		var actli = selectBar.getElementsByClassName("active")[0];
		var seltar = actli.innerHTML;
		myInput.value = seltar;
		clearSelectBar();
	}
	var actli = selectBar.getElementsByClassName("active")[0];
	var seltar = actli.innerHTML;
	myInput.value = seltar;
}

