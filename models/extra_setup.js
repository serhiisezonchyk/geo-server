export default function applyExtraSetup(db) {
  const { user, role, problem_info_point, category_problem, policy } = db;
  role.hasMany(user, { foreignKey: "roleId" });
  user.belongsTo(role, { foreignKey: "roleId" });
  category_problem.hasMany(problem_info_point, {
    foreignKey: "categoryProblemId",
  });
  problem_info_point.belongsTo(category_problem, {
    foreignKey: "categoryProblemId",
  });

  role.belongsToMany(policy, { through: "role_policy", foreignKey: "roleId" });
  policy.belongsToMany(role, {
    through: "role_policy",
    foreignKey: "policyId",
  });
}
