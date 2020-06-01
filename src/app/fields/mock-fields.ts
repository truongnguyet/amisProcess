import { Fields } from './fiedls';

export const FIELDS: Fields[] = [
  { icon: 'short_text', nameField: 'ShortText', description: 'Với các trường nhập liệu ngắn' },
  { icon: 'description', nameField: 'LongText', description: 'Với các trường nhập liệu dài nhiều dòng' },
  { icon: 'date_range', nameField: 'Date', description: 'Với các trường nhập ngày' },
  { icon: 'calendar_today', nameField: 'DateTime', description: 'Với các trường nhập cả ngày và thời gian' },
  { icon: 'check_box', nameField: 'CheckBox', description: 'Với các trường có thể chọn nhiều lựa chọn' },
  { icon: 'email', nameField: 'Email', description: 'Với các trường chỉ nhập email' },
  { icon: 'call', nameField: 'PhoneNumber', description: 'Với các trường chỉ nhập số điện thoại' },
  { icon: 'arrow_drop_down', nameField: 'DropDownSelect', description: 'Với các trường chọn một lựa chọn' },
  { icon: 'alarm_on', nameField: 'Time', description: 'Với các trường nhập thời gian' },
  { icon: 'attach_money', nameField: 'Currency', description: 'Với các trường nhập số tiền' },
  { icon: 'attach_file', nameField: 'Attachment', description: 'Với các trường cần tệp đính kèm' },
  { icon: 'people', nameField: 'Assignees select', description: 'Với các trường chọn thành viên' },
  { icon: 'radio_button_checked', nameField: 'Radio', description:'Với các trường chọn một lựa chọn' },
]
