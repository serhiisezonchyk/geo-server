export default function applyExtraSetup(db) {
	const { user, role} = db;
  role.hasMany(user);
}