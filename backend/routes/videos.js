"use strict";

/** Routes for companies. */

// const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
// const { ensureAdmin } = require("../middleware/auth");
const Video = require("../models/video");

// const companyNewSchema = require("../schemas/companyNew.json");
// const companyUpdateSchema = require("../schemas/companyUpdate.json");
// const companySearchSchema = require("../schemas/companySearch.json");

const router = new express.Router();

router.post("/", async function(req, res, next){
    try{
        console.log("At routes/videos")
        const entry = await Video.video_evalPost(req.body);
        return res.status(201).json({entry})
    }catch(err){
        return next(err);
    }
});

router.post("/logvideo", async function(req, res, next){
    try{
        console.log("At routes/videos/logvideo")
        const entry = await Video.logVideo(req.body);
        return res.status(201).json({entry})
    }catch(err){
        return next(err);
    }
});

router.post("/loglike", async function(req, res, next){
    try{
        console.log("At routes/videos/loglike")
        const entry = await Video.logVideo(req.body);
        if(entry){
            const like = await Video.logLike(req.body);
            return res.status(201).json({like})
        }
    }catch(err){
        return next(err);
    }
});

router.post("/logdislike", async function(req, res, next){
    try{
        console.log("At routes/videos/logdislike")
        const entry = await Video.logDislike(req.body);
        return res.status(201).json({entry})
    }catch(err){
        return next(err);
    }
});

router.post("/historypullfiltered", async function(req, res, next){
    try{
        console.log("At routes/videos/historypullfiltered", req.body, "testing for req.body")
        const pull = await Video.historyPull(req.body);
        console.log(pull, "pull from historypullfiltered in routes/videos.js")
        return res.status(201).json({pull})
    }catch(err){
        return next(err);
    }
});

module.exports = router;