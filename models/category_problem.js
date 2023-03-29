export default (sequelize, DataTypes) => {
  const Category_problem = sequelize.define(
    "category_problem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      layer_img: { type: DataTypes.STRING, allowNull: true, defaultValue: "https://cdn-icons-png.flaticon.com/512/9438/9438201.png" },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Category_problem;
};
