import { FieldData } from '../models/fieldData';
import { Users } from '../models/users';

export interface Phase {
  id: string;
  phaseName: string;
  icon: string;
  description: string;
  fields: FieldData[];
  processId: number;
  implementer: Users[];
  isFirstPhase: boolean;
  isTc: boolean;
  isTb: boolean;
  limitUser: boolean;
}
