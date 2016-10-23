function showDate() {
	var text = $('.myDateText').value; 								
	text = trim(text);
	var enterTime = text.split('-');

	if(enterTime.length !== 3) {
		$('.error').innerHTML = '请按正确格式输入时间';
	} else {
		if(enterTime[1] > 12) {
			$('.error').innerHTML = '请按正确格式输入时间';
		} 
		else if(enterTime[2] > 31) {
			$('.error').innerHTML = '请按正确格式输入时间';
		} 
		else {
			t = setTimeout('showDate()', 1000);					 // 一秒执行一次

			$('.error').innerHTML = ''; 							// 删除旧元素
			if($('.result')) {
				$('.center').removeChild($('.result'));
			}
			
			var setTime = new Date();
			setTime.setFullYear(enterTime[0],enterTime[1]-1,enterTime[2]);
			setTime.setHours(0,0,0,0);
			var nowTime = new Date();
			var diff = setTime - nowTime;
			
			if(diff<0) {
				$('.error').innerHTML = '请输入未来的时间';
				clearTimeout(t);
				return;
			}
			
			var d_diff = diff / (24*60*60*1000);
			var days = Math.floor(d_diff);
			var h_diff = (d_diff - days) * 24;
			var hours = Math.floor(h_diff);
			var m_diff = (h_diff - hours) * 60;
			var mins = Math.floor(m_diff);
			var s_diff = (m_diff - mins) * 60;
			var seconds = Math.floor(s_diff);
			
			var result = document.createElement('div');
			result.className = 'result';
			$('.center').appendChild(result);
			
			var h3 = document.createElement('h3');
			h3.innerHTML = '倒计时：';
			$('.result').appendChild(h3);
			
			var p = document.createElement('p');
			p.innerHTML = '距离' + enterTime[0] +'年' + enterTime[1] +'月' +enterTime[2] + '日还有' + days +'天' + hours +'小时' +mins +'分' +seconds +'秒';
			$('.result').appendChild(p);
		}
	}
}

function resetDate() {
	clearTimeout(t);
	$('.error').innerHTML = '';
	$('.myDateText').value = '';
	if($('.result')) {
		$('.center').removeChild($('.result'));
	}
}
