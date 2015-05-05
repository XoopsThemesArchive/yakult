var loginCk = "orkut_login";
function readCookie(name)
{
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) 
	{
		begin = dc.indexOf(prefix);
		if (begin != 0) 
			return null;
	} 
	else
		begin += 2;
	var end = document.cookie.indexOf(";", begin);
	if (end == -1)
		end = dc.length;	
	return dc.substring(begin + prefix.length, end);
}
function setLoginCookie(setPwd)
{
	if (!setPwd)
	{
		var expires = new Date();
		document.cookie = loginCk + "=0,0,0; expires=" + expires.toUTCString();
	}
}
function readLoginCookie(login, pwd, save)
{
	clearOldLoginCookie();
	var cookie = readCookie(loginCk);
	if (cookie == null)
		return;
	var creds = cookie.split(",");
	if (creds.length == 3)
	{
		login.value = creds[0];
		pwd.value = creds[0];
		save.checked = true;
	}
}
function clearPass(checked, pwdField)
{
	if (!checked && pwdField != null && pwdField.value != "undefined")
		pwdField.value = "";
}
function clearOldLoginCookie()
{
	var oldName = "LOG";
	var expires = new Date();
	document.cookie = oldName + "=,; expires=" + expires.toUTCString();
}
