const { fetchTopics, fetchArticles, fetchArticleById, fetchCommentsByArticleId, writeComment, updateArticleVote, fetchUsers } = require('../models/models.js')

const getTopics = (req, res) => { 
    fetchTopics().then(data => {
        res.status(200).send(data); 
    })
    .catch(err => {
        throw err;
    })
}

const getArticles = (req, res) => { 
    fetchArticles().then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        throw err;
    })
}

const getArticleById = (req, res) => {
    const id = Number(req.params.id);
    fetchArticleById(id).then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        throw err;
    })
}

const getCommentsByArticleId = (req, res) => {
    const article_id = Number(req.params.article_id);
    fetchCommentsByArticleId(article_id).then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        throw err;
    })
}

const postComment = (req, res) => {
    const article_id = Number(req.params.article_id);
    const comment = req.body;

    writeComment(article_id, comment).then(data => {
        res.status(201).send(data);
    })
    .catch(err => {
        throw err;
    })
}

const patchArticleVote = (req, res) => {
    const article_id = Number(req.params.article_id);
    const inc_votes = req.body.inc_votes;
    console.log(article_id, inc_votes, req.params);
    

    updateArticleVote(article_id, inc_votes).then(data => {
        // console.log(req.body);
        res.status(201).send(data);
    })
    .catch(err => {
        throw err;
    })
}

const getUsers = (req, res) => {
    fetchUsers().then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        throw err;
    })
}

module.exports = {
    getTopics, getArticles, getArticleById, getCommentsByArticleId, postComment, writeComment, patchArticleVote, getUsers
}