import { Fields} from '../fields/fiedls';

export interface Phase {
  phaseId: number;
  phaseName: string;
  icon: string;
  description: string;
  fields: Fields[];
  processId: number;
}
