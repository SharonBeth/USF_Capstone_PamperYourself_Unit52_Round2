import axios from "axios";

//API Class for YouTube Video get/post/patch/delete.

//CapstoneCleanUp = Where is Figure out how to fix: process.env.REACT_APP_BASE_URL part of this code.

const BASE_URL_YOUTUBE = process.env.REACT_APP_BASE_URL || "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest";
const api_key = "AIzaSyDmgcCr-ZWbpLoSrzsEMTOD9Mup6ToyR88";

class YouTubeApi{
    static token;

    static async request(endpoint, data= {}, method="get"){
        console.debug("YouTubeApi Call:", endpoint, data, method);

        const url_YouTube = `${BASE_URL_YOUTUBE}/${endpoint}`;
    }

    static async loadClient() {
        console.log("load Client")
        gapi.client.setApiKey(api_key);
        // gapi.client.setApiKey(api_key);
        return gapi.client.load(BASE_URL_YOUTUBE)
            .then(function() { console.log("GAPI client loaded for API"); },
                  function(err) { console.error("Error loading GAPI client for API", err); });
      }
      // Make sure the client is loaded before calling this method.
    static async execute(endpoint, data, method) {
      console.log("execute")
      console.log("testing")
      console.log(data.category)
      let qAll = (`${data.category} ${data.q} -${data.qExclude} -${data.reject}`)
      console.log(qAll)
        // return gapi.client.youtube.search.list({
        return gapi.client.youtube.search.list({
          "part": [
            "snippet",
            "id"
          ],
          "q": qAll, 
          "regionCode": "US",
          "type": [
            "video"
          ],
          "videoDuration": "medium"
        })
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response.result.items);
                    return response;
                  },
                  function(error) { console.error("Execute error", error); });
    }
    //This one pulls one video based on clicking to go to the next page using the videoid
    static async onevideo(videoid) {
      return gapi.client.youtube.search.list({
        "part": [
          "snippet",
          "id"
        ],
        "q": "test", 
        "regionCode": "US",
        "type": [
          "video"
        ],
        "videoDuration": "medium"
      })
          .then(function(response) {
                  // Handle the results here (response.result has the parsed body).
                  console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
    }

}

export default YouTubeApi;

