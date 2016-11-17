var tafrit = '<ul id=menu>'+
					'<li><a href="index.html">אודות הפרויקט</a>'+
					'<li><a href="#">העיר העתיקה&nbsp &#9776</a>'+
			'<ul class=submenu>'+
				'<li><a href="whitetower.html">המגדל הלבן</a>'+
				'<li><a href="arcpool.html">בריכת הקשתות</a>'+
				'<li><a href="market.html">שוק רמלה</a>'+
			'</ul>'+
				'<li><a href="#">התחדשות עירונית&nbsp &#9776</a>'+
			'<ul class=submenu>'+
				'<li><a href="omanim.html">קריית האומנים</a>'+
				'<li><a href="menahem.html">קריית מנחם</a>'+
				'<li><a href ="azrieli.html">קניון עזריאלי</a>'+
			'</ul>'+
				'<li><a href="#">דו קיום ברמלה&nbsp &#9776</a>'+
			'<ul class=submenu>'+
				'<li><a href="muslimqr.html">הרובע המוסלמי </a>'+
				'<li><a href="cristian.html">הרובע הנוצרי </a>'+
			'</ul>'+
				'<li><a href="galery.html">גלריה&nbsp &#9788</a>'+
				'<li><a href="contact.html">צור קשר&nbsp &nbsp&#9742</a>'+
			'</ul>'
var main='<p style="margin: 0px;padding: 0px; font-size: 600%; letter-spacing: 3px;text-shadow: 3px 3px 3px #555"><a style="	color: #00a8e6;font-weight: bold;text-decoration: none;" href="index.html">רַמְלָה</a></p>'

function mark2() {
	page=window.location.href ;// page url

	var obj=document.getElementById("menu") ;						
	var elements = obj.getElementsByTagName("a");// Array of links

	for (i=elements.length-1;  i> 0 ; i--) { //search form bottom to up
	var kuku=page.indexOf(elements[i].href) ;
	if (kuku >= 0 ) break ; }  //
	elements[i].className="current_bold";

	var objli=elements[i].parentNode.parentNode ; // goes to UL
	if  (objli.id=="menu"){elements[i].parentNode.className='current_white';return }  // page has no children
	document.getElementById("right").innerHTML=objli.innerHTML ;
	objli.parentNode.className = 'current_white';  //page has children
}


function alert1()
{
	window.alert("תגובתך נשלחה, תודה.");
}



