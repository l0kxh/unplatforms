module.exports = (sequelize, DataTypes) => {

    const InProgress = sequelize.define("InProgress", {
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

    return InProgress;
};