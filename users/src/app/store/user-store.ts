import { signal, WritableSignal, computed, inject } from '@angular/core';
import { UserItem } from '../model/user.type';

export class UsersStore {
  private usersSignal: WritableSignal<UserItem[]> = signal<UserItem[]>([]);
  private loaded = signal(false);

  users = computed(() => this.usersSignal());
  isLoaded = computed(() => this.loaded());

  loadUsers(users: UserItem[]): void {
    this.usersSignal.set(users);
    this.loaded.set(true);
  }

  addUser(user: UserItem): void {
    this.usersSignal.update(current => [...current, user]);
  }

  removeUser(id: number): void {
    this.usersSignal.update(current => current.filter(u => u.id !== id));
  }

  getUserById(id: number): UserItem | undefined {
    return this.usersSignal().find(u => u.id === id);
  }
}