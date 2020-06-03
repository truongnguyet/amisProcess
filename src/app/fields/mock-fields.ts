import { Fields } from './fiedls';

export const FIELDS: Fields[] = [
  {
    icon: 'short_text',
    nameField: 'ShortText',
    description: 'Với các trường nhập liệu ngắn',
    type: 'shortText',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'description',
    nameField: 'LongText',
    description: 'Với các trường nhập liệu dài nhiều dòng',
    type: 'longText',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'date_range',
    nameField: 'Date',
    description: 'Với các trường nhập ngày',
    type: 'date',
    requeried: false,
    phaseId: 3,
    option:[]
  },
  {
    icon: 'calendar_today',
    nameField: 'DateTime',
    description: 'Với các trường nhập cả ngày và thời gian',
    type: 'dateTime',
    requeried: false,
    phaseId: 3,
    option:[]
  },
  {
    icon: 'check_box',
    nameField: 'CheckBox',
    description: 'Với các trường có thể chọn nhiều lựa chọn',
    type: 'checkBox',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'email',
    nameField: 'Email',
    description: 'Với các trường chỉ nhập email',
    type: 'email',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'call',
    nameField: 'PhoneNumber',
    description: 'Với các trường chỉ nhập số điện thoại',
    type: 'phone',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'arrow_drop_down',
    nameField: 'DropDownSelect',
    description: 'Với các trường chọn một lựa chọn',
    type: 'dropDown',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'alarm_on',
    nameField: 'Time',
    description: 'Với các trường nhập thời gian',
    type: 'time',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'attach_money',
    nameField: 'Currency',
    description: 'Với các trường nhập số tiền',
    type: 'currency',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'attach_file',
    nameField: 'Attachment',
    description: 'Với các trường cần tệp đính kèm',
    type: 'attchment',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'people',
    nameField: 'Assignees select',
    description: 'Với các trường chọn thành viên',
    type: 'assignees',
    requeried: false,
    phaseId: 2,
    option:[]
  },
  {
    icon: 'radio_button_checked',
    nameField: 'Radio',
    description: 'Với các trường chọn một lựa chọn',
    type: 'radio',
    requeried: false,
    phaseId: 2,
    option:[]
  },
]
