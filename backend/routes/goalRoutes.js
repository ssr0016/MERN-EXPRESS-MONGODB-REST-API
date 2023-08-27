const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

//Make it short and clean
// router.get('/', getGoals)
// router.post('/', setGoal)
router.route('/').get(getGoals).post(setGoal)

//Make it short and clean
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router