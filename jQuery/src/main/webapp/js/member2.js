$(function(){
// jQuery 작성 시, $(function(){}); 작성해두고 ; 빠트리지 않도록 유의
	$('#join').submit(function(){
		var user_id = $('input[name="user_id"]').val(); // user_id value 호출
		if(!user_id){
			alert("아이디 입력");
			$('input[name=user_id]').focus();
			return false; // submit button click 시, action으로 넘어가지 않도록 false 처리
		} // 

		var user_pw = $('input[name="user_pw"]').val(); // user_id value 호출
		if(!user_pw){
			alert("비밀번호 입력");
			$('input[name=user_pw]').focus();
			return false;
		}

		var user_id_no = $('input[name="user_id_no"]').val(); // user_id value 호출
		if(!user_id_no){
			alert("주민등록번호 입력");
			$('input[name=user_id_no]').focus();
			return false;
		}
		
		if(!$('input[name="gender"]').is(':checked')){
		// input
			// checked - true, unchecked - false
			alert("성별 입력");
			
			// input type="radio": 배열 처리
			// document.form1.gender[1].checked = true; // 성별 미 입력 시, alert 후 Female checked
			// form1: name, id = getElementById
			
			// $('input[name="gender"]:eq(1)').attr('checked', true);
			// attr: attribute
			// 동적으로 값이 부여됨

			$('input[name="gender"]:eq(1)').prop('checked', true);
			// prop: property

			// prop: 속성을 값으로 인식
			// attr: 속성을 문자열로 인식
			// attr과 달리 checked 표시가 되지 않음(F12-관리자 도구)
			
			return false;
		}
		
		var email = $('input[name="email"]').val(); // user_id value 호출
		if(!email){
			alert("이메일 입력");
			$('input[name="email"]').focus();
			return false;
		}
		
		var url = $('input[name="url"]').val(); // user_id value 호출
		if(!url){
			alert("URL 입력");
			$('input[name="url"]').focus();
			return false;
		}
		
		var phno = $('input[name="phno"]').val(); // user_id value 호출
		if(!phno){
			alert("핸드폰 번호 입력");
			$('input[name="phno"]').focus();
			return false;
		}
		
		if(!$('input[name="hobby"]').is(':checked')){ // 1개라도 선택되어있다면 true 반환 > !를 통해서 false로 변환
			alert("취미 선택");
			$('input[name="hobby"]:eq(0)').attr('checked', true);
			return false;
		}
		
		if($('select[name="job"] > option:selected').index()<1){
		// select tag가 아닌 option tag가 selected 되어야함
		// default selected: 선택하세요(index=0)
			alert("직업 선택");
			$('select[name="job"] > option:eq(1)').attr('selected', true);
			// checked가 아닌 selected 유의
			
			return false;
		}
		
		// 입력한 내용을 화면에 출력
		var gender = $('input[name="gender"]:checked').val(); // checked된 값의 val 반환
		// gender값이 선언되어있지 않음(checked만 선언)
		
		var hobby = $('input[name="hobby"]:checked');
		// checked value만 호출
		var hobby_val = '';
		hobby.each(function(){
		// each(): jQuery for문
			// alert($(this).val());
			// this: 반복문에서 hobby 안에 포함된 객체(선택된 value)
			// this: object Obect 반환
			
			hobby_val += $(this).val();
			hobby_val += ', &nbsp';
		});
		
		var job = $('select[name="job"] > option:selected').val();
		
		var result = '<ul>';
		result += '<li>아이디: ' + user_id + '</li>';
		result += '<li>비밀번호: ' + user_pw + '</li>';
		result += '<li>주민등록번호: ' + user_id_no + '</li>';
		result += '<li>성별: ' + gender + '</li>';
		result += '<li>이메일: ' + email + '</li>';
		result += '<li>홈페이지: ' + url + '</li>';
		result += '<li>핸드폰: ' + phno + '</li>';
		result += '<li>취미: ' + hobby_val + '</li>';
		result += '<li>직업: ' + job + '</li>';
		result += '</ul>';
		
		$('body').html(result);
		// body tag를 result로 덮어쓰기 > 화면이동이없는 jQuery
		
		return false;
		
	}); // id=join tag를 submit
});
