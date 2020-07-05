import { Process } from './../models/process';
import { USERS } from './mock-users';

export const PROCESS: Process[] = [
  {
    id: "a",
    nameProcess: 'Quy trình nghỉ phép',
    createdBy: 'Trương Thị Nguyệt',
    status: 'Đang hoạt động',
    modifyBy: 'Trương Thị Nguyệt',
    modifyAt: '12/12/2020',
    createdAt: '10/1/2020',
    phase: [
      {
        id: "g",
        phaseName: 'Lập đơn',
        icon: 'access_alarm',
        description: 'Bước dành cho toàn bộ nhân viên muốn xin nghỉ',
        fieldData: [
          {
            id: "kkm",
            fieldName: "Thời gian bắt đầu",
            description: "Nhập thời gian bắt đầu nghỉ",
            type: "date",
            required: true,
            phaseId: 1,
          },
          {
            id: "fe",
            fieldName: "Thời gian kết thúc",
            description: "Nhập thời gian kết thúc nghỉ",
            type: "date",
            required: true,
            phaseId: 1,
          },
          {
            id: "gbs",
            fieldName: "Lí do",
            description: "Nhập lí do nghỉ",
            type: "longText",
            required: true,
            phaseId: 1,
          },
        ],
        processId: "a",
        usersHasPhase: USERS,
        isFirstPhase: true,
        isTc: false,
        isTb: false,
        limitUser: false,
        index: 1
      },
      {

        id: "gnh",
        phaseName: 'Phê duyệt',
        icon: 'account_box',
        description: 'Bước dành cho quản lí bộ phận của nhân viên muốn xin nghỉ',
        fieldData: [
          {
            id: "kjlgd",
            fieldName: "Quản lí phê duyệt",
            description: "Quản lí phê duyệt đơn",
            type: "radio",
            required: true,
            phaseId: 2,
            option: [
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
            id: "dfg",
            fieldName: "Nhận xét",
            description: "Quản lí nhận xét đơn",
            type: "longText",
            required: false,
            phaseId: 2,
          },
        ],
        processId: "v",
        usersHasPhase: USERS,
        isFirstPhase: false,
        isTc: false,
        isTb: false,
        limitUser: false,
        index: 2
      },
      {
        id: "ggd",
        phaseName: 'Xác nhận',
        icon: 'border_color',
        description: 'Bước dành cho giám đốc bộ phận của nhân viên muốn xin nghỉ',
        fieldData: [
          {
            id: "gshf",
            fieldName: "Giám đốc xác nhận",
            description: "Giám đốc xác nhận đơn",
            type: "radio",
            required: true,
            phaseId: 3,
            option: [
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
        processId: "d",
        usersHasPhase: [
          {
            id: "hgdgh",
            fullName: 'Trịnh Thị Vân Anh',
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
            id: "shf",
            fullName: 'Hoàng Xuân Dậu',
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
            id: "gfh",
            fullName: 'Hoàng Hữu Hạnh',
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
        limitUser: true,
        index:3
      },
      {
        id: "gdn",
        phaseName: 'Thành công',
        icon: 'notifications',
        description: 'Hoàn thành đơn có được phê duyệt hay không',
        fieldData: [],
        processId: "d",
        usersHasPhase: [],
        isFirstPhase: false,
        isTc: true,
        isTb: false,
        limitUser: false,
        index: 4
      },
      {
        id: "gfdn",
        phaseName: 'Thất bại',
        icon: 'notifications',
        description: 'Hoàn thành đơn có được phê duyệt hay không',
        fieldData: [],
        processId: "d",
        usersHasPhase: [],
        isFirstPhase: false,
        isTc: false,
        isTb: true,
        limitUser: false,
        index: 5
      }
    ],

  },
  {
    id: "gfnbgfn",
    nameProcess: 'Quy trình xin cấp phép tài sản',
    createdBy: 'Trương Thị Nguyệt',
    status: 'Tạm ngừng',
    modifyAt: '12/12/2020',
    modifyBy: 'Mai Thị Hoa',
    createdAt: '10/2/2019',
    phase: []
  },
  {
    id: "gfn",
    nameProcess: 'Quy trình tuyển dụng',
    createdBy: 'Mai Thị Hoa',
    status: 'Đang hoạt động',
    modifyBy: 'Mai Thị Hoa',
    modifyAt: '23/2/2020',
    createdAt: '10/1/2018',
    phase: []

  },
  {
    id: "ndgn",
    nameProcess: 'Quy trình sản xuất',
    createdBy: 'Hỏa Thành An',
    status: 'Tạm ngừng',
    modifyAt: '12/2/2020',
    modifyBy: 'Trương Thị Nguyệt',
    createdAt: '1/1/2019',
    phase: []
  },
  {
    id: "hnd",
    nameProcess: 'Quy trình sản xuất 2',
    createdBy: 'Hỏa Thành An',
    status: 'Tạm ngừng',
    modifyAt: '12/2/2020',
    modifyBy: 'Trương Thị Nguyệt',
    createdAt: '1/1/2019',
    phase: []
  }

];
