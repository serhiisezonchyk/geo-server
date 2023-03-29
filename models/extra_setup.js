export default function applyExtraSetup(db) {
	const { user, role, problem_info_point, category_problem} = db;
  role.hasMany(user);
  category_problem.hasMany(problem_info_point, { foreignKey: 'categoryProblemId' });
  problem_info_point.belongsTo(category_problem, { foreignKey: 'categoryProblemId' });

}