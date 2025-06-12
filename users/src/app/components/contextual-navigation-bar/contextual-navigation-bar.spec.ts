import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualNavigationBar } from './contextual-navigation-bar';

describe('ContextualNavigationBar', () => {
  let component: ContextualNavigationBar;
  let fixture: ComponentFixture<ContextualNavigationBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualNavigationBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualNavigationBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
