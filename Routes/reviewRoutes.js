let Routes = require('express')
let router = new Routes()
let reviewController = require('../Controller/Review')

router.get('/get_review', reviewController.getAll)
router.post('/add_review', reviewController.addReview)
router.get('/check_leave_review', reviewController.checkLeave)


module.exports = router