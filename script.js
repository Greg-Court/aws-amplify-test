document.getElementById('newDogButton').addEventListener('click', function () {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      let dogPicContainer = document.getElementById('dogPicContainer');
      dogPicContainer.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
    })
    .catch((error) => console.error('Error:', error));
});

// callAPI function that takes the base and exponent numbers as parameters
var callAPI = (base, exponent) => {
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append('Content-Type', 'application/json');
  // using built in JSON utility package turn object to string and store in a variable
  var raw = JSON.stringify({ base: base, exponent: exponent });
  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  // make API call with parameters and use promises to get response
  fetch(
    'https://p77k5bt18i.execute-api.us-east-1.amazonaws.com/dev',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => alert(JSON.parse(result).body))
    .catch((error) => console.log('error', error));
};
