// 1. Load the JavaScript client library.
gapi.load('client', init);

async function init() {
  // 2. Initialize the JavaScript client library.
  await gapi.client.init({
    discoveryDocs: ['https://discovery.googleapis.com/$discovery/rest']
  });
//   start();
}