"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
var UserManagement;
(function (UserManagement) {
    var Admin;
    (function (Admin) {
        var AdminUser = /** @class */ (function () {
            function AdminUser(name, email, isSuperAdmin) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            // Метод для изменения прав доступа
            AdminUser.prototype.changeAccessLevel = function (isSuperAdmin) {
                this.isSuperAdmin = isSuperAdmin;
            };
            // Метод для вывода информации о пользователе
            AdminUser.prototype.displayInfo = function () {
                console.log("Admin Name: ".concat(this.name, ", Email: ").concat(this.email, ", Super Admin: ").concat(this.isSuperAdmin));
            };
            return AdminUser;
        }());
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (exports.UserManagement = UserManagement = {}));
