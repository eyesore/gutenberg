import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GutenbergComponent } from './gutenberg.component';

describe('GutenbergComponent', () => {
  let component: GutenbergComponent;
  let fixture: ComponentFixture<GutenbergComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GutenbergComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GutenbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
