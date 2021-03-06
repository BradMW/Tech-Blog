const User = require('./User');
const Project = require('./Project');
const Comments = require('./comments');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comments, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
  foreignKey: 'project_id'
});

module.exports = { User, Project, Comments };
