<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#myid {
	background: #ff0;
	font-size: 20px;
	font-weight: bold;
	color: #00f;
}
</style>
</head>
<body>
<h1 id="myid">안녕하세요.</h1>
<h1 id="myid">자바스크립트 입니다.</h1>
<h1 id="myid">강의 참 재미있죠?</h1>
<a href="#" onclick="doPrint()">자바스크립트 함수 호출하기</a>

<script type="text/javascript">
function doPrint(){
	//가장 먼저 만나는 id 속성에만 값을 인식한다. 중복 id를 인식하지 못한다. 
	document.getElementById("myid").innerHTML = "스크립트가 실행되었습니다.";
}
</script>
</body>
</html>