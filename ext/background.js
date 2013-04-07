chrome.extension.onMessage.addListener(function(msg, sender, sendResponse){
  console.log(msg);
  if (msg.mes === "ZZZ") {
    console.log(msg);
  } else if (msg.mes === "ZZZ") {
    console.log(msg);
  }
  return true;
});