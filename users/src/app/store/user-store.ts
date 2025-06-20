import { signal, computed } from '@angular/core';
import { UserItem } from '../model/user.type';
import { createStore } from '@ngneat/elf';
import { withEntities, addEntities, deleteEntities, selectAllEntities, selectEntity } from '@ngneat/elf-entities';
import { Observable } from 'rxjs';

const store = createStore(
  { name: 'users' },
  withEntities<UserItem>({ idKey: 'id' })
);

export class UsersStore {
  users$: Observable<UserItem[]> = store.pipe(selectAllEntities());
  private loaded = signal(false);
  isLoaded = computed(() => this.loaded());
  
  loadUsers(users: UserItem[]): void {
    store.update(
      addEntities(users)
    );

    this.loaded.set(true);
  }

  addUser(user: UserItem): void {
    store.update(addEntities(user));
  }

  removeUser(id: number): void {
    store.update(deleteEntities(id));
  }

  getUserById$(id: number): Observable<UserItem | undefined> {
    return store.pipe(selectEntity(id));
  }
}