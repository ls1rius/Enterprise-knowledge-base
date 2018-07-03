$(function(){
    var E = window.wangEditor;
	var editor = new E('#centerContain #editArea');
	editor.create();
	$('#editArea .w-e-toolbar').after("<div class='title'>\
<textarea class='titleInput' type='text' placeholder='请输入标题...'></textarea>\
		</div>");
});
// $(function(){
//     var editor = new wangEditor('centerContain');
//     editor.create();
// })





function addUnderLine(aim){
	aim = aim.toString();
	var inputHtml = $('.w-e-text').html();
	// var inputText = $('.w-e-text').text();
	var cur = 0;
	var aimLen = aim.length;
	var totLen = inputHtml.length;
	while(cur < totLen - 1){
		console.log(cur);
	// for(var i  = 0; i<10; i++){
		var findPos = inputHtml.indexOf(aim,cur);

		// console.log(findPos);
		cur = findPos + aimLen;
		if(findPos == -1)
			break;
		else{

			if(findPos>=22){
				var tmpHtml = inputHtml.slice(findPos-22,findPos);
				// console.log(tmpHtml);
				if(tmpHtml.indexOf('<span class="redLine">') == -1){
					curHtml = inputHtml.slice(0,findPos) + 
						'<span class="redLine">' + 
						inputHtml.slice(findPos,findPos+aimLen) + 
						'</span>' + 
						inputHtml.slice(findPos+aimLen,totLen);

					inputHtml = curHtml;
					totLen = inputHtml.length;
					cur+=22;

					$('.w-e-text').html(inputHtml);
				}
				else{
					console.log(cur);
					console.log(findPos);
					console.log(inputHtml);
				}
			}
			else{
				// console.log(findPos);
				curHtml = inputHtml.slice(0,findPos) + 
					'<span class="redLine">' + 
					inputHtml.slice(findPos,findPos+aimLen) + 
					'</span>' + 
					inputHtml.slice(findPos+aimLen,totLen);

				inputHtml = curHtml;
				totLen = inputHtml.length;
				cur+=22;

				$('.w-e-text').html(inputHtml);
			}

		}
		// console.log(totLen);
		// console.log(cur);
	}
}

// setInterval("addUnderLine('59')",10000);




function checkTheWrongWords(){
	var inputText = $('.w-e-text').text();

	let data = {
		disabledRules: "WHITESPACE_RULE",
		allowIncompleteResults:"true",
		text: inputText,
		language: "zh"
	}
	$.post("https://languagetool.org/api/v2/check", data, function(res){
		let arr = [];
		for(let match of res['matches']) {
			let context = match['context'];
			let word = context['text'].substr(context['offset'], context['length']);
			arr.push(word);
	    }
		console.log(arr);
		arr.forEach(function(item){
			addUnderLine(item);
		})
	},"json");

}

setInterval("checkTheWrongWords()",3000);