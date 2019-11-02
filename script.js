'use strict';

function getDogImage(breed) {
  const url =`https://dog.ceo/api/breed/${breed}/images/random`
  fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
    })
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  // for(let i=0; i<responseJson.message.length; i++)
  $('.results').html(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const breed=$('.number').val();
    getDogImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


// 'use strict';

// function displayResults(responseJson) {
//   console.log(responseJson);
//   //replace the existing image with the new one
//   $('.dog-image').replaceWith(
//     `<img src="${responseJson.message}" class="dog-image">`
//   )
//   //display the results section
//   $('.result').removeClass('hidden');
// }

// function getDogImage() {
//   fetch('https://dog.ceo/api/breeds/image/random/3')
//     .then(response => response.json())
//     .then(responseJson => 
//       displayResults(responseJson))
//     .catch(error => alert('Something went wrong. Try again later.'));
// }

// function watchForm() {
//   $('form').submit(event => {
//     event.preventDefault();
//     getDogImage();
//   });
// }

// $(function() {
//   console.log('App loaded! Waiting for submit!');
//   watchForm();
// });