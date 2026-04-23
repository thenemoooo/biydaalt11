export enum UserAction { CREATE, UPDATE, DELETE, RESTORE }

export interface User {
    id: string;
    email: string;
    name: string;
}

export class UserManager {
    private dbConnection: any; // Private болгосон
    private users: User[] = [];

    public getUserById(id: string): User {
        const user = this.users.find(u => u.id === id);
        if (!user) throw new Error("User not found");
        return user;
    }

    public executeAction(user: User, action: UserAction): void {
        // Enum ашиглан ойлгомжтой болгосон
    }
}