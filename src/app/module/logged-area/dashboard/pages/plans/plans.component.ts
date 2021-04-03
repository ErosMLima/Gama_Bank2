import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { Plans } from 'src/app/modules/logged-area/interfaces/plans.interface';

import { PlanService } from './plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.sass']
})
export class PlansComponent implements OnInit {

  plans: Plans[];
  plansForm: FormGroup;
  isLoading: boolean;
  isNotLoading: boolean;

  constructor(
    private plansService: PlanService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.plansForm = this.fb.group({
      description: ['', Validators.required],
      user: ['', Validators.required],
      type: ['', Validators.required],
    });

    this.loadPlans();
  }

  loadPlans() {
    this.isLoading = true;
    this.isNotLoading = false;

    this.plansService.getPlans()
    .pipe(
      take(1),
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      response => this.onSucessPlans(response),
      error => this.onErrorPlans(error)
    );
  }

  onSucessPlans(response: Plans[]) {
    this.plans = response;
  }

  onErrorPlans(error: any) {
    this.isNotLoading = true;
  }

  createNewPlan() {
    const plan = {
      descricao: this.plansForm.value.description,
      login: this.plansForm.value.user,
      tipoMovimento: this.plansForm.value.type
    };
    this.plansService.createPlan(plan)
    .pipe(
      take(1),
    )
    .subscribe(
      response => this.onSucessCreatePlan(),
      error => console.log(error),
    );
  }

  onSucessCreatePlan() {
    this.router.navigate(['/#/dashboard/home']);
  }

  validatePlansForm() {
    Object.keys(this.plansForm.controls).forEach(field => {
      const control = this.plansForm.get(field);
      control.markAllAsTouched();
    });
  }

  onSubmit() {
    if (this.plansForm.invalid) {
      this.validatePlansForm();
      return;
    }
    this.createNewPlan();
  }

}
