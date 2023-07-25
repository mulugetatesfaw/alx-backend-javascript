export default function getResponseFromAPI(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(`Error retrieving data from API: ${xhr.statusText}`));
      }
    };
    xhr.onerror = () => {
      reject(new Error('Network error occurred'));
    };
    xhr.send();
  });
}
