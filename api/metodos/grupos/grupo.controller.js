const { subscribe,getSubscriptionsOfUser } = require("./grupo.service");
module.exports = {

    subscribe: (req, res) => {
        const body = req.body;
        subscribe(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },

    getSubscriptionsOfUser: (req, res) => {
        const idUsuarios = req.params.idUsuarios;
        getSubscriptionsOfUser(idUsuarios, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    }

   
}

