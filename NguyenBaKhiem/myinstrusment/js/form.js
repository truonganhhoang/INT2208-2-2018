//chuan hoa ten
function ChuanhoaTen(ten) {
	dname = ten;
	ss = dname.split(' ');
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}

document.getElementById("agree").onclick = function(e) {
		if (this.checked) {
			document.getElementById("law").style.display = 'block';
			document.getElementById("submit").disabled = false;
		} else {
			document.getElementById("law").style.display = 'none';
			document.getElementById("submit").disabled = true;
		}
	}
document.getElementById("closelaw").onclick = function(e) {
	document.getElementById("law").style.display = 'none';
}
document.getElementById("closeerror").onclick= function(e) {
	document.getElementById("error").style.display = 'none';
}