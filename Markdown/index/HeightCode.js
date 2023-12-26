/*
Autor:chen dai gao；
Time:2018.12.15
------
function关键字斜体

*/
;(function($){
	/*关键字*/
	window.js=new Array('in', 'if' , 'for' , 'while' , 'finally' , 'var' , 'new' , 'function' , 'do' , 'return' , 'void' , 'else' , 'break' , 'catch' , 'instanceof' , 'with' , 'throw' , 'case' , 'default' , 'try' , 'this' , 'switch' , 'continue' , 'typeof' , 'delete' );
	window.cs=new Array( 'as' , 'base' , 'bool' , 'break' , 'byte' , 'case' , 'catch' , 'char' , 'checked' , 'class' , 'const' , 'continue' , 'decimal' , 'default' , 'delegate' , 'do' , 'double' , 'else' , 'enum' , 'event' , 'explicit' , 'extern' , 'false' , 'finally' , 'fixed' , 'float' , 'for' , 'foreach' , 'goto' , 'if' , 'implicit' , 'in' , 'int' , 'interface' , 'internal' , 'is' , 'lock' , 'long' , 'namespace' , 'new' , 'null' , 'object' , 'var' , 'dynamic' , 'operator' , 'out' , 'override' , 'params' , 'private' , 'protected' , 'public' , 'readonly' , 'ref' , 'return' , 'sbyte' , 'sealed' , 'short' , 'sizeof' , 'stackalloc' , 'static' , 'string' , 'struct' , 'switch' , 'this' , 'throw' , 'true' , 'try' , 'typeof' , 'uint' , 'ulong' , 'unchecked' , 'unsafe' , 'ushort' , 'using' , 'virtual' , 'volatile' , 'void' , 'while');
	window.python=new Array('and','elif','import','return','as', 'else', 'in', 'try', 'assert', 'except', 'is', 'while', 'break', 'finally', 'lambda', 'with', 'class', 'for', 'not', 'yield', 'continue', 'from', 'or', 'def', 'global', 'pass', 'del', 'if', 'raise');
	
	/*-------*/
	$.fn.heightcode=function(){
		
		var _this=$(this).text();
		var _val;
		try{
			var str=$(this).attr('class');
			var langs=str.match(/[^language-]\w+/);
			_val=ifs(_this,langs);
		}
		catch{
			console.log('error');
		}
		
		$(this).html(_val);
	}
	
	var ifs=function(val,langs){
		var txt=window[langs];
		let _val=val;
		for(var i=0;i<txt.length;i++)
		{
			if(_val.indexOf(txt[i])>=0){
				_val=regexps(_val,txt[i]);
			}
		}
		return _val;
	}
	//regexp
	var regexps=function(_val,e){
		var t='<i style="color:#c6611d;">'+e+'</i>';
		_val=_val.replace(new RegExp('\\b'+e+'\\b','g'),t);
		return _val;
	}
})(jQuery);