!function($,t,e){function n(n,u){function o(t){$(i).each(function(){var e=$(this);this===t.target||e.has(t.target).length||e.triggerHandler(u,[t.target])})}u=u||n+e;var i=$(),s=n+"."+u+"-special-event";$.event.special[u]={setup:function(){i=i.add(this),1===i.length&&$(t).bind(s,o)},teardown:function(){i=i.not(this),0===i.length&&$(t).unbind(s)},add:function(t){var e=t.handler;t.handler=function(t,n){t.target=n,e.apply(this,arguments)}}}}$.map("click dblclick mousemove mousedown mouseup mouseover mouseout touchstart touchend touchmove change select submit keydown keypress keyup".split(" "),function(t){n(t)}),n("focusin","focus"+e),n("focusout","blur"+e),$.addOutsideEvent=n}(jQuery,document,"outside");