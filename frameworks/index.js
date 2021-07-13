/**
 * 此文件默认挂载所有ElementUI组件，无需单独在需要的地方单独引入
 */
import Pagination from './elementui/pagination/index.js';
import Dialog from './elementui/dialog/index.js';
import Autocomplete from './elementui/autocomplete/index.js';
import Dropdown from './elementui/dropdown/index.js';
import DropdownMenu from './elementui/dropdown-menu/index.js';
import DropdownItem from './elementui/dropdown-item/index.js';
import Menu from './elementui/menu/index.js';
import Submenu from './elementui/submenu/index.js';
import MenuItem from './elementui/menu-item/index.js';
import MenuItemGroup from './elementui/menu-item-group/index.js';
import Input from './elementui/input/index.js';
import InputNumber from './elementui/input-number/index.js';
import Radio from './elementui/radio/index.js';
import RadioGroup from './elementui/radio-group/index.js';
import RadioButton from './elementui/radio-button/index.js';
import Checkbox from './elementui/checkbox/index.js';
import CheckboxButton from './elementui/checkbox-button/index.js';
import CheckboxGroup from './elementui/checkbox-group/index.js';
import Switch from './elementui/switch/index.js';
import Select from './elementui/select/index.js';
import Option from './elementui/option/index.js';
import OptionGroup from './elementui/option-group/index.js';
import Button from './elementui/button/index.js';
import ButtonGroup from './elementui/button-group/index.js';
import Table from './elementui/table/index.js';
import TableColumn from './elementui/table-column/index.js';
import DatePicker from './elementui/date-picker/index.js';
import TimeSelect from './elementui/time-select/index.js';
import TimePicker from './elementui/time-picker/index.js';
import Popover from './elementui/popover/index.js';
import Tooltip from './elementui/tooltip/index.js';
import MessageBox from './elementui/message-box/index.js';
import Breadcrumb from './elementui/breadcrumb/index.js';
import BreadcrumbItem from './elementui/breadcrumb-item/index.js';
import Form from './elementui/form/index.js';
import FormItem from './elementui/form-item/index.js';
import Tabs from './elementui/tabs/index.js';
import TabPane from './elementui/tab-pane/index.js';
import Tag from './elementui/tag/index.js';
import Tree from './elementui/tree/index.js';
import Alert from './elementui/alert/index.js';
import Notification from './elementui/notification/index.js';
import Slider from './elementui/slider/index.js';
import Loading from './elementui/loading/index.js';
import Icon from './elementui/icon/index.js';
import Row from './elementui/row/index.js';
import Col from './elementui/col/index.js';
import Upload from './elementui/upload/index.js';
import Progress from './elementui/progress/index.js';
import Spinner from './elementui/spinner/index.js';
import Message from './elementui/message/index.js';
import Badge from './elementui/badge/index.js';
import Card from './elementui/card/index.js';
import Rate from './elementui/rate/index.js';
import Steps from './elementui/steps/index.js';
import Step from './elementui/step/index.js';
import Carousel from './elementui/carousel/index.js';
import Scrollbar from './elementui/scrollbar/index.js';
import CarouselItem from './elementui/carousel-item/index.js';
import Collapse from './elementui/collapse/index.js';
import CollapseItem from './elementui/collapse-item/index.js';
import Cascader from './elementui/cascader/index.js';
import ColorPicker from './elementui/color-picker/index.js';
import Transfer from './elementui/transfer/index.js';
import Container from './elementui/container/index.js';
import Header from './elementui/header/index.js';
import Aside from './elementui/aside/index.js';
import Main from './elementui/main/index.js';
import Footer from './elementui/footer/index.js';
import Timeline from './elementui/timeline/index.js';
import TimelineItem from './elementui/timeline-item/index.js';
import Link from './elementui/link/index.js';
import Divider from './elementui/divider/index.js';
import Image from './elementui/image/index.js';
import Calendar from './elementui/calendar/index.js';
import Backtop from './elementui/backtop/index.js';
import InfiniteScroll from './elementui/infinite-scroll/index.js';
import PageHeader from './elementui/page-header/index.js';
import CascaderPanel from './elementui/cascader-panel/index.js';
import Avatar from './elementui/avatar/index.js';
import Drawer from './elementui/drawer/index.js';
import Popconfirm from './elementui/popconfirm/index.js';
// import locale from 'element-ui/src/locale';
import CollapseTransition from '../src/transitions/collapse-transition';
import './elementui/theme-chalk/src/index.scss';


const components = [
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  CollapseTransition
];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  console.log('注册elementUI组件')
  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$elLoading = Loading.service;
  Vue.prototype.$elMsgbox = MessageBox;
  Vue.prototype.$elAlert = MessageBox.alert;
  Vue.prototype.$elConfirm = MessageBox.confirm;
  Vue.prototype.$elPrompt = MessageBox.prompt;
  Vue.prototype.$elNotify = Notification;
  Vue.prototype.$elMessage = Message;
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);


export default {
  install,
  CollapseTransition,
  Loading,
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Notification,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm
};
