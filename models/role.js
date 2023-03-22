export default (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "role",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
    },
    { timestamps: false, freezeTableName: true }
  );
  return Role;
};
