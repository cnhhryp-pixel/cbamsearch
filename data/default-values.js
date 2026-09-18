// Validated numeric default values will be added only from the applicable EU legal dataset.
// Empty by design: the calculator must never invent or silently substitute an emission factor.
export const defaultValues=[];

export const DEFAULT_VALUE_DATASET={
  status:'awaiting-validated-values',
  source:'European Commission CBAM default values',
  note:'Numeric records are published here only after legal-source validation.'
};
