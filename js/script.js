//Author: Darren Hong
function updateLineHeight()
{
	var attribution = "<div style='position: absolute; left: 5; bottom: 5; font-family: \
	monospace; font-weight: bold; font-size: 10;'>Site designed by <a href='https://github.com/dhong42' \
	target='_blank' style='text-decoration:underline;'>dhong42</a></div>"
	document.body.innerHTML += attribution;
	if ((document.getElementById('contentline')!=null)) {
		var line = document.getElementById('contentline');
		line.style.top = document.getElementById('contentleft').offsetHeight/2 - 30 + 'px';
		line.style.height = document.getElementById('contentleft').offsetHeight/4 + 'px';
	}
}
