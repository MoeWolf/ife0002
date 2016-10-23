//Query
//选择器
function $(selector) {                                      
    var ele = document;
    var sele = selector.replace(/\s+/, ' ').split(' ');    // 去除多余的空格并分割

    for (var i = 0, len = sele.length; i < len; i++) {

        switch (sele[i][0]) {    // 从子节点中查找
            case '#':
                ele = ele.getElementById(sele[i].substring(1));
                break;
            case '.':
                ele = ele.getElementsByClassName(sele[i].substring(1))[0];
                break;
            case '[':
                var valueLoc = sele[i].indexOf('=');
                var temp = ele.getElementsByTagName('*');
                var tLen = temp.length;
                if (valueLoc !== -1) {
                    var key = sele[i].substring(1, valueLoc);
                    var value = sele[i].substring(valueLoc + 1, sele[i].length - 1);
                    for (var j = 0; j < tLen; j++) {
                        if (temp[j][key] === value) {
                            ele = temp[j];
                            break;
                        }
                    }
                }
                else {
                    var key = sele[i].substring(1, sele[i].length - 1);
                    for (var j = 0; j < tLen; j++) {
                        if (temp[j][key]) {
                            ele = temp[j];
                            break;
                        }
                    }
                }
                break;
            default :
                ele = ele.getElementsByTagName(sele[i])[0];
                break;
        }
    }

    if (!ele) {
        ele = null;
    }

    return ele;
}

//数组去重
function uniqArray(arr) {
    var new_array = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] !== '' && new_array.indexOf(arr[i]) < 0 ) {
            new_array.push(arr[i]);
        }
    }
    return new_array;
}

//去除字符串首尾的空格
function trim(str) {
	return str.replace(/^\s+|\s+$/g, '');
}

//添加事件
function addEvent(element,event,listener) {
	element['on' + event] = listener;
}
//移除事件
function removeEvent(element,event,listener) {
	element['on' + event] = null;
}
//绑定click事件
function addClickEvent(element,listener) {
	element.onclick = listener;
}
//对Enter事件的绑定
function addEnterEvent(element,listener) {
	element.onkeydown = function (e) {
		e = e || window.event;
		if(e.keyCode == 13) {
			listener();
		}
	}
}

$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.enter = addEnterEvent;