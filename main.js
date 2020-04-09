
/*
* Emulate typing
*/
$.fn.extend({kes:function(){
	let ob = this[0];
	let i = {target:ob,bubbles:!0,popGenerated:!0,isFillrWidgetEvent:!0,keyCode:19,key:"a"};
	let E1 = new KeyboardEvent("keyup", i),E2 = new KeyboardEvent("input", i),E3 = new KeyboardEvent("blur", i);
	if(ob){ob.dispatchEvent(E1);ob.dispatchEvent(E2);ob.dispatchEvent(E3);}
}});
$('input.class').val('text').kes();


/*
* Enter click
*/
const elm = document.querySelector('.textarea');
const evt = new Event('keydown');
evt.keyCode = 13;
elm.focus();
elm.dispatchEvent(evt);
