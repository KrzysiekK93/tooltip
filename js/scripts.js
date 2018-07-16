(function(){

  var globalTooltip = null;

  function assignEvt(el, type, evt){

    for ( var i = 0; i < el.length; i++){

      el[i].addEventListener(type, evt, false);

    }

  }

  function createTooltip(text, options){

    var tooltip = document.createElement('div');

    tooltip.className = "tooltip hidden";
    tooltip.appendChild(document.createTextNode(text));
    document.body.appendChild(tooltip);

    tooltip.style.left = (options.x + (options.w / 2) - (tooltip.offsetWidth / 2)) + 'px';
    tooltip.style.top = (options.y - tooltip.offsetHeight - 10) + "px";

    tooltip.classList.remove("hidden");
    globalTooltip = tooltip;

  }

  function showTooltip(e){

    var options = {

      w: e.target.offsetWidth,
      x: e.target.offsetLeft,
      y: e.target.offsetTop
      
    };
    
    text = e.target.getAttribute("title");
    createTooltip(text, options);

    e.target.removeAttribute("title");

  }

  function removeTooltip(e){
    
    e.target.setAttribute("title", globalTooltip.textContent);
    globalTooltip.parentNode.removeChild(globalTooltip);

  }

  function init(el){
    
    assignEvt(el, 'mouseenter', showTooltip );
    assignEvt(el, 'mouseleave', removeTooltip );

  }

  window.tooltipInit = init;

})();