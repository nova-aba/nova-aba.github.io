//Author: Darren Hong
function updateLineHeight()
{
	var attribution = "<span style='position: absolute; left: 0; font-family: Georgia; font-size: 9;'>Site designed by <a href='https://github.com/dhong42' target='_blank'>Darren Hong</a></span>"
	document.getElementById('contactbar').innerHTML = document.getElementById('contactbar').innerHTML + attribution;
	if ((document.getElementById('contentline')!=null)) {
		var line = document.getElementById('contentline');
		line.style.top = document.getElementById('contentleft').offsetHeight/2 - 30 + 'px';
		line.style.height = document.getElementById('contentleft').offsetHeight/4 + 'px';
	}
}
