import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttovoiceComponent } from './texttovoice.component';

describe('TexttovoiceComponent', () => {
  let component: TexttovoiceComponent;
  let fixture: ComponentFixture<TexttovoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TexttovoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexttovoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
