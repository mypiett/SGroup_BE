import Joi from "joi";

class ValidateMiddleware {
    async validateId(req, res, next) {
        try {
            
            const schema = Joi.object({
                id: Joi.string().length(24).hex().required() 
            });

            await schema.validateAsync(req.params, { abortEarly: false });

            next();
        } catch (err) {
            res.status(400).json({
                success: false,
                message: "Invalid ID"
            });
        }
    }
}

export default new ValidateMiddleware();
