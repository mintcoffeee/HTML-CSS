/*
calss Calc {
	int x;	//변수
	int y;
	
	public void setValue(int x, int y){
		this.x = x;
		this.y = y;
	}
	public void plus(){
		return this.x + this.y;
	}
}
Calc calc = new Calc(); //생성 
calc.x = 0;
	변수
	객체
*/


//빈 객체 선언 
var calc = {}

//멤버변수 추가
calc.x = 0;
calc.y = 0;

//멤버함수
calc.setValue = function(p1, p2){
	this.x = p1;
	this.y = p2;
}

calc.plus = function(){
	return this.x + this.y;
}

calc.minus = function(){
	return this.x - this.y;
}

calc.result = function(){
	var value1 = this.plus();
	var value2 = this.minus();
	
	document.write("<p>덧셈 = " + value1 + "</p>");
	document.write("<p>뺄셈 = " + value2 + "</p>");
}



