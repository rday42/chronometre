let ms = 0;
let s = 0;
let m = 0;
let h = 0;

function chronoTimer(){  
   ms++;
   if(ms === 10){
      s = ++s;
      ms = 0;
   }
   if(s === 60){
      m = ++m;
      s = 0;
   } 
   if(m == 60){
      h = ++h;
      m = 0;
   }

   document.getElementById("chrono").innerHTML = h + "h: " + m + "min: " + s + "s: " + ms + "ms";  
}
  
  
function startTimer(){      
   //let t = setInterval(chronoTimer,100);
   t = setInterval(chronoTimer,100);
   startButton.disabled = true;        // Désactiver le bouton start
}

function stopTimer() {   
   clearInterval(t);                   // Arrêter le timer t qu'on a déclenché
   startButton.disabled = false;       // Réactiver le bouton start
   //console.log(`stop chronomètre, starTimer =  ${starTimerCondition}`);
}

async function resetTimer() { 
   stopTimer()
   ms = 0;
   s = 0;
   m = 0;
   h = 0;

   document.getElementById("chrono").innerHTML = "0h: 0min: 0s: 0ms";
   //document.getElementById("chrono").innerHTML = h + "h: " + m + "min: " + s + "s: " + ms + "ms";
}
