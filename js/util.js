//Created by Wang Binbin
//         on 2016.7.4  
//task 2.1
//// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
	return Object.prototype.toString.call(arr) === '[object array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
	return Object.prototype.toString.call(fn) === '[object function]';
}
//task2.2
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var clone = src;
    
    //对于object,array,date等引用类型，直接赋值克隆会有引用问题，需用构造函数重新构造.
    //对于array
    if (src instanceof Array) {
    	clone = [];
    	for (var key in src) {
    		clone[key] = cloneObject(src[key]);
    	}
    	return clone;
    }
    
    //对于object
    if (src instanceof Object){
    	clone = {};
    	for (var key in src) {
    		if (src.hasOwnProperty(key)) {    //忽略继承属性
    			clone[key] = cloneObject(src[key]);
    		}
    	}
    	return clone;
    }
    
    //对于date
    if (src instanceof Date) {
    	clone = new Date(src.getDate());
    	return clone;
    }
    
    //对于string,num,boolean等值类型
    return src;
}

// 测试用例：
/*var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"
*/

//task2.3
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(array){  
	var newArray = [];
	for(var i=0,len=array.length;i<len;i++) {
		if(array[i] !== '' && newArray.indexOf(array[i])<0) {
			newArray.push(array[i]);
		}
	}
	return newArray;
} 

//优化遍历数组法
function uniqArray1(array){  
var r = [];  
for(var i = 0, l = array.length; i < l; i++) {  
 for(var j = i + 1; j < l; j++)  
  if (array[i] === array[j]) j = ++i;  
 r.push(array[i]);  
 }  
 return r;  
} 

// 使用示例
/*
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);

var al = 10000;
var a = [];
while (al--){
a.push(al%2);
}

console.time('uniqArray')
console.log(uniqArray(a).length);
console.timeEnd('uniqArray')

console.time('uniqArray1')
console.log(uniqArray1(a).length);
console.timeEnd('uniqArray1')

console.time('uniqArray2')
console.log(uniqArray2(a).length);
console.timeEnd('uniqArray2')

console.time('uniqArray3')
console.log(uniqArray3(a).length);
console.timeEnd('uniqArray3')
*/

//task2.4
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    function isEmpty(c) {
        return /\s/.test(c);
    }

    var len = str.length;
    for (var i = 0; i < len && isEmpty(str.charAt(i)); i++);
    if (i === len) {
        return '';
    }
    for (var j = len; j && isEmpty(str.charAt(j - 1)); j--);
    return str.substring(i, j);
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// 使用示例
/*
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'
*/

//task2.5
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for (var i=0;i<arr.length;i++) {
    	fn(arr[i],i);
    }
}
// 其中fn函数可以接受两个参数：item和index

// 使用示例
/*var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html */

//task2.6
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var num = 0;
	for (key in obj) {
		if (obj.hasOwnProperty(key)){
			num++;
		}
	}
	return num;
}

// 使用示例
/*var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3
*/

//学习正则表达式，在`util.js`完成以下代码

//task2.7
// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
}


//task3.1
// 检查元素是否已存在className
function hasClass(element,className) {
	var name = element.className.match(/\s+/g) || [];
	if (name.indexOf(className) !== -1) {
		return true;
	}
	else return false;
}

//为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    if (!hasClass(element,className)) {
    	element.className = trim(element.className + " " + newClassName);
    }
}

//移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    if (hasClass(element,className)) {
    	element.className = trim(element.className.replace(oldClassName,""));
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}


// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
	var x = 0;
	var y = 0;
	var current = element;
	//获取元素的相对位置
	while (current != null) {
		x += current.offsetLeft;
		y += current.offsetTop;
		current = current.offsetParent;
	}
	//滚动条滚动的距离
	var scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
	var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
	
	//获取元素的相对位置
	x -= screenLeft;
	y -= scrollTop;
	
	return {
		x:x;
		y:y;
	}
}
//task3.2
//实现一个简单的Query
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

//task4.1
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    element.addEventListener(event,listener);
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element,event,listener) {
	element.removeEventListener(event,listener)
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    element.addEventListener('click',listener)
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element,'keydown',function(e) {
    	var event = e || window.event;
    	var keyCode = event.which || event.keyCode;
    	if (keyCode === 13) {
    		listener.call(element,event);
    	}
    })
}

             
//5.1 任务描述
//判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    return /msie (\d+\.\d+)/i.test(navigator.userAgent)?
    (document.documentMode || + RegExp['\x241']) : -1;
}


// 设置cookie
function isValidCookieName(cookieName) {
	return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24'))
	.test(cookieName);
}

function setCookie(cookieName, cookieValue, expiredays) {
    if(!isValidCookieName(cookieName)) {
    	return;
    }
    
    var exdays = '';
    if(expiredays) {
    	exdays = new Date();
    	exdays.setDate(exdays.getDate() + expiredays);
    	var expires = ';expirss=' + exdays.toUTCString();   // toGMTString is deprecated and should no longer be used, it's only there for backwards compatibility, use toUTCString() instead
    }
    document.cookie = cookieName + '=' + encodeURIComponent(cookieValue) + expires;	
}

// 获取cookie值
function getCookie(cookieName) {
    if(!isValidCookieName(cookieName)) {
    	return null;
    }
    var va = new RegExp(cookieName + '=(.*)($|;)');
    return va.exec(document.cookie)[1] || null;
}


//6. Ajax
function ajax(url, options) {
	var xmlhttp;
	if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//处理data
	if(options.data) {
		var dataarr = [];
		for(var items in options.data) {
			dataarr.push(item + '=' + encodeURI(options.data[items]));
		}
		var data = dataarr.join('&');
	}
	
	//默认type
		if(!options.type) {
			options.type = 'GET';
		}
		options.type = options.type.toUpperCase();
		
	//发送请求
	if(options.type === 'GET') {
		var myURL = '';
		if(options.data) {
			myURL = url + '?' + data;
		}
		if(!options.data) {
			myURL = url;
		}
		xmlhttp.open('GET',myURL,true);
		xmlhttp.send();
	}
	else if(options.type === 'POST') {
		xmlhttp.open('POST', url, true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(data);
	}
	
	//readyState
	  xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                if (options.onsuccess) {
                    options.onsuccess(xmlhttp.responseText, xmlhttp.responseXML);
                }
            }
            else {
                if (options.onfail) {
                    options.onfail();
                }
            }
        }
    }
}

// 使用示例：
/*
ajax(
    'prompt.php',
    {
        data: {
            q: 'a'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        },
        onfail : function () {
            console.log('fail');
        }
    }
);
*/
