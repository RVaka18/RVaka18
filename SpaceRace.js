/* jshint -W097 */
/*eslint-env browser, jquery*/
'use strict';
var failed = false;
var answers = eval((/QTerm.dataToArray\(.*\)/g).exec($('html').html())[0]);
setInterval(function()
{
	var t = "";
	if ($(".value").length > 0)
	{
		t = toeng($(".free").first().children().text());
		$(".value").val(t);
	}
	if(!failed){
		submit();
	}
	failed=false;
}, 1);

function submit() {
    var e = $.Event("keydown");
    e.which = 13;
    $('#gun').trigger(e);
    //ty, the-twee
}
function toeng(s)
{
	var no = 0;
	while (no !== answers.length)
	{
		if (s == answers[no].definition)
		{
			return answers[no].word;
		}
		no++;
	}
	console.error("mooo!");
	failed=true;
	return "";
}
