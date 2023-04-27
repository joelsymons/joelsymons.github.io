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
  sendBtn.addEventListener('click', async () => {
    const prompt = textArea.value;
    if (prompt) {
      const result = await callOpenAI(prompt);
      const outputArea = createTextArea('Output:');
      const outputText = document.createElement('p');
      outputText.innerText = result;
      outputArea.appendChild(outputText);
      container.appendChild(outputArea);
    }
  });

  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'input-wrapper');
  wrapper.appendChild(textArea);
  wrapper.appendChild(sendBtn);

  if (currentTextArea) {
    container.replaceChild(wrapper, currentTextArea);
  }

  return wrapper;
}

async function callOpenAI(prompt) {
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 60,
      n: 1,
      stop: ['\n']
    })
  });
  const data = await response.json();
  return data.choices[0].text;
}
