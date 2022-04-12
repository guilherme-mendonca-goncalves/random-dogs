const imgRef = document.getElementById('target-image');
const lodingTextRef = document.getElementById('loading-text');
const buttonRef = document.getElementById('button-load');

let loading = false;

const url = 'https://dog.ceo/api/breeds/image/random';

const options = {
  method: 'GET'
}

const handleResponse = async (response) => {
  const data = await response.json();
  const { message } = data;
  imgRef.src = message;
  imgRef.onload = () => {
    loading = false;
    lodingTextRef.style = "opacity: 0";
    imgRef.style = "opacity: 1";
    buttonRef.disabled = false;
  }
}

const handleError = () => {
  loading = false;
  lodingTextRef.style = "opacity: 0";
  imgRef.style = "opacity: 1";
  buttonRef.disabled = false;
  console.log('ERROR');
}

const requestDog = () => {
  loading = true;
  imgRef.style = "opacity: 0";
  lodingTextRef.style = "opacity: 1";
  buttonRef.disabled = true;

  const request = fetch(url, options);
  request.then(handleResponse);
  request.catch(handleError);
}

const handleButtonClick = () => {
  if (loading) {
    return;
  }
  requestDog();
}

requestDog();
