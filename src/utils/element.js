import {
  Slider,
  Popover,
  Form,
  Row,
  Col,
  Input,
  FormItem,
  DatePicker,
  TimePicker,
  Select,
  Radio,
  Option,
  MessageBox,
  Message,
  Upload,
  Button,
  Loading,
  Tooltip,
  Rate,
  Image,
  Tag,
  Progress,
  Collapse,
  CollapseItem,
  ColorPicker,
  Table,
  TableColumn,
  Dialog,
  Checkbox,
  CheckboxGroup,
  Tabs,
  TabPane,
} from "element-ui";

export const installElement = (Vue) => {
  Vue.use(Checkbox);
  Vue.use(CheckboxGroup);
  Vue.use(Slider);
  Vue.use(Popover);
  Vue.use(Form);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Input);
  Vue.use(FormItem);
  Vue.use(DatePicker);
  Vue.use(Select);
  Vue.use(Radio);
  Vue.use(Option);
  Vue.use(TimePicker);
  Vue.use(Upload);
  Vue.use(Button);
  Vue.use(Rate);
  Vue.use(Image);
  Vue.use(Loading.directive);
  Vue.use(Tooltip);
  Vue.use(Tag);
  Vue.use(Progress);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(ColorPicker);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(Dialog);
  Vue.use(Tabs);
  Vue.use(TabPane);
  Vue.component(MessageBox.name, MessageBox);
  Vue.component(Message.name, Message);
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$message = Message;
  Vue.prototype.$loading = Loading.service;
};
