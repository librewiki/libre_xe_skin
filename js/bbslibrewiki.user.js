// ==UserScript==
// @name        librewiki
// @namespace   damezuma
// @include     https://bbs.librewiki.net/*
// @version     1.1
// @grant       none
// ==/UserScript==
"use strict";
var nick = jQuery(jQuery("a.dropdown-toggle")[0]).text();
nick = nick.trim();
window.mw = {
  config:{
    value:{
      "wgUserName":nick
    },
    get:function(key){
      return this.value[key];
    }
  }
};
if(nick !="로그인"){
  var style = "<link rel=\"stylesheet\" href=\"//librewiki.net/load.php?debug=false&lang=ko&modules=user&only=styles&skin=libre&user="+nick+"\"/>";
  window.$ = jQuery;
  var script = '<script src=\'/index.php?title=사용자:'+nick+'/hisyokan2.js&action=raw&ctype=text/javascript\'></script>';
  jQuery("head").append(style);
  
  var script_tag = document.createElement("script");

	script_tag.src = "//librewiki.net/index.php?title=사용자:"+nick+"/common.js&action=raw&ctype=text/javascript";
	jQuery("head").append(script_tag);
}

function strip_tags (input, allowed) {
  allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
                                                                               });
}


jQuery(document).ready(function(){
	var contents = jQuery(".xe_content");
	var i = 0;
	for(i = 0 ; i < contents.length; i++)
	{
		var thread_contents = jQuery(contents[i]).html();
		var temp_list = [];
		var res = [];
		var closing_tag_idx = -1;
		while((closing_tag_idx =thread_contents.indexOf("]]")) != -1)
		{
			var a = thread_contents.substring(0, closing_tag_idx);
			thread_contents = thread_contents.substring(closing_tag_idx + 2, thread_contents.length);
			var openning_tag_idx = a.lastIndexOf("[[");
			console.log(thread_contents);
			console.log("]]태그의 위치:" + closing_tag_idx);
			console.log("[[태그의 위치:" + openning_tag_idx);
			if(openning_tag_idx == -1)
			{
				res.push(a + "]]");
				continue;
			}
			res.push(a.substring(0, openning_tag_idx));
			a = a.substring(openning_tag_idx+2,a.length);
			var title = "";
			var link = "";
			var bar_idx = -1;
			if((bar_idx= a.indexOf("|")) != -1)
			{
				title = a.substring(bar_idx + 1,a.length);
				link = a.substring(0,bar_idx);
			}
			else
			{
				title = link = a;
			}
			title =strip_tags(title);
			link = strip_tags(link);
			res.push("<a style=\"color:#6699FF !important;\" title=\"");
			res.push(title.trim());
			res.push("\" href=\"//librewiki.net/wiki/");
			res.push(link.trim());
			res.push("\">");
			res.push(title.trim());
			res.push("</a>");
			
		}
		res.push(thread_contents);
		jQuery(contents[i]).html(res.join(""));
	}
	
	
	
});