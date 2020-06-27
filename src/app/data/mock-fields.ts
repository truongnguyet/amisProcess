import { Fields } from './../models/fiedls';

export const FIELDS: Fields[] = [
  {
    icon: 'short_text',
    nameField: 'ShortText',
    description: 'Với các trường nhập liệu ngắn',
    type: 'shortText',
  },
  {
    icon: 'description',
    nameField: 'LongText',
    description: 'Với các trường nhập liệu dài nhiều dòng',
    type: 'longText',

  },
  {
    icon: 'date_range',
    nameField: 'Date',
    description: 'Với các trường nhập ngày',
    type: 'date',
  },
  {
    icon: 'calendar_today',
    nameField: 'DateTime',
    description: 'Với các trường nhập cả ngày và thời gian',
    type: 'dateTime',
  },
  {
    icon: 'check_box',
    nameField: 'CheckBox',
    description: 'Với các trường có thể chọn nhiều lựa chọn',
    type: 'checkBox',
    option:[]
  },
  {
    icon: 'email',
    nameField: 'Email',
    description: 'Với các trường chỉ nhập email',
    type: 'email',
  },
  {
    icon: 'call',
    nameField: 'PhoneNumber',
    description: 'Với các trường chỉ nhập số điện thoại',
    type: 'phone',
  },
  {
    icon: 'arrow_drop_down',
    nameField: 'DropDownSelect',
    description: 'Với các trường chọn một lựa chọn',
    type: 'dropDown',
    option:[]
  },
  {
    icon: 'alarm_on',
    nameField: 'Time',
    description: 'Với các trường nhập thời gian',
    type: 'time',
  },
  {
    icon: 'attach_money',
    nameField: 'Currency',
    description: 'Với các trường nhập số tiền',
    type: 'currency'
  },
  {
    icon: 'attach_file',
    nameField: 'Attachment',
    description: 'Với các trường cần tệp đính kèm',
    type: 'attchment'
  },
  {
    icon: 'radio_button_checked',
    nameField: 'Radio',
    description: 'Với các trường chọn một lựa chọn',
    type: 'radio',
    option:[]
  },
]
