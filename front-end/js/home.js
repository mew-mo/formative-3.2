(function(){
  console.log('home.js connected...');

  // Bootstrap Poppers Initialize
  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  $.ajax({
    url: `http://localhost:3000/allItems`,
    type: 'GET',
    datatype: 'json',
    success: function(portfolioItemsDB){

      var pImages = []; //portrait images
      var lImages = []; //landscape images
      var keywords = ['MINIMAL', 'CLEAN', 'Going Beyond Normal.', 'BOLD', 'UNIQUE', 'Usability x Creativity' ];

        for (var i = 0; i < portfolioItemsDB.length; i++) {
          if (portfolioItemsDB[i].special == true) {
            console.log('OoOo a special image!');
            document.querySelector('.portfolio-start-cont').innerHTML +=
            `<img src="${portfolioItemsDB[i].imgUrl}" alt="${portfolioItemsDB[i].author} - ${portfolioItemsDB[i].name}" class="special">`;
          } else if (portfolioItemsDB[i].orientation == "portrait"){
            pImages.push(portfolioItemsDB[i]);
          } else {
            lImages.push(portfolioItemsDB[i]);
          }
        }; //portfolioItemsDB loop ends

      makeElements(); //Making divs and images through a layout code order
      function makeElements() {
        layoutOrder = [
          'hl','pr',
          'pl','hr',
          'l',
          'l',
          'hw',
          'l',
          'l',
          'hl','pr',
          'pl','hr',
          'l',
          'l',
          'hw',
          'l',
          'l'];
        for (var i = 0, pCounter = 0, lCounter = 0, kCounter = 0; i < layoutOrder.length; i++) {
          if (layoutOrder[i] == 'hl') {
            document.querySelector('.portfolio-items-cont').innerHTML +=
            `<div class="heading h-left">${keywords[kCounter]}</div>`;
            kCounter++;
          } else if (layoutOrder[i] == 'hr') {
            document.querySelector('.portfolio-items-cont').innerHTML +=
            `<div class="heading h-right">${keywords[kCounter]}</div>`;
            kCounter++;
          } else if (layoutOrder[i] == 'pr'){
            document.querySelector('.portfolio-items-cont').innerHTML +=
            `<div class="portrait-right">
              <img src="${pImages[pCounter].imgUrl}" alt="${pImages[pCounter].author} - ${pImages[pCounter].name}">
            </div>`;
            pCounter++;
          } else if (layoutOrder[i] == 'pl'){
            document.querySelector('.portfolio-items-cont').innerHTML +=
            `<div class="portrait-left">
              <img src="${pImages[pCounter].imgUrl}" alt="${pImages[pCounter].author} - ${pImages[pCounter].name}">
            </div>`;
            pCounter++;
          } else if (layoutOrder[i] == 'hw'){
            document.querySelector('.portfolio-items-cont').innerHTML +=
            `<div class="heading h-full-width">${keywords[kCounter]}</div>`;
            kCounter++;
          } else if (layoutOrder[i] == 'l'){
            document.querySelector('.portfolio-items-cont').innerHTML +=
            `<div class="landscape">
              <img src="${lImages[lCounter].imgUrl}" alt="${lImages[lCounter].author} - ${lImages[lCounter].name}">
            </div>`;
            lCounter++;
          } else {
            console.log('Code Invalid : Valid Codes - hl, hr, hw, pl, pr, l');
          };
        }; //layoutOrder loop ends
      }; //makeElements function ends

      // i was going to make some poppers
      document.addEventListener("DOMContentLoaded", function(event){
        console.log(document.querySelectorAll('.landscapes'));
      });
    }, //success ends
    error:function(){
      console.log('NOT WORKING');
    }
  }); //ajax ends
}()); //iife ends
