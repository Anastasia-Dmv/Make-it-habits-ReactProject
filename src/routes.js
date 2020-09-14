import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/HomePage")),
    private: false,
    restricted: false,
  },
  {
    path: "/profile",
    label: "Profile",
    exact: true,
    component: lazy(() => import("./views/ProfilePage")),
    private: true,
    restricted: true,
  },
  {
    path: "/checklist",
    label: "CheckList",
    exact: true,
    component: lazy(() => import("./views/CheckListPage")),
    private: true,
    restricted: true,
  },
  {
    path: "/notifications",
    label: "Notifications",
    exact: true,
    component: lazy(() => import("./views/NotificationsPage")),
    private: true,
    restricted: true,
  },
  {
    path: "/achievements",
    label: "Achievements",
    exact: true,
    component: lazy(() => import("./views/AchievementsPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/subscriptions",
    label: "Subscriptions",
    exact: true,
    component: lazy(() => import("./views/SubscriptionsPage")),
    private: true,
    restricted: true,
  },
];
