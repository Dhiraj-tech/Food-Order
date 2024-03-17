import { Category } from "../../models/index.js"

class ListController {

    categories = async(req,res,next) => {
        try{
            const categories = await Category.find({status: true}).exec()

            res.json(categories)

        }catch(e){
            console.log(e)
            next({
                message: 'Problem while processing request',
                status: 400
            })
        }
    }

    categoryById = async(req,res,next) => {
        try{
            const category = await Category.findOne({status: true, _id: req.params.id }).exec()

            if(category){
                res.json(category)
            }else{
                next({
                    message: 'Category not found', 
                    status: 404})
            }


        }catch(e){
            console.log(e)
            next({
                message: 'Problem while processing request',
                status: 400
            })
        }
    }

}

export default new ListController