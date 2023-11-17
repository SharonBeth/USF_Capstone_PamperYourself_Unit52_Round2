import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

//Calling the backend.

class DBapi {
    static token;

    static async request(endpoint, data = {}, method = "get") {

        const url = `${BACKEND_URL}/${endpoint}`;
        const header = {Authorization: `Bearer ${DBapi.token}`};
        const params = (method === "get")
            ? data
            : {};
        try{
            return (await axios({url, method, data, params, header})).data;
        }catch(err){
            console.error("DBapi Error:", err.response)
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async register(data){
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
    }

    static async login(data) {
        console.log(data.username)
        let res = await this.request(`auth/token`, data, "post")
        return res.token;
    }

    static async getUser(username){
        let res = await this.request(`users/${username}`, {}, "get")
        return res.user;
    }

    static async video_evalProfile(data){
        let res = await this.request("videos/", data, "post");
        // Change: Not sure if line of code below is correct.
        return res.video;
    }

    static async logVideo (data){
        let res = await this.request("videos/logvideo", data, "post");
        return res;
    }

    static async logLike (data){
        let res = await this.request("videos/loglike", data, "post");
        return res;
    }

    static async logDislike (data){
        let res = await this.request("videos/logdislike", data, "post");
        return res;
    }

    static async video_HistoryPull (username ){
        let res = await this.request("videos/historypull", username, "get");
        return res.entry;
    }

    static async filterHistoryLinks (data){
        let res = await this.request("videos/historypullfiltered", data, "post");
        return res.pull;
    }
}

DBapi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default DBapi;