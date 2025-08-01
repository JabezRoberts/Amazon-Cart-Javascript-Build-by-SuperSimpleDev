const xhr = new XMLHttpRequest(); // Creates a new http message or request to send to the backend

xhr.addEventListener('load', () => {
    console.log(xhr.response);
}); // load is the response we are waiting for after xhr.send

xhr.open('GET', 'https://supersimplebackend.dev/hello'); // now to setup the request
xhr.send(); // send the request
