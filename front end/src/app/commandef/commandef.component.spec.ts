import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandefComponent } from './commandef.component';

describe('CommandefComponent', () => {
  let component: CommandefComponent;
  let fixture: ComponentFixture<CommandefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
