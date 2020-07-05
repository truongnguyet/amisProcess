export interface FieldData  {
  id: string;
  fieldName: string;
  description: string;
  type: string;
  required: boolean;
  phaseId: number;
  option?: Array<any>;
}

export const ListField: FieldData[] = [
  {
    id: "a",
    fieldName: "Họ và tên",
    description: "Nhập đầy đủ họ và tên",
    type: "shortText",
    required: false,
    phaseId: 1,
  },
  {
    id: "b",
    fieldName: "Email",
    description: "Nhập email của bạn",
    type: "shortText",
    required: true,
    phaseId: 1
  },
  {
    id: "c",
    fieldName: "Thời gian bắt đầu",
    description: "Bạn bắt đầu nghỉ khi nào?",
    type: "date",
    required: true,
    phaseId: 1
  },
  {
    id: "d",
    fieldName: "Thời gian kết thúc",
    description: "Bạn kết thúc kì nghỉ vào ngày nào?",
    type: "date",
    required: true,
    phaseId: 1
  },
  {
    id: "e",
    fieldName: "Lí do ",
    description: "Lí do nghỉ phép",
    type: "longText",
    required: true,
    phaseId: 1
  },
  {
    id: "f",
    fieldName: "Giám đốc xác nhận",
    description: "Xác nhận đơn xin nghỉ",
    type: "radio",
    required: true,
    phaseId: 2,
    option: [{ idx: 1, value: 'Đồng ý' }, {idx: 2, value: 'Không đồng ý'}]
  },
]

export const FieldInPhase: FieldData[] = [

]
