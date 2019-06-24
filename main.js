$.fn.extend({KeyboardFlex:function(){
		let ob = this[0];
		let i = {target:ob,bubbles:!0,popGenerated:!0,isFillrWidgetEvent:!0,keyCode:19,key:"a"};
		let E1 = new KeyboardEvent("keyup", i),E2 = new KeyboardEvent("input", i),E3 = new KeyboardEvent("blur", i);
		if(ob){ob.dispatchEvent(E1);ob.dispatchEvent(E2);ob.dispatchEvent(E3);}
}});


// Example:
var value = 'Ivan';
$('#name').val(value).KeyboardFlex();
