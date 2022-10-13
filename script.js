let myButton = document.getElementsByClassName('myButton')[0];
myButton.addEventListener("click", function(){
    let value = document.getElementsByTagName('input')[0].value || document.cookie.split("=")[1];
    if(value){
      showText(value);
      document.cookie = `value=${value};SameSite=lax`;
      return;
    } 
    alert('nothing to show!!');
  });
  function showText(value){
    let showMessage = document.getElementsByTagName("p")[0];
    showMessage.innerText = 'Hello ' + value  + '!! 🧡🧡';
    showMessage.style.display = "block";
    fadeOut(showMessage);
}

function fadeOut(elm){
  let i = 10;
  let ref = setInterval(function(){
    if(i>=0){
      elm.style.opacity = i/10;
      i--;
    } else {
      clearInterval(ref);
      return;
    }
  }, 200);
}