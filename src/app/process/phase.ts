import { Fields } from '../fields/fiedls';
import { Users } from '../users/users';

export interface Phase {
  phaseId: number;
  phaseName: string;
  icon: string;
  description: string;
  fields: Fields[];
  processId: number;
  implementer: Users[];
}
