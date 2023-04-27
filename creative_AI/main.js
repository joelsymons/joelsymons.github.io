const solveBtn = document.querySelector('#solve-btn');
const highlightBtn = document.querySelector('#highlight-btn');
const writeBtn = document.querySelector('#write-btn');
const container = document.querySelector('.container');
let currentTextArea;



solveBtn.addEventListener('click', () => {
  currentTextArea = createTextArea('Explain your problem here...');
  container.appendChild(currentTextArea);
});

highlightBtn.addEventListener('click', () => {
  currentTextArea = createTextArea('Copy your text here...');
  container.appendChild(currentTextArea);
});

writeBtn.addEventListener('click', () => {
  currentTextArea = createTextArea('Enter your topic here...');
  container.appendChild(currentTextArea);
});

function createTextArea(placeholderText) {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('placeholder', placeholderText);
  textArea.setAttribute('class', 'input-area');
  
  const sendBtn = document.createElement('button');
  sendBtn.innerText = 'Send';
  sendBtn.setAttribute('class', 'send-btn');

  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'input-wrapper');
  wrapper.appendChild(textArea);
  wrapper.appendChild(sendBtn);

  if (currentTextArea) {
    container.replaceChild(wrapper, currentTextArea);
  }

  return wrapper;
}
