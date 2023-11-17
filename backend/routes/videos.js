"use strict";

const express = require("express");

const { BadRequestError } = require("../expressError");
const Video = require("../models/video");
const router = new express.Router();

router.post("/", async function(req, res, next){
    try{
        const entry = await Video.video_evalPost(req.body);
        return res.status(201).json({entry})
    }catch(err){
        return next(err);
    }
});

router.post("/logvideo", async function(req, res, next){
    try{
        const entry = await Video.logVideo(req.body);
        return res.status(201).json({entry})
    }catch(err){
        return next(err);
    }
});

router.post("/loglike", async function(req, res, next){
    try{
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
        const entry = await Video.logDislike(req.body);
        return res.status(201).json({entry})
    }catch(err){
        return next(err);
    }
});

router.post("/historypullfiltered", async function(req, res, next){
    try{
        const pull = await Video.historyPull(req.body);
        return res.status(201).json({pull})
    }catch(err){
        return next(err);
    }
});

module.exports = router;