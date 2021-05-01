const rocket = require("../models").rocket;

module.exports = {

    async getAllRockets(req, res) {
        //         try {
        //             const rocketCollection = await rocket.findAll();
        //             res.status(201).send(rocketCollection);
        //         }
        //         catch (e) {
        //             console.log(e);
        //             res.status(500).send(e);
        //         }
      
// -------------- ou --------------
        
        rocket.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving rockets."
                });
            });
// -------------- ou --------------   

        // const rocketCollection = await rocket.findAll();
        // const allRockets = new Promise((resolve, reject) => {
        //     if (rocketCollection) {
        //         resolve()
        //     } else {
        //         reject()
        //     }
        // })
        // allRockets.then(() => {
        //     res.status(201).send(rocketCollection);
        // }).catch(() => {
        //     res.status(500).send();
        // })
    },

    async createRocket(req, res) {
        try {
            const rocketCreated = await rocket.create({
                nom: req.body.nom,
                annee: req.body.annee,
                organisation: req.body.organisation,
                destination: req.body.destination
            });
            res.status(201).send(rocketCreated);
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },

    async updateRocket(req, res) {
        const { rocketId } = req.params;
        try {
            const rocketCollection = await rocket.findOne(({
                where: { id: rocketId }
            }))
            if (rocketCollection) {
                const updatedRocket = await rocketCollection.update({
                    id: req.params.rocketId,
                    nom: req.body.nom,
                    annee: req.body.annee,
                    organisation: req.body.organisation,
                    destination: req.body.destination
                })
                res.status(201).send(updatedRocket);
            }
            else {
                res.status(404).send("Rocket Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
    async deleteRocket(req, res) {
        const { rocketId } = req.params;
        try {
            const deletedRocket = await rocket.findOne(({
                where: { id: rocketId }
            }))
            if (deletedRocket) {
                deletedRocket.destroy();
                res.status(201).send("Deleted");
            }
            else {
                res.status(404).send("Rocket Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async getOneRocket(req, res) {
        const { rocketId } = req.params;
        try {
            const Rocket = await rocket.findOne(({
                where: { id: rocketId }
            }))
            if (Rocket) {
                res.status(201).send(Rocket);
            }
            else {
                res.status(404).send("Rocket Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    }
}