var wrap = document.getElementsByClassName('drag-wrap');

window.onload=function () {
	var drag = document.getElementsByClassName('drag');
	for(var i=0,len=drag.length;i<len;i++) {
		drag[i].draggable = true;
		drag[i].style.top = (i%6*36) + 'px';
		$.on(drag[i],'dragstart',dragStart);
		$.on(drag[i],'drag',dragging);
	}
	$.on(document.body,'dragover',dragOver);
	$.on(document.body,'drop',drop);
}

//事件函数
function dragStart (e) {
	var dragWrap = $('#dragContainer').offsetLeft;
	e = e || window.event;
	var parent = this.parentNode;
	startX = e.clientX;
	startY = e.clientY;
	startTop = parseInt(this.style.top) + 18;
	startLeft = parent.offsetLeft - dragWrap + 80;
	this.style.zIndex = 1;
	moveDrag(nextDrag(this),-36);
}

function dragging (ele) {
	if(this.className !== 'draging') {
		this.className = 'draging';
	}
}

function dragOver (e) {
	e.preventDefault();
}

function drop(e) {                                           // 拖动结束，将滑块加到新容器
    e = e || window.event;
    e.preventDefault();                                          // 避免浏览器对容器的默认处理（默认以链接形式打开）
    var location = getLocation(e);                               // 滑块降落的位置
    var myWrap = wrap[location[0]];
    var myDrag = myWrap.getElementsByClassName('drag')[location[1]];
    if (myDrag) {
        var myTop = myDrag.style.top;
    }
    else {                                                       // 兼容降落位置没有滑块的情况
        var beforeDrag = myWrap.getElementsByClassName('drag')[location[1] - 1];
        if (beforeDrag) {
            var beforeTop = parseInt(beforeDrag.style.top);
        }
        else {                                                   // 兼容容器中没有其他滑块的情况
            beforeTop = -36;
        }
        var myTop = beforeTop + 36 + 'px';
    }
    moveDrag(myDrag, 36);

    var block = document.getElementsByClassName('draging')[0];  // 将被拖拽滑块加到新容器
    block.style.top = myTop;
    block.style.zIndex = 0;
    block.className = 'drag';
    myWrap.insertBefore(block, myDrag);
}

//工具函数
function nextDrag (ele) {								//获取ele之后的滑块
	var brother = ele.nextSibling;
	while(brother && brother.nodeName === '#text') {
		brother = nextDrag(brother);
	}
	return brother;
}

function moveDrag(ele,distance) {
	while(ele) {
		ele.style.top = parseInt(ele.style.top) + distance + 'px';
		ele = nextDrag(ele);
	}
}

function getLocation(e) {
	var location = [];
	e = e || window.event;
	var moveX = e.clientX - startX;
	var moveY = e.clientY - startY;
	var x = startLeft + moveX;
	var y = startTop + moveY;
	
	if(x < 230) {
		location[0] = 0;
	}
	else if(x >= 230 && x<= 500) {
		location[0] = 1;
	}
	else{
		location[0] = 2;
	}
	
	location[1] = Math.floor((y+18)/36);
	var dragNum = wrap[location[0]].getElementsByClassName('drag').length;
	location[1] = Math.max(location[1],0);
	location[1] = Math.min(location[1],dragNum);
	return location;
}


