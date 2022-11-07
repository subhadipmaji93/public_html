let myButton = document.getElementsByClassName('myButton')[0];
let clrButton = document.getElementsByClassName('clr')[0];
myButton.addEventListener("click", function(){
    let value = document.getElementsByTagName('input')[0].value || document.cookie.split("=")[1];
    if(value){
      showText(value);
      document.cookie = `value=${value};SameSite=lax`;
      return;
    } 
    alert('nothing to show!!');
});

clrButton.addEventListener("click", function(){
  document.cookie += document.cookie + '; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
});

function showText(value){
  let showMessage = document.getElementsByTagName("p")[0];
  showMessage.innerText = 'Hello ' + value  + '!! 🧡🧡';
  showMessage.style.display = "block";
  const animation = new fadeInAnimation(showMessage);
  animation.start(1000);
}
/*
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
*/
function fadeInAnimation(node){
  this.node = node;

  this.start = function(duration){
    this.duration = duration;
    if(this.duration === 0){
      // Jump to end immediately
      this.onProgress(1);
    } else {
      this.onProgress(0);
       // Start animating
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(()=>this.onFrame());
    }
  }

  this.onFrame = function(){
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if(progress < 1){
      // We will have more frames to paint
      this.frameId = requestAnimationFrame(()=>this.onFrame());
    } else {
      this.stop();
    }
  }

  this.onProgress = function(progress){
    this.node.style.opacity = progress;
  }

  this.stop = function(){
    cancelAnimationFrame(this.frameId);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}

