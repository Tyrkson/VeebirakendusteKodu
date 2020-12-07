const UserModel = require('../models/UserModel');
const jwt = require('../library/jwt');


module.exports = (request, response, next) => {

    // This is the place where you will need to implement authorization
    /*
        Pass access token in the Authorization header and verify
        it here using 'jsonwebtoken' dependency. Then set request.currentUser as
        decoded user from access token.
    */

    //console.log("Ho: " + jwt.verifyAccessToken(request.headers.authorization.split(" ")[1]).user);
    if (request.headers.authorization) {
        //For some reason it saves some kind of a 'bearer' in to the autohorization, so I just ignore it
        let result = jwt.verifyAccessToken(request.headers.authorization.split(" ")[1]);
        if(result != false){
          UserModel.getById(result.user, (user) => {
              request.currentUser = user;
              next();
          });
        }
    } else {
        // if there is no authorization header

        return response.status(403).json({
            message: 'Invalid token'
        });
    }
};
