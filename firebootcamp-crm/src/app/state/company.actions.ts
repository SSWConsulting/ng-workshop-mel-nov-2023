import { createAction } from '@ngrx/store';
import { Company } from '../company/company';

export const loadCompanies = createAction(
  '[Companies] Load',
  (companies: Company[]) => ({ payload: companies })
);
