import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eClientComponent } from './e2e-client.component';

describe('E2eClientComponent', () => {
  let component: E2eClientComponent;
  let fixture: ComponentFixture<E2eClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E2eClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(E2eClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
