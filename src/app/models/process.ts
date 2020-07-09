import { Phase } from './phase';

export interface Process {
  id: string;
  nameProcess: string;
  createdBy: string;
  createdAt: string;
  status: string;
  modifiedBy: string;
  modifiedAt: string;
  phase: Phase[];
}
