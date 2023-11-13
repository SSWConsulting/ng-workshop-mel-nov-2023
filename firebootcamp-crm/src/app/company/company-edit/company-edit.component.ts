import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';
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

  form!: UntypedFormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyId = +this.route.snapshot.params['id'];

    this.buildForm();

    this.companyService.getCompany(this.companyId).subscribe((company) => {
      this.form.patchValue(company);
    });
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
      phone: [''],
      email: [''],
    });
  }
}
