(function(){
  console.log('working');
  var portfolioItemsCont = document.querySelector('.portfolio-items-cont');

  // my config is not working so I have to input manually
  $.ajax({
    url: `http://localhost:3000/allItems`,
    type: 'GET',
    datatype: 'json',
    success: function(portfolioItemsDB){
      console.log(portfolioItemsDB);
      for (var i = 0; i < portfolioItemsDB.length; i++) {

        // Creating the div with the layout attributes
        var newItem = document.createElement("div");
        newItem.setAttribute('class', `portrait-left img-${i}`);
        // query selector to the alphabet chart when functioning!!
        document.querySelector('#lastTitle').appendChild(newItem);

        // Adding the imgs in the div
        var addImage = document.createElement("img");
        addImage.setAttribute('src', `${portfolioItemsDB[i].imageUrl}`);
        addImage.setAttribute('alt', `${portfolioItemsDB[i].author} - ${portfolioItemsDB[i].name}'`)
        document.querySelector(`.img-${i}`).appendChild(addImage);

        // future note - add a portrait/landscape to the portfolio images to check if they are portrait or landscape
        //they will alternate I guess???

      } //loop ends
    }, //success ends
    error:function(){
      console.log('NOT WORKING');
    }
  }); //ajax ends
}())
//iife ends
