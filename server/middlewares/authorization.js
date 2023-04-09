module.exports = (...role)=>{

    return (req,res,next)=>{

        const userRole = req.user.role 
        if(!userRole.includes(role)){
            return res.status(403)
            .json({
                status: '403 Forbidden',
                error: "user not authorized"
            })

        }
        next()

    }
   

}