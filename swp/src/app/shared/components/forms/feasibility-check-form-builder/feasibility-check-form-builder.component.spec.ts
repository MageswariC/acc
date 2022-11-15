import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormControl} from '@angular/forms';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FeasibilityCheckFormBuilderComponent } from './feasibility-check-form-builder.component';


describe('FeasibilityCheckFormBuilderComponent', () => {
  let component: FeasibilityCheckFormBuilderComponent;
  let fixture: ComponentFixture<FeasibilityCheckFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ FeasibilityCheckFormBuilderComponent ],
      providers:[FormBuilder],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeasibilityCheckFormBuilderComponent);
    component = fixture.componentInstance;
    //@ts-ignore
    const controls: FormData = [] | any;
    //component.fcForm = controls
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
