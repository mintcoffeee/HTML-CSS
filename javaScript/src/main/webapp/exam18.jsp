<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
function doPrint(num){
	var msg = "doPrint()가 " + num + "회 실행되었습니다."; 
	alert(msg);
	document.getElementById("myid").innerHTML = msg;
}

doPrint(1);
</script>
</head>
<body>
<script type="text/javascript">
	doPrint(2);
</script>

<h1 id="myid">안녕하세요.</h1>

<script type="text/javascript">
	doPrint(3);
</script>
</body>
</html>


<!-- 
스파게티 소스
 - 제어하려는 태그가 인식된 이후에 자바스크립트 함수를 호출해야 한다는 제약은
   자바스크립트 소스와 HTML 태그가 반드시 순서를 지키면서 섞여서 코딩해야 한다는 것이다.

결과를 볼 때 크롬에서는 "안녕하세요" 라는 결과가 안 나오고 나중에 "doPrint()가 3회 실행되었습니다." 화면에 나온다.
 -->
 
 
 