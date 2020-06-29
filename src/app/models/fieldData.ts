export interface FieldData  {
  id: number;
  fieldName: string;
  description: string;
  type: string;
  required: boolean;
  phaseId: number;
  options?: Array<any>;
}

export const ListField: FieldData[] = [
  {
    id: 1,
    fieldName: "Họ và tên",
    description: "Nhập đầy đủ họ và tên",
    type: "shortText",
    required: false,
    phaseId: 1,
  },
  {
    id: 2,
    fieldName: "Email",
    description: "Nhập email của bạn",
    type: "shortText",
    required: true,
    phaseId: 1
  },
  {
    id: 3,
    fieldName: "Thời gian bắt đầu",
    description: "Bạn bắt đầu nghỉ khi nào?",
    type: "date",
    required: true,
    phaseId: 1
  },
  {
    id: 4,
    fieldName: "Thời gian kết thúc",
    description: "Bạn kết thúc kì nghỉ vào ngày nào?",
    type: "date",
    required: true,
    phaseId: 1
  },
  {
    id: 5,
    fieldName: "Lí do ",
    description: "Lí do nghỉ phép",
    type: "longText",
    required: true,
    phaseId: 1
  },
  {
    id: 6,
    fieldName: "Giám đốc xác nhận",
    description: "Xác nhận đơn xin nghỉ",
    type: "radio",
    required: true,
    phaseId: 2,
    options: [{ idx: 1, value: 'Đồng ý' }, {idx: 2, value: 'Không đồng ý'}]
  },
]

export const FieldInPhase: FieldData[] = [

]
