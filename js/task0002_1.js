function showHobby() {
	var text = $('.myTextArea').value;				
	text = text.replace(/[\s,.:;、]+/g, ' ');					//空格分割字符串
	var hobby = text.split(' ');								//分割
	hobby = uniqArray(hobby);									//数组去重
	
	if(hobby.length<1) {										//错误情况
		$('.error').innerHTML = '请输入至少一个爱好';
	}
	else if(hobby.length>10) {
		$('.error').innerHTML = '请输入少于10个爱好';
	}
	else {
		if($('.error')) {
			$('.error').innerHTML = '';
		}
		if($('.result')) {
			$('.center').removeChild($('.result'));
		}
		var result = document.createElement('div');
		result.className = 'result';
		$('.center').appendChild(result);
		var h3 = document.createElement('h3');
		h3.innerHTML = '爱好：';
		result.appendChild(h3);
		
		for(var i=0,len=hobby.length;i<len;i++) {
			var checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			var data = document.createTextNode(hobby[i]+' ');
			result.appendChild(checkbox);
			result.appendChild(data);
		}
	}
}

function resetHobby() {
	$('.error').innerHTML = '';
	$('.myTextArea').value = '';
	if($('.result')) {
		$('.center').removeChild($('.result'));
	}
}
