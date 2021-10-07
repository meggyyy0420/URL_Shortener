const express = require('express')
const router = express.Router()

const Url = require('../../models/url')
const generateUrl = require('../../generateUrl')

router.get('/', (req, res) => {
  res.render('index')
})
router.post('/', (req, res) => {
  const inputUrl = req.body.inputUrl
  // 從inputUrl判斷資料庫有沒有該筆資料
  return Url.findOne({ inputUrl })
    .lean()
    .then((url) => {
      if (!url) {
        const newOutputUrl = generateUrl()
        Url.create({ inputUrl, outputUrl: newOutputUrl })
          .then(() => res.render('output', { inputUrl, newOutputUrl }))
      } else {
        res.render('output', { url })
      }
    })
    .catch(error => console.log(error))
})

// 使用者直接在瀏覽器的網址列，輸入你提供的短網址
router.get('/:copyLink', (req, res) => {
  const copyLink = req.params.copyLink
  return Url.findOne({ outputUrl: { $regex: copyLink } })
    .lean()
    .then((url) => res.redirect(url.inputUrl))
    .catch(error => console.log(error))
})

module.exports = router
