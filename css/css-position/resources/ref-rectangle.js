/**
 * The function positions a new div to exactly the bounding client rect without
 * using sticky position. If it's directly under the sticky element it could be
 * obscured and not show up when compared to the ref.  */
function setupRefRectangle(document) {
  let sticky_divs = document.querySelectorAll('.sticky');
  sticky_divs.forEach((sticky_div) => {
    var new_div = document.createElement("div");
    new_div.style.left = sticky_div.offsetLeft+"px";
    new_div.style.top  = sticky_div.offsetTop+"px";
    new_div.style.width = sticky_div.getBoundingClientRect().width+"px";
    new_div.style.height = sticky_div.getBoundingClientRect().height+"px";
    new_div.style.backgroundColor = 'blue';
    new_div.style.position = "absolute";
    sticky_div.parentNode.insertBefore(new_div, sticky_div);
  });
  return document;
}
