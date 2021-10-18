function myLoop() { //  create a loop function
  setTimeout(function () { //  call a 3s setTimeout when the loop is called
      window.scrollTo(0,document.body.scrollHeight);     
      if (document.getElementsByClassName("xf-paginator__item js-paginator__btn _active _last")[0] == null) { //  if the counter < 10, call the loop function
          myLoop(); //  ..  again which will trigger another 
      } //  ..  setTimeout
      else if (priceDone == false){
        priceDone = true;
        console.log("Done")
      }else {
        console.log("End")
      }
  }, 2500)
}
//Attempt to get the element using document.getElementById
//var element = document.getElementsByClassName("button button--primary catalog-grid-container__pagination-button")[0];

//If it isn't "undefined" and it isn't "null", then it exists.
var priceDone = false;

myLoop();