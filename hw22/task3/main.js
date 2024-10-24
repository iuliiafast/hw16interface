"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userManagement_1 = require("./userManagement");
var adminUser = new userManagement_1.UserManagement.Admin.AdminUser('Alice', 'alice@example.com', true);
adminUser.displayInfo(); // Output: Admin Name: Alice, Email: alice@example.com, Super Admin: true
// Меняем права доступа
adminUser.changeAccessLevel(false);
adminUser.displayInfo(); // Output: Admin Name: Alice, Email: alice@example.com, Super Admin: false
