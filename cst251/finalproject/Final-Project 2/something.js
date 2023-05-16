function stepUpText(tagname)
{
    var text = document.getElementById(tagname);
    if (text.style.display == "none")
    {
        text.style.display = "block";
    }
    else
    {
        text.style.display = "none";
    }
}

function stickFooterToBottom() {
  const footer = document.querySelector('footer');
  const footerHeight = footer.offsetHeight;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;
  console.log("BH " + bodyHeight);
  console.log("WH " + windowHeight);
  if (bodyHeight < windowHeight) {
    footer.style.position = 'relative'; // problem 
    footer.style.bottom = 0;
  } else {
    footer.style.position = 'relative';
  }
}

window.addEventListener('load', stickFooterToBottom);
window.addEventListener('resize', stickFooterToBottom);
