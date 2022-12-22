import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Thống kê',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Chức năng'
  },
  {
    name: 'Quản lý người dùng',
    url: '/user',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Danh sách',
        url: '/user/list'
      },
      {
        name: 'Tạo người dùng',
        url: '/user/create'
      },
    ]
  },
  {
    name: 'Quản lý danh mục',
    url: '/categories',
    iconComponent: { name: 'cil-tags' },
    children: [
      {
        name: 'Danh sách',
        url: '/categories/list'
      },
      {
        name: 'Tạo danh mục',
        url: '/categories/create'
      },
    ]
  },
  {
    name: 'Quản lý nhà đồng hành',
    url: '/sponsor',
    iconComponent: { name: 'cil-group' },
    children: [
      {
        name: 'Danh sách',
        url: '/sponsor/list'
      },
      {
        name: 'Tạo nhà đồng hành',
        url: '/sponsor/create'
      },
    ]
  },
  {
    name: 'Quản lý chiến dịch',
    url: '/campaign',
    iconComponent: { name: 'cil-fire' },
    children: [
      {
        name: 'Danh sách',
        url: '/campaign/list'
      },
      {
        name: 'Tạo chiến dịch',
        url: '/campaign/create'
      },
    ]
  },
  {
    name: 'Quản lý bài viết',
    url: '/article',
    iconComponent: { name: 'cil-description' },
    children: [
      {
        name: 'Danh sách',
        url: '/article/list'
      },
      {
        name: 'Tạo bài viết',
        url: '/article/create'
      },
    ]
  },
  {
    name: 'Quản lý bình luận',
    url: '/comment',
    iconComponent: { name: 'cil-comment-bubble' },
    children: [
      {
        name: 'Danh sách',
        url: '/comment/list'
      },
    ]
  },
  {
    name: 'Quản lý FAQ',
    url: '/faq',
    iconComponent: { name: 'cil-chat-bubble' },
    children: [
      {
        name: 'Danh sách',
        url: '/faq/list'
      },
      {
        name: 'Tạo người dùng',
        url: '/faq/create'
      },
    ]
  },
  {
    name: 'Quản lý kênh thanh toán',
    url: '/payment-channel',
    iconComponent: { name: 'cil-dollar' },
    children: [
      {
        name: 'Danh sách',
        url: '/payment-channel/list'
      },
      {
        name: 'Tạo kênh thanh toán',
        url: '/payment-channel/create'
      },
    ]
  },
  {
    name: 'Lịch sử giao dịch',
    url: '/transaction',
    iconComponent: { name: 'cil-print' },
    children: [
      {
        name: 'Danh sách',
        url: '/transaction/list'
      },
    ]
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/base/cards'
      },
      {
        name: 'Carousel',
        url: '/base/carousel'
      },
      {
        name: 'Collapse',
        url: '/base/collapse'
      },
      {
        name: 'List Group',
        url: '/base/list-group'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs'
      },
      {
        name: 'Pagination',
        url: '/base/pagination'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder'
      },
      {
        name: 'Popovers',
        url: '/base/popovers'
      },
      {
        name: 'Progress',
        url: '/base/progress'
      },
      {
        name: 'Spinners',
        url: '/base/spinners'
      },
      {
        name: 'Tables',
        url: '/base/tables'
      },
      {
        name: 'Tabs',
        url: '/base/tabs'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/forms/range'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
