import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeapiComponent } from './jokeapi.component';

describe('JokeapiComponent', () => {
  let component: JokeapiComponent;
  let fixture: ComponentFixture<JokeapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokeapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokeapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
