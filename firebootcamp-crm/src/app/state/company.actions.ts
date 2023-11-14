import { createAction } from '@ngrx/store';
import { Company } from '../company/company';

export const loadCompanies = createAction(
  '[Companies] Load'
);

export const loadCompaniesSuccess = createAction(
  '[Companies] Load Successful',
  (companies: Company[]) => ({ payload: companies })
);

export const addCompanny = createAction(
  '[Companies] Add Company',
  (company: Company) => ({ payload: company })
);

export const updateCompanny = createAction(
  '[Companies] Update Company',
  (company: Company) => ({ payload: company })
);

export const deleteCompanny = createAction(
  '[Companies] Delete Company',
  (company: Company) => ({ payload: company })
);
