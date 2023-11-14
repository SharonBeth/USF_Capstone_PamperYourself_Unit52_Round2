"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for Video Entry. */
console.log("inside Video Class")
class Video {
    //This function is receiving the arguments as one object, parsed out. This is why htere are {} brackets. Other functions are receiving only individual information which is why it was not working before.
    static async video_evalPost({username, title, videoid, link, watchit, category,  time, supplies, notes}){
        let entryVideo = await this.logVideo(videoid, title, link);
        console.log( entryVideo, "after entryVideo ")
        let entryLike = await this.logLike(username, videoid, watchit, category, time, supplies, notes);
        console.log("after database entry")
        
        return;
    }

    static async logVideo(videoid, title, link){
        console.log(videoid, "videoid in backend/Models/Video/logVideo")
        console.log( "Video.logVideo-backend, 1st line of function ")
        const check = await db.query(
            `SELECT videoid
             FROM videodata
             WHERE videoid = $1`,
             [videoid],
        );
        console.log(check, "checking after Select ")
        const confirm = check.rows[0];
        console.log(videoid, "videoid")
        if(!confirm){
        const result = await db.query(
            `INSERT INTO videodata
            (videoid,
             title,
             link)
            VALUES ($1, $2, $3)
            RETURNING  videoid, title, link`,
            [
                videoid,
                title,
                link
            ],
            );
        console.log("after database entry @ logVideo")
        const entry = result.rows[0];

        return entry;
        }
        console.log("confirm is truthy whichmeans there is already a videoid")
        return;
    }

    static async logDislike({username, videoid, title, link, likeorhate}){
        console.log("videoid @ models/Video.logDislike", videoid)
        console.log("at logDislike start of function")
        let res = await this.logVideo(videoid, title, link);
        console.log("it actually logged it")
        const checkDislike = await db.query(
            `SELECT username, nokeep_id
             FROM nokeep
             WHERE username = $1 AND nokeep_id = $2`,
             [username, videoid],
        );
        const checkDislikeConfirm = checkDislike.rows[0] 
        console.log( "eval_id in Video at the ")
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
            console.log("after database entry @ logVideo")
            const entry = result.rows[0];

            return entry;
        }
    }
    static async logLike(username, videoid, watchit, category, time, supplies, notes){
        console.log( "eval_id in Video at the ")
        const check = await db.query(
            `SELECT *
             FROM evaluation
             WHERE username = $1 AND video_id = $2`,
             [username,
              videoid],
        );
        console.log(check, "checking after logLike, for seeing if it is in there ")
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
            console.log("after database entry")
            const entry = result.rows[0];

            return entry;
        }
    }

    static async historyPull ({category, username, time}){
        console.log("Backend/Models/Video 1st Link in function", username, category)
        const filtered = await db.query(
            `SELECT link, video_id, watchit, supplies, notes
             FROM videodata
             INNER JOIN evaluation
                ON videoid = video_id
             WHERE username = $1 AND category = $2 AND time <= $3`,
             [username, category, time]);
        console.log("Backend/Models/Video after SQL-call, retesting for updates")
        // filtered.list = filtered.rows.map(a=>a.link, a.video_id, a.watchit, a.supplies, a.notes)
        console.log(filtered.rows)
        return filtered.rows;

    }

    // static async historyPull(username){
    //     console.log("Backend/Models/Video/Video.historyPull, 1st Line")
    //     const pull = await db.query(
    //         `SELECT link
    //          FROM videodata
    //          INNER JOIN users 
    //             ON username = username
    //          WHERE username = $1`,
    //          [username],
    //     );
    //     pull.list = pull.rows.map(a=>a.link)
    //     return pull;
    // }

    // static async video_evalPost({videoid, link, watchit, category,  time, supplies, notes, likeorhate}){
    //     console.log( "eval_id in Video at the ")
    //     const result = await db.query(
    //         `INSERT INTO evaluation
    //         (video_id,
    //          watchit,
    //          category,
    //          time,
    //          supplies,
    //          notes)
    //         VALUES ($1, $2, $3, $4, $5, $6)
    //         RETURNING  video_id, watchit, category, time, supplies, notes`,
    //         [
    //             videoid,
    //             watchit,
    //             category,
    //             time,
    //             supplies,
    //             notes
    //         ],
    //         );
    //     console.log("after database entry")
    //     const entry = result.rows[0];

    //     return entry;
    // }
}

module.exports = Video;

