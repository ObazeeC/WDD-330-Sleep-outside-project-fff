// Wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// Retrieve data from localStorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Save data to localStorage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Set listeners for both touchend and click
export function setClick(selector, callback) {
  const element = qs(selector);

  element.addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });

  element.addEventListener('click', callback);
}

// Get URL query parameter ?product=xxxx
export function getParam() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('product');
}

// Render list of items using a template function
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = 'afterbegin',
  clear = false
) {
  const htmlStrings = list.map(templateFn);

  if (clear) {
    parentElement.innerHTML = '';
  }

  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}
