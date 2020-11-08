import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvasComponent } from './convas.component';

describe('ConvasComponent', () => {
  let component: ConvasComponent;
  let fixture: ComponentFixture<ConvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
