for(var n=document.querySelectorAll("button.drum").length,i=0;i<n;i++)document.querySelectorAll("button.drum")[i].addEventListener("click",function(){var a=this.innerHTML;makeSound(a),showAnimation(a)});function makeSound(a){switch(a){case"w":new Audio("sounds/tom-1.mp3").play();break;case"a":new Audio("sounds/tom-2.mp3").play();break;case"s":new Audio("sounds/tom-3.mp3").play();break;case"d":new Audio("sounds/tom-4.mp3").play();break;case"j":new Audio("sounds/snare.mp3").play();break;case"k":new Audio("sounds/crash.mp3").play();break;case"l":new Audio("sounds/kick-bass.mp3").play();break;default:console.log(buttonInnerHTML)}}function showAnimation(a){var b=document.querySelector("."+a);b.classList.add("pressed"),setTimeout(function(){b.classList.remove("pressed")},100)}document.addEventListener("keydown",function(a){makeSound(a.key),showAnimation(a.key)})
