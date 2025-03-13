const express =require('express')
const router =express.Router()

router.get('/', (req,res) => {
    const {name} = req.params
res.render('greet', {title: "Greet", name: "Victory"})
})
module.exports  = router
