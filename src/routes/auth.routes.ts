import { Router } from 'express'
import User from '../models/User'

const router = Router()
const bcrypt = require('bcrypt')
require('dotenv').config()

router.post('/signup', async (req, res) => {
  const { email, phoneNumber, password, displayName } = req.body

  try {
    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS))
    const hashedPassword = bcrypt.hashSync(password, salt)
    const user = new User({
      email: email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
      displayName: displayName
    })
    await user.save()
    await res.status(200).send()
  } catch (e) {
    await res.status(404).jsonp(e.message).send()
  }
})

router.get('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email: email })
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      res.status(200).send()
    } else {
      await res.status(404).type('json').json({
        message: 'Wrong password',
        status: 400
      });
    }
  } else {
    await res.status(404).type('json').json({
      message: 'Wrong email',
      status: 400
    })
  }
})

export default router
