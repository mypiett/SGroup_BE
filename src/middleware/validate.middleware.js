import Joi from "joi";

class ValidateMiddleware{
    async validateId(req,res,next){
        try{
            const shema = Joi.object({
                id: Joi.number().required()
            })

            await shema.validateAsync(req.params,{abortEarly:false});
            
            next();
        } catch (err){
            res.status(400).json({
                success: false,
                message: "Invalid ID"
            })
        }
    }
}

export default new ValidateMiddleware();