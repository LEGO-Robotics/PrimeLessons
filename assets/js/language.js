langs=['en-us:United States:English','es:Spain:Español','nl:Netherlands:Nederlands','ar:Saudi Arabia:العَرَبِيةُ‎‎','pt-br:Brazil:Portugues','el:Greece:Ελληνικά','fr:France:français','ct:../ct:català','he:Israel:עברית','it:Italy:Italiano']


function get_browser_version(){
  var N=navigator.appName, ua=navigator.userAgent, tem;
  var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
  M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
  return M[1];
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var browser = navigator.appName;
var version = get_browser_version();

if (browser=="Microsoft Internet Explorer") {
  if (version<="7.0")
  document.location.href="http://classic.ev3lessons.com/"
}

/*
if (window.location.hash) {
// Puts hash in variable, and removes the # character
var language = window.location.hash.substring(1);
//if (window.location.hash == "#br") {
//  window.location.hash = "#pt-br";
//  setTimeout(function(){location.reload(true);},100);
//}
} else {
// window.location.replace("#en-us");
var language = "en-us";
// location.reload();
}
*/

if (getParameterByName('lang') != null) {
  var language = getParameterByName('lang');
  //if (getParameterByName('langsave') != 'no') {
  localStorage.lang = "ev3cookie"+language;
  //}
} else {
  var language = 'en-us'

  navlang=navigator.language.split('-')[0]
  //str =localStorage.lang
  var i;
  for (i = 0; i < langs.length; i++) {
    str=langs[i].split(':')[0]
    tmp =str.search(navlang)
    if (tmp != -1) {
      //window.location.hash = "#"+langs[i].split(':')[0]
      //  setTimeout(function(){location.reload(true);},100);
      var language = langs[i].split(':')[0];

    }
  }

}

function deleteAllCookies() {
  if (navigator.cookieEnabled = true) {
    var c = document.cookie.split("; ");
    for (i in c)
    document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
document.cookie=""

str =localStorage.lang
if (localStorage.lang && window.location.hash == "") {
  var i;
  for (i = 0; i < langs.length; i++) {
    tmp =str.search('ev3cookie'+langs[i].split(':')[0])
    if (tmp != -1) {
      //window.location.hash = "#"+langs[i].split(':')[0]
      //  setTimeout(function(){location.reload(true);},100);
      var language = langs[i].split(':')[0];

    }
  }
  //alert('a')
  //window.location.hash = "#"+document.cookie.split(';')[0]
  //  setTimeout(function(){location.reload(true);},100);
}

function createCookie(lang){
  localStorage.lang = "ev3cookie"+lang
}

var page = window.location.href.split("?")[0].split("#")[0] + '?lang=';
var i;
for (i = 0; i < langs.length; i++) {
  window[langs[i].split(':')[0].split('-')[0]] = page + langs[i].split(':')[0];
}


if (window.location.hash) {
  // Puts hash in variable, and removes the # character
  var language = window.location.hash.substring(1);
}