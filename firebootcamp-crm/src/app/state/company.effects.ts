import { Injectable } from "@angular/core";
import { exhaustMap, map } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CompanyService } from "../company/company.service";
import { loadCompanies, loadCompaniesSuccess } from "./company.actions";

@Injectable()
export class CompanyEffects {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
  ){}


  loadCompanies$ = createEffect(() => this.actions$.pipe(
    ofType(loadCompanies.type),
    exhaustMap(() => this.companyService.getCompanies()
      .pipe(
        map(companies => loadCompaniesSuccess(companies)),
      ))
    )
  );
}
