module.exports = (sequelize, Sequelize) => {
    const rocket = sequelize.define('rockets', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: {
            type: Sequelize.STRING
        },
        annee: {
            type: Sequelize.STRING
        },
        organisation: {
            type: Sequelize.STRING
        },
        destination: {
            type: Sequelize.STRING
        }
    });
    return rocket;
}