"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for Video Entry. */
class Video {
    static async video_evalPost({username, title, videoid, link, watchit, category,  time, supplies, notes}){
        let entryVideo = await this.logVideo(videoid, title, link);
        let entryLike = await this.logLike(username, videoid, watchit, category, time, supplies, notes);
        
        return;
    }

    static async logVideo(videoid, title, link){
        const check = await db.query(
            `SELECT videoid
             FROM videodata
             WHERE videoid = $1`,
                [videoid],
        );
        const confirm = check.rows[0];
        if(!confirm){
            const result = await db.query(
                `INSERT INTO videodata
                    (videoid,
                    title,
                    ink)
                VALUES ($1, $2, $3)
                RETURNING  videoid, title, link`,
                    [
                        videoid,
                        title,
                        link
                    ],
            );
            const entry = result.rows[0];

            return entry;
        }
        return;
    }

    static async logDislike({username, videoid, title, link, likeorhate}){
        let res = await this.logVideo(videoid, title, link);
        const checkDislike = await db.query(
            `SELECT username, nokeep_id
             FROM nokeep
             WHERE username = $1 AND nokeep_id = $2`,
                [username, videoid],
        );
        const checkDislikeConfirm = checkDislike.rows[0] 
        if(!checkDislikeConfirm){
            const result = await db.query(
                `INSERT INTO nokeep
                    (username, 
                    nokeep_id,
                    likeorhate)
                 VALUES ($1, $2, $3)
                 RETURNING nokeep_id, likeorhate`,
                    [
                        username,
                        videoid,
                        likeorhate
                    ],
            );
            const entry = result.rows[0];

            return entry;
        }
    }

    static async logLike(username, videoid, watchit, category, time, supplies, notes){
        const check = await db.query(
            `SELECT *
             FROM evaluation
             WHERE username = $1 AND video_id = $2`,
                [username,
                 videoid],
        );
        const checked = check.rows[0];

        if(!checked){
        const result = await db.query(
            `INSERT INTO evaluation
                (username,
                 video_id,
                 watchit,
                 category,
                 time,
                 supplies,
                 notes)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             RETURNING  username, video_id, watchit, category, time, supplies, notes`,
                [   username,
                    videoid,
                    watchit,
                    category,
                    time,
                    supplies,
                    notes
                ],
        );
        const entry = result.rows[0];

        return entry;
        }
    }

    static async historyPull ({category, username, time}){
        const filtered = await db.query(
            `SELECT link, video_id, watchit, supplies, notes
             FROM videodata
             INNER JOIN evaluation
                ON videoid = video_id
             WHERE username = $1 AND category = $2 AND time <= $3`,
             [username, category, time]);
        return filtered.rows;
    }
}

module.exports = Video;

