export default (sequelize, DataTypes) => {
    const Role_policy = sequelize.define(
      "role_policy",
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Role_policy;
  };
  