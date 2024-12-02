import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "My Plan",
    path: "/Myplan",
    icon: <UserIcon />,
  },

  {
    id: 3,
    name: "Subscription",
    path: "/subscrition",
    icon: <LayoutIcon />,
  },
  {
    id: 4,
    name: "Watch later",
    path: "/watchlater",
    icon: <CalendarIcon />,
  },
  {
    id: 5,
    name: "History",
    path: "history",
    icon: <InvoiceIcon />,
  },
  
  // {
  //   id: 6,
  //   name: "roles & permissions",
  //   path: "roles",
  //   icon: <RolesIcon />,
  // },
  // {
  //   id: 7,
  //   name: "pages",
  //   path: "pages",
  //   icon: <PagesIcon />,
  // },
  {
    id: 8,
    name: "Change Password",
    path: "changePassword",
    icon: <AuthIcon />,
  },
  // {
  //   id: 9,
  //   name: "wizard examples",
  //   path: "wizard",
  //   icon: <WizardIcon />,
  // },
  {
    id: 10,
    name: "LogOut",
    path: "modal",
    icon: <ModalIcon />,
  },
];
