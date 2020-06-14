import { FieldData } from '../fields/fieldData';
import { Users } from '../users/users';

export interface Phase {
  phaseId: number;
  phaseName: string;
  icon: string;
  description: string;
  fields: FieldData[];
  processId: number;
  implementer: Users[];
  isFirstPhase: boolean;
  isTC: boolean;
  isTB: boolean;
  limitUser: boolean;
}
