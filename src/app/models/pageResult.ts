import {Process} from './process';
export interface  PageResult
{
    count: number;
    pageIndex: number;
    pageSize: number;
    items: Process[];
}