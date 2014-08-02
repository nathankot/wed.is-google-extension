var loaded = false;

chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'WEDIS_OPEN' }, function(response) {
      if (!response) {
        chrome.tabs.executeScript(null, { file: "bookmarklet.js" });
      }
    });
  });

});

