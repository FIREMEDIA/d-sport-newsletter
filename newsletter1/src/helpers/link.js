module.exports = function(content) {
  var link = "http://newsletter.firemedia.cz/d-sport/newsletter1";
  //var link = "http://localhost:3000";
  return link+'/'+content.fn();
}
