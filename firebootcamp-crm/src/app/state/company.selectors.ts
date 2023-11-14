import { createSelector } from "@ngrx/store";
import { AppState } from "../models/appState";

export const companyFeatureSelector = (state: AppState) => state.companies;

export const selectCompanies = createSelector(
  companyFeatureSelector,
  (state) => state
);

export const selectCompaniesCount = createSelector(
  companyFeatureSelector,
  (state) => state.length
);
