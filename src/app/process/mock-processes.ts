import {Process } from './process';

export const PROCESS: Process[] = [
  {
    id: 1,
    nameProcess: 'Quy trình nghỉ phép',
    createdBy: 'Trương Thị Nguyệt',
    status: 'Đang hoạt động',
    modifyBy: 'Trương Thị Nguyệt',
    modifyAt: '12/12/2020',
    createdAt: '10/1/2020',
    phase: [
      {
        phaseId: 1,
        phaseName: 'Lập đơn',
        icon: 'access_alarm',
        description: '',
        fields: [
        

        ],
        processId: 1,
        implementer: [] 
      },
      {
        phaseId: 2,
        phaseName: 'Phê duyệt',
        icon: 'access_alarm',
        description: '',
        fields: [


        ],
        processId: 1,
        implementer: [] 
      },
      {
        phaseId: 3,
        phaseName: 'Xác nhận',
        icon: 'access_alarm',
        description: '',
        fields: [


        ],
        processId: 1,
        implementer: [] 
      }
    ],
    
  },
  {
    id: 2,
    nameProcess: 'Quy trình xin cấp phép tài sản',
    createdBy: 'Trương Thị Nguyệt',
    status: 'Tạm ngừng',
    modifyAt: '12/12/2020',
    modifyBy: 'Mai Thị Hoa',
    createdAt: '10/2/2019',
    phase:[]
  },
  {
    id: 3,
    nameProcess: 'Quy trình tuyển dụng',
    createdBy: 'Mai Thị Hoa',
    status: 'Đang hoạt động',
    modifyBy: 'Mai Thị Hoa',
    modifyAt: '23/2/2020',
    createdAt: '10/1/2018',
    phase: []

  },
  {
    id: 4,
    nameProcess: 'Quy trình sản xuất',
    createdBy: 'Hỏa Thành An',
    status: 'Tạm ngừng',
    modifyAt: '12/2/2020',
    modifyBy: 'Trương Thị Nguyệt',
    createdAt: '1/1/2019',
    phase: []
  },
  {
    id: 5,
    nameProcess: 'Quy trình sản xuất 2',
    createdBy: 'Hỏa Thành An',
    status: 'Tạm ngừng',
    modifyAt: '12/2/2020',
    modifyBy: 'Trương Thị Nguyệt',
    createdAt: '1/1/2019',
    phase: []
  }

];
