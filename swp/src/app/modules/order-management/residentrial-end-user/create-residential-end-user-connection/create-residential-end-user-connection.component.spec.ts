import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CreateResidentialEndUserConnectionComponent } from './create-residential-end-user-connection.component';

describe('CreateResidentialEndUserConnectionComponent', () => {
  let component: CreateResidentialEndUserConnectionComponent;
  let fixture: ComponentFixture<CreateResidentialEndUserConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,ToastrModule.forRoot()],
      declarations: [ CreateResidentialEndUserConnectionComponent ],
      providers:[FormBuilder,ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResidentialEndUserConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
