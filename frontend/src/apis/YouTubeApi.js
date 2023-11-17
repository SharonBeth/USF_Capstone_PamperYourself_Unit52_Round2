import axios from "axios";

//API Class for YouTube Videos.

const BASE_URL_YOUTUBE = process.env.REACT_APP_BASE_URL || "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest";
const api_key = "AIzaSyDmgcCr-ZWbpLoSrzsEMTOD9Mup6ToyR88";

class YouTubeApi{
    static token;

    static async request(endpoint, data= {}, method="get"){
        const url_YouTube = `${BASE_URL_YOUTUBE}/${endpoint}`;
    }

    static async loadClient() {
        gapi.client.setApiKey(api_key);
        return gapi.client.load(BASE_URL_YOUTUBE)
            .then(function() { console.log("GAPI client loaded for API"); },
                  function(err) { console.error("Error loading GAPI client for API", err); });
    }

    static async execute(endpoint, data, method) {
      let qAll = (`${data.category} ${data.q} -${data.qExclude} -${data.reject}`)
      console.log(qAll)
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
                return response;
                },
                function(error) { console.error("Execute error", error); });
    }
}

export default YouTubeApi;

