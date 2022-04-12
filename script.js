const imgRef = document.getElementById('target.image')

const url = 'https://dog.ceo/api/breeds/image/random';

const options = {
  method: 'GET'
}

const handleResponse = async (response) => {
  const data = await response.json();
  console.log(data);
  const { message } = data;
  imgRef.src = message;
}

const handleError = () => {
  console.log('ERROR');
}

const request = fetch(url, options);
request.then(handleResponse);
request.catch(handleError);
