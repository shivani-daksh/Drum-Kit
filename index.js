// document.querySelector("button").addEventListener("click" , handleClick);
//we do not add function here handleClick();
// bcz this will make the function run as soon as page loads , but we only want the function to work when we cick.

// so here we are passing the function as an input instead of calling it so that it can be called at a later time.

//  or you can add an anonimous function (which do not have a name) instead of that function input and it will do the same thing
// function handleClick(){
//   alert("I got Clicked!")
// }

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click" , function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    
  });
}

document.addEventListener("keydown" , function(event){
  makeSound(event.key);
});
    

  function makeSound(key){
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

          case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var audioj = new Audio("sounds/snare.mp3");
        audioj.play();
        break;


        case "k":
          var audiok = new Audio("sounds/crash.mp3");
          audiok.play();
          break;

          case "l":
            var audiol = new Audio("sounds/kick-bass.mp3");
            audiol.play();
            break;


      default: console.log(buttonInnerHTML);
        
    
  
}
  }


    
  // function handleClick(){
  //   alert("I got Clicked!")
  // }

