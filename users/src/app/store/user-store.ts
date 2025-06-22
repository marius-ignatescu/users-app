import { signal, computed } from '@angular/core';
import { UserItem } from '../model/user.type';
import { createStore } from '@ngneat/elf';
import { withEntities, addEntities, deleteEntities, selectAllEntities, selectEntity, upsertEntities } from '@ngneat/elf-entities';
import { Observable, map } from 'rxjs';

const store = createStore(
  { name: 'users' },
  withEntities<UserItem>({ idKey: 'id' })
);

export class UsersStore {
  users$: Observable<UserItem[]> = store.pipe(selectAllEntities());
  private loaded = signal(false);
  isLoaded = computed(() => this.loaded());
  
  totalUsers$: Observable<number> = this.users$.pipe(
    map(users => users.length)
  );

  totalCompanies$: Observable<number> = this.users$.pipe(
    map(users => {
      const uniqueCompanies = new Set(
        users.map(user => user.company?.name).filter(Boolean)
      );
      return uniqueCompanies.size;
    })
  );

  usersPerCompany$: Observable<{ [company: string]: number }> = this.users$.pipe(
    map(users => {
      const map: { [company: string]: number } = {};
      users.forEach(user => {
        const company = user.company?.name || 'Unknown';
        map[company] = (map[company] || 0) + 1;
      });
      return map;
    })
  );

  loadUsers(users: UserItem[]): void {
  store.update(upsertEntities(users));
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