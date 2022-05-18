function handleTypeWriter({ startFrom, textTowrite, speed, selector }) {
    if (startFrom <= textTowrite.length) {
      setTimeout(() => {
        document.querySelector(selector).innerHTML += textTowrite.charAt(
          startFrom++
        );
        handleTypeWriter({ startFrom, textTowrite, speed, selector });
      }, speed);
    } else {
      document.querySelector(selector).innerHTML = "";
  
      handleTypeWriter({ startFrom: 0, textTowrite, speed, selector });
    }
  }
  handleTypeWriter({
    startFrom: 0,
    textTowrite: "VISUDH AJIVAM",
    speed: 200,
    selector: "#welcome_text",
  });
  
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }