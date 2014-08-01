var loaded = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!loaded) {
    loaded = true;
    chrome.tabs.executeScript(null, { file: "bookmarklet.js" });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'WEDIS_OPEN' });
    });
  }
});

