document.getElementById('newDogButton').addEventListener('click', function () {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      let dogPicContainer = document.getElementById('dogPicContainer');
      dogPicContainer.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
    })
    .catch((error) => console.error('Error:', error));
});
