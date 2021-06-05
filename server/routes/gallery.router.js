const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const queryText = `
    UPDATE "gallery" SET "likes" = ($1 +1) Where "id" = $2;
    `

    const values = [req.body.likes, req.params.id]

    pool.query(queryText, values).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {

    const queryText = `SELECT * FROM "gallery" ORDER BY "id";`

    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err)
        res.sendStatus(500);
    })

    
}); // END GET Route

//POST ROUTE
router.post('/', (req, res) => {
    //destructure keys out of req.body
    const {path, description} = req.body;


    const queryText = `
        INSERT INTO "gallery" (path, description)
        VALUES ($1, $2);
    `
    const values = [path, description];
    pool.query(queryText, values).then(result => {
        res.sendStatus(201)
    }).catch(err => {
        console.error(err)
        res.sendStatus(500);
    })

})
//DELETE ROUTE
router.delete('/:id', (req, res) => {
    
    const idToDelete = req.params.id
    const queryText = `DELETE FROM "gallery" WHERE "id" = $1;`
    pool.query(queryText, [idToDelete]).then(result => {
        
        res.sendStatus(204)
    }).catch(err => {
        console.error(err)
        res.sendStatus(500);
    })

})

module.exports = router;