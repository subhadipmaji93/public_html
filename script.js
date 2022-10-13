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
}