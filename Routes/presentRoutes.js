let Routes = require('express')
let router = new Routes()
let presentController = require('../Controller/Present')

router.get('/get_present', presentController.getPresent)
router.get('/check_present/:id', presentController.checkPresent)
router.post('/add_present', presentController.addPresent)
router.delete('/delete_present/:id', presentController.deletePresent)
router.get('/get_all_present', presentController.getAllPresent)


module.exports = router