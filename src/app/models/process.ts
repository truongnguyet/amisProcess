import { Phase } from './phase';

export interface Process {
  id: number;
  nameProcess: string;
  createdBy: string;
  createdAt: string;
  status: string;
  modifyBy: string;
  modifyAt: string;
  phase: Phase[];
}
