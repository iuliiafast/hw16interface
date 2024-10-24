export namespace UserManagement {

  export namespace Admin {

    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean
      ) { }

      // Метод для изменения прав доступа
      changeAccessLevel(isSuperAdmin: boolean): void {
        this.isSuperAdmin = isSuperAdmin;
      }

      // Метод для вывода информации о пользователе
      displayInfo(): void {
        console.log(`Admin Name: ${this.name}, Email: ${this.email}, Super Admin: ${this.isSuperAdmin}`);
      }
    }
  }
}
