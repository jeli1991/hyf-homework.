const apiUrl = 'https://website-screenshot6.p.rapidapi.com'; 
const crudcrudUrl = 'https://crudcrud.com/api/3a35969637ce44f39102d0523902a7e1';
const apiKey = '08b2e4a664msh162c459a452cb14p1e70a3jsnd054693f2b71';

const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');
const saveBtn = document.getElementById('saveBtn');
const retrieveBtn = document.getElementById('retrieveBtn');
const screenshotsDiv = document.getElementById('screenshots');

// Generate a screenshot 
generateBtn.addEventListener('click', async () => {
  const url = urlInput.value;
  const params = new URLSearchParams({
    url: url,
    width: '1920',
    height: '1080',
    fullscreen: 'true'
  });
  const response = await fetch(`${apiUrl}/screenshot?${params}`, {
    headers: {
      'X-RapidAPI-Key': apiKey
    }
  });
  const result = await response.json();
  
  // Display the  screenshot
  const screenshotImg = document.createElement('img');
  screenshotImg.src = result.screenshot;
  screenshotsDiv.appendChild(screenshotImg);
});

// Save the  screenshot and URL
saveBtn.addEventListener('click', async () => {
  const url = urlInput.value;
  const screenshot = screenshotsDiv.lastChild.src;

  const response = await fetch(`${crudcrudUrl}/screenshots`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url, screenshot })
  });
  
 
});

// Retrieve saved screenshots
retrieveBtn.addEventListener('click', async () => {
  const response = await fetch(`${crudcrudUrl}/screenshots`);
  const screenshots = await response.json();
  
  // Display the retrieved screenshots
  screenshotsDiv.innerHTML = '';
  screenshots.forEach((screenshot) => {
    const screenshotImg = document.createElement('img');
    screenshotImg.src = screenshot.screenshot;
    screenshotsDiv.appendChild(screenshotImg);
  });
});
