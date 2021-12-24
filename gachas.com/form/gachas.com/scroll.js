var doc = document;
function E(e){
  return doc.getElementById(e);
}
function offset(element){
  var x = 0, y = 0, e = element;
  while(e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop)){
    x += e.offsetLeft - e.scrollLeft;
    y += e.offsetTop - e.scrollTop;
    e = e.offsetParent;
  }
  return {left: x, top: y};
}
function YourSolution(listId){
  var parentId = E(listId), pcn = parentId.childNodes;
  for(var i=0,l=pcn.length; i<l; i++){
    if(pcn[i].nodeType === 1){
      var ac = pcn[i].childNodes;
      for(var n=0,m=ac.length; n<m; n++){
        var an = ac[n];
        if(an.nodeType === 1){
          an.onclick = function(){
            var el = offset(this);
            scrollTo(el.left, el.top);
          }
        }
      }
    }
  }
}