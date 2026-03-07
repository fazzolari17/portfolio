import React from 'react';
import { Home, BarChart2, Users, Settings, Truck, LogOut } from 'lucide-react';
import DashboardHome from '../components/dashboard/dashboard pages/Home';
import Mileage from '../components/dashboard/dashboard pages/Mileage';
import Analytics from '../components/dashboard/dashboard pages/Analytics';
import SettingsComponent from '../components/dashboard/dashboard pages/Settings';
import Clients from '../components/dashboard/dashboard pages/Clients';

export const dashboardMenuItems = {
  home: {
    name: 'home',
    icon: Home,
    route: '/dashboard/home',
    component: <DashboardHome />,
  },
  analytics: {
    name: 'analytics',
    icon: BarChart2,
    route: '/dashboard/analytics',
    component: <Analytics />,
  },
  team: {
    name: 'clients',
    icon: Users,
    route: '/dashboard/clients',
    component: <Clients />,
  },
  mileage: {
    name: 'mileage',
    icon: Truck,
    route: '/dashboard/mileage',
    component: <Mileage />,
  },
  settings: {
    name: 'settings',
    icon: Settings,
    route: '/dashboard/settings',
    component: <SettingsComponent />,
  },
  logout: {
    name: 'logout',
    icon: LogOut,
  },
};
