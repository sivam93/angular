import { untaggedEffects } from "./untagged.effects";
import { feEffects } from './financialexception.effects';
import { MPMEffects } from './mpm.effects';
import { dashboardEffects } from './dashboard.effects';
import { srEffects } from './salaryrelease.effects';
import { spEffects } from './salaryprocess.effects';

export const effects = {
    untaggedEffects,
    MPMEffects,
    feEffects,
    dashboardEffects,
    srEffects,
    spEffects
}

export * from './untagged.effects';
export * from './financialexception.effects';
export * from './mpm.effects';
export * from './dashboard.effects';
export * from './salaryrelease.effects';
export * from './salaryprocess.effects';