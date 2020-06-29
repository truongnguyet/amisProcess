import { Process } from './../models/process';
import { USERS } from './mock-users';

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
        id: 1,
        phaseName: 'Lập đơn',
        icon: 'access_alarm',
        description: 'Bước dành cho toàn bộ nhân viên muốn xin nghỉ',
        fields: [
          {
            id: 1,
            fieldName: "Thời gian bắt đầu",
            description: "Nhập thời gian bắt đầu nghỉ",
            type: "date",
            required: true,
            phaseId: 1,
          },
          {
            id: 2,
            fieldName: "Thời gian kết thúc",
            description: "Nhập thời gian kết thúc nghỉ",
            type: "date",
            required: true,
            phaseId: 1,
          },
          {
            id: 3,
            fieldName: "Lí do",
            description: "Nhập lí do nghỉ",
            type: "longText",
            required: true,
            phaseId: 1,
          },
        ],
        processId: 1,
        implementer: USERS,
        isFirstPhase: true,
        isTc: false,
        isTb: false,
        limitUser: false
      },
      {

        id: 2,
        phaseName: 'Phê duyệt',
        icon: 'account_box',
        description: 'Bước dành cho quản lí bộ phận của nhân viên muốn xin nghỉ',
        fields: [
          {
            id: 1,
            fieldName: "Quản lí phê duyệt",
            description: "Quản lí phê duyệt đơn",
            type: "radio",
            required: true,
            phaseId: 2,
            options: [
              {
                index: 1,
                value: 'Đồng ý'
              },
              {
                index: 2,
                value: 'Không đồng ý'
              }
            ]
          },
          {
            id: 2,
            fieldName: "Nhận xét",
            description: "Quản lí nhận xét đơn",
            type: "longText",
            required: false,
            phaseId: 2,
          },
        ],
        processId: 1,
        implementer: USERS,
        isFirstPhase: false,
        isTc: false,
        isTb: false,
        limitUser: false
      },
      {
        id: 3,
        phaseName: 'Xác nhận',
        icon: 'border_color',
        description: 'Bước dành cho giám đốc bộ phận của nhân viên muốn xin nghỉ',
        fields: [
          {
            id: 1,
            fieldName: "Giám đốc xác nhận",
            description: "Giám đốc xác nhận đơn",
            type: "radio",
            required: true,
            phaseId: 3,
            options: [
              {
                index: 1,
                value: 'Đồng ý'
              },
              {
                index: 2,
                value: 'Không đồng ý'
              }
            ]
          },

        ],
        processId: 1,
        implementer: [
          {
            id: 4,
            name: 'Trịnh Thị Vân Anh',
            firstName: 'Trịnh Thị',
            lastName: 'Vân Anh',
            phoneNumber: '0987678231',
            email: 'anh@gmail.com',
            position: 'Nhân viên',
            role: 'Staff',
            address: 'Nghệ An',
            dateOfBirth: "23/02/2986",
            password:""
          },
          {
            id: 5,
            name: 'Hoàng Xuân Dậu',
            firstName: 'Hoàng Xuân',
            lastName: 'Dậu',
            phoneNumber: '0989786745',
            email: 'dau@gmail.com',
            position: 'Quản lí',
            role: 'Manage',
            address: 'Bắc Giang',
            dateOfBirth: "23/02/2986",
            password: ""
          },
          {
            id: 6,
            name: 'Hoàng Hữu Hạnh',
            firstName: 'Hoàng Hữu',
            lastName: 'Hạnh',
            phoneNumber: '0369852147',
            email: 'hanh@gmail.com',
            position: 'Nhân viên',
            role: 'Staff',
            address: 'Huế',
            dateOfBirth: "23/02/2986",
            password: ""
          },
        ],
        isFirstPhase: false,
        isTc: false,
        isTb: false,
        limitUser: true
      },
      {
        id: 4,
        phaseName: 'Thành công',
        icon: 'notifications',
        description: 'Hoàn thành đơn có được phê duyệt hay không',
        fields: [],
        processId: 1,
        implementer: [],
        isFirstPhase: false,
        isTc: true,
        isTb: false,
        limitUser: false
      },
      {
        id: 5,
        phaseName: 'Thất bại',
        icon: 'notifications',
        description: 'Hoàn thành đơn có được phê duyệt hay không',
        fields: [],
        processId: 1,
        implementer: [],
        isFirstPhase: false,
        isTc: false,
        isTb: true,
        limitUser: false
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
    phase: []
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
