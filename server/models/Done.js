module.exports = (sequelize, DataTypes) => {

    const Done = sequelize.define("Done", {
        task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Done;
};