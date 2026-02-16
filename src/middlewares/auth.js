const adminAuth = (req, res, next) => {
    console.log("Admin authentication middleware");
    const token = "abc";
    const isAdminAuthorized = token === "abcnj";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized: Admin access required");
    } else {
        next();
    }
};
module.exports = {adminAuth};