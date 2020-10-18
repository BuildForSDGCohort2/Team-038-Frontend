module.exports = {
    api_base_url: "https://api-repify.herokuapp.com",
    authKey: process.env.AUTH_KEY || "secretKeyRef",
    userType: {
        personal: "Personal",
        company: "Company"
    }
};