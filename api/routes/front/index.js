import express from "express"
import productRoutes from "./products.routes.js"
import categoryRoutes from "./categories.routes.js"
import profileRoutes from "./profile.routes.js"
import { checkoutCtrl } from "../../controllers/front/index.js"
import { auth, customerUser } from "../../lib/function.js"
import contactRoutes from "./contact.routes.js"

const router = express.Router()

router.use('/product', productRoutes)

router.use('/category', categoryRoutes)

router.post('/checkout', auth, customerUser, checkoutCtrl.order)

router.use('/profile', auth, profileRoutes)

router.use('/contacts',contactRoutes)

export default router