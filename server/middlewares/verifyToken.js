const jwt = require("jsonwebtoken")
const { promisify } = require("util")

module.exports = async function(req,res,next){

    try {

        // 01. check if token exits

        const token = req.headers?.authorization?.split(" ")?.[1]

        // 02. if not token send response

        if (!token) {
            return res.status(401).json({
                status :"failed",
                error :"you Must be logged in First"
            })
            
        }

        const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        res.status(401).json({
            status :"failed",
            error :"invalid token you must logged in first"
        })
    }

}