// $.getJSON(url1, (error, response) => {})

const handleResponse1 = (response1) => {
  console.log(response1);
  $.getJSON(url2, handleResponse2, handleError2);
};

const handleError1 = (error1) => {
  console.error(error1);
};

const handleResponse2 = (response2) => {
  console.log(response2);
  $.getJSON(url3, handleResponse3, handleError3);
};

const handleError2 = (error2) => {
  console.log(error2);
};

const handleResponse3 = (response3) => {
  console.log(response3);
};

const handleError3 = (error3) => {
  console.log(error3);
};

$.getJSON(url1, handleResponse1, handleError1);

console.log("hello");

$.getJSON(url1)
  .then((response1) => {
    console.log(reponse1);
    return $.getJSON(url2);
  })
  .then((response2) => {
    console.log(response2);
    return $.getJSON(url3);
  })
  .then((response3) => {
    console.log(response3);
  })
  .catch((error1) => {
    console.error(error1);
  })
  .finally(() => {});

Promise.all([promise1, promise2])
  .then(([response1, response2]) => {})
  .catch();
Promise.allSettled([promise1, promise2]).then(([result1, result2]) => {});
Promise.race([promise1, promise2]).then((response1) => {});

const promise = new Promise((resolve, reject) => {
  // calculations...
  resolve(result);
  reject(error);
})
  .then((result) => {})
  .catch((error) => {});

const promise = new Promise((resolve, reject) => {
  $.getJSON(url, resolve, reject);
});

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
