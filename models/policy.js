export default (sequelize, DataTypes) => {
    const Policy = sequelize.define(
      "policy",
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
        label: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: true },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Policy;
  };
  