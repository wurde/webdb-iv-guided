'use strict'

/**
 * Dependencies
 */

const express = require('express')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /tracks
 */

router.get('/', (req, res) => {
 res.status(200).json({ hello: 'World!' })
})

/**
 * Export router
 */

module.exports = router
