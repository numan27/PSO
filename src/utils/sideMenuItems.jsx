/** @format */
import { Link } from "react-router-dom";
import IMAGES from "../../../assets/images";
import PATH from "../../../utils/path";

const ADMIN_MENU = [
  {
    key: PATH.ADMIN_DASHBOARD,
    icon: (
      <img
        src={IMAGES.DASHBOARD_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="text-black" to={PATH.ADMIN_DASHBOARD}>
        Dashboard
      </Link>
    ),
  },
  {
    // key: PATH.ADMIN_DASHBOARD,
    icon: (
      <img
        src={IMAGES.COMPANY_MANAGEMENT_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="text-black" to={PATH.ADMIN_COMPANY_MANAGEMENT_LIST}>
        Company Management
      </Link>
    ),
  },
  {
    key: PATH.ADMIN_USER_MANAGEMENT_LIST,
    icon: (
      <img
        src={IMAGES.USER_MANAGEMENT_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="text-black" to={PATH.ADMIN_USER_MANAGEMENT_LIST}>
        User Management
      </Link>
    ),
  },
  {
    key: PATH.DECK_LIST,
    icon: (
      <img src={IMAGES.DECK_ICON} alt="page-icon" className="side-menu-icon" />
    ),
    label: (
      <Link className="text-black" to={PATH.DECK_LIST}>
        Decks
      </Link>
    ),
  },
  {
    key: PATH.ADMIN_SUPPORT,
    icon: (
      <img
        src={IMAGES.SUPPORT_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="text-black" to={PATH.ADMIN_SUPPORT}>
        Support
      </Link>
    ),
  },
];

const USER_MENU = [
  {
    key: PATH.USER_DASHBOARD,
    icon: (
      <img
        src={IMAGES.DASHBOARD_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="text-black" to={PATH.USER_DASHBOARD}>
        Dashboard
      </Link>
    ),
  },
  {
    key: PATH.DECK_LIST,
    icon: (
      <img src={IMAGES.DECK_ICON} alt="page-icon" className="side-menu-icon" />
    ),
    label: (
      <Link className="text-black" to={PATH.DECK_LIST}>
        Decks
      </Link>
    ),
  },
  {
    key: PATH.USER_MEETING_LIST,
    icon: (
      <img
        src={IMAGES.MEETING_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="text-black" to={PATH.USER_MEETING_LIST}>
        Meetings
      </Link>
    ),
  },
];

const SIDE_MENU_LIST = {
  USER: USER_MENU,
  ADMIN: ADMIN_MENU,
};

export default SIDE_MENU_LIST;
