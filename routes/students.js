const express = require('express')
const router = express.Router()
const { students } = require('../data')

router.get('/', async (req, res, next) => {
    try {

        res.json(students.map(student => student.name))
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const student = students.filter(student => student.id === Number(req.params.id) ) [0]
        res.json(student)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {

        res.json()
    } catch (err) {
        next(err)
    }
})

router.put('/', async (req, res, next) => {
    try {

        res.json()
    } catch (err) {
        next(err)
    }
})

router.delete('/', async (req, res, next) => {
    try {

        res.json()
    } catch (err) {
        next(err)
    }
})

module.exports = router
