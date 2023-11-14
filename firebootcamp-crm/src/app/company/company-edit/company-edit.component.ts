import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss',
})
export class CompanyEditComponent implements OnInit {
  companyId!: number;
  isNewCompany = false;

  form!: UntypedFormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyId = +this.route.snapshot.params['id'];
    this.isNewCompany = !this.companyId;

    this.buildForm();

    if (!this.isNewCompany) {
      this.companyService.getCompany(this.companyId).subscribe((company) => {
        this.form.patchValue(company);
      });
    }
  }

  buildForm() {
    // long way
    //  this.form = new FormGroup({
    //   name: new FormControl(''),
    //   phone: new FormControl(''),
    //   email: new FormControl(''),
    //  });

    // formBuilder method
    // this.form = this.formBuilder.group({
    //   name: this.formBuilder.control(''),
    //   phone: this.formBuilder.control(''),
    //   email: this.formBuilder.control(''),
    // });

    // formBuilder shorthand method
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkPhone: [false],
      phone: [''],
      email: [''],
    });

    this.form.controls['checkPhone'].valueChanges.subscribe((checked) => {
      const control = this.form.controls['phone'];
      if (checked) {
        control.setValidators([Validators.required]);
      } else {
        control.clearValidators();
      }
      control.updateValueAndValidity();
    });
  }

  saveCompany() {
    const { valid, value } = this.form;

    if (!valid) {
      return;
    }

    if (this.isNewCompany) {
      this.companyService
        .addCompany(value)
        .subscribe(() => this.router.navigateByUrl('/company/list'));
    } else {
      const updatedCompany = {
        id: this.companyId,
        ...value,
      };
      this.companyService
        .updateCompany(updatedCompany)
        .subscribe(() => this.router.navigateByUrl('/company/list'));
    }
  }
}
