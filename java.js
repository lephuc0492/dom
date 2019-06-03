function	changeFontSize(x)
{
	if (Number.isInteger(x) == true) 
	{
	return document.querySelectorAll("body")[0]["style"]["fontSize"] = x + "px";
}
else	
{
	return "Giá trị của x sai điều kiện";
}
}
function cutString(x)
{
	var y = x.length;
	return x.slice(0,y-2);
}
function increaseFonSize(x)
{
	if (cutString(document.querySelectorAll("body")[0]["style"]["fontSize"]) < 30) 
	{
		var y = Number(cutString(document.querySelectorAll("body")[0]["style"]["fontSize"])) + 1; // Hàm number() để chuyển strng thành sô
		return document.querySelectorAll(`p#${x}`)[0]["style"]["fontSize"] = y + "px";
	}
	else
	{
		return "Font size vượt quá 30";
	}
}
function decreaseFonSize(x)
{
	if (cutString(document.querySelectorAll("body")[0]["style"]["fontSize"]) > 10) 
	{
		var y = Number(cutString(document.querySelectorAll("body")[0]["style"]["fontSize"])) - 1; // Hàm number() để chuyển strng thành sô
		return document.querySelectorAll(`p#${x}`)[0]["style"]["fontSize"] = y + "px";
	}
	else
	{
		return "Font size nhỏ quá 10 px";
	}
}
function changeColor()
{
document.querySelectorAll(`p#doanvan1`)[0]["style"]["color"] = "blue"
document.querySelectorAll(`p#doanvan2`)[0]["style"]["color"] = "yellow"
document.querySelectorAll(`p#doanvan3`)[0]["style"]["color"] = "red"
}
function changeBgColor(x)
{
	document.querySelectorAll("body")[0]["style"]["backgroundColor"] = x;
}
function coppyContent(p1,p2)
{
	
	var doan2 = document.querySelectorAll(`p#${p2}`)[0]["innerHTML"]
	return document.querySelectorAll(`p#${p1}`)[0]["innerHTML"] = doan2;
}
function coppyContent2(p1,p2)
{
	
	document.querySelectorAll(`p#${p1}`)[0]["innerHTML"] = document.querySelectorAll(`p#${p2}`)[0]["innerHTML"]
}