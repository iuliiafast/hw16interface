import { UserManagement } from './userManagement';

const adminUser = new UserManagement.Admin.AdminUser('Alice', 'alice@example.com', true);
adminUser.displayInfo(); // Output: Admin Name: Alice, Email: alice@example.com, Super Admin: true

// Меняем права доступа
adminUser.changeAccessLevel(false);
adminUser.displayInfo(); // Output: Admin Name: Alice, Email: alice@example.com, Super Admin: false
