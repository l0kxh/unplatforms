module.exports = (sequelize, DataTypes) => {

    const Todos = sequelize.define("Todos", {
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

    return Todos;
};