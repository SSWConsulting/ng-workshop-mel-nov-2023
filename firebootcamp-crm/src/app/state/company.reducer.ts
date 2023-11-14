import { createReducer, on } from '@ngrx/store';
import { Company } from '../company/company';
import { loadCompanies } from './company.actions';

export const initialState: Company[] = [];

export const companyReducer = createReducer(
  initialState,
  on(loadCompanies, (state, action) => action.payload),
);
