const Department = require('./Department');
const EmployeePositionHistory = require('./EmployeePositionHistory');
const Employee = require('./Employee');
const Role = require('./Role');

EmployeePositionHistory.belongsTo(Employee, { foreignKey: 'employee_id' });
EmployeePositionHistory.belongsTo(Department, { foreignKey: 'department_id' });
EmployeePositionHistory.belongsTo(Role, { foreignKey: 'role_id' });

Department.hasMany(EmployeePositionHistory, { foreignKey: 'department_id' });
