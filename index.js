// Remove the main element with id 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// h1 element an id of 'victory'
newHeader.id = 'victory';

// Set the text content of the h1 element
newHeader.textContent = 'ALEXANDER is the champion';

// Append the h1 element to the body
document.body.append(newHeader);
