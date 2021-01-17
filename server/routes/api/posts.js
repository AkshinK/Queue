const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get
router.get('/', async(req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


//add
router.post('/', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        number: req.body.number,
        email: req.body.email,
        queueNum: req.body.queueNum,
        createdAt : new Date()
    })
    res.status(201).send();
})


//delete    
router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send(); 
})


async function loadPostsCollection (){
    const uri = "mongodb+srv://bas0n:davud8888@cluster0.9ki93.mongodb.net/sample_analytics?retryWrites=true&w=majority";
    const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true });
    
    return client.db("sample_analytics").collection("posts");
}
module.exports = router;