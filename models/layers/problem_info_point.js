export default (sequelize, DataTypes) => {
    const Problem_info_point = sequelize.define(
      "problem_info_point",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        img: { type: DataTypes.STRING, allowNull: true},
        description: { type: DataTypes.STRING, allowNull: true },
        user_id:{ type: DataTypes.BIGINT, allowNull: false},
        geom:{ type: DataTypes.GEOMETRY('POINT',4326), allowNull: false}
    },
      {
        freezeTableName: true,
      }
    );
    return Problem_info_point;
  };