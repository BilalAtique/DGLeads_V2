import { Navigate, useRoutes, Route } from 'react-router-dom';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';

// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import Calendar from './pages/CalendarPage';
import CalNowPage from './pages/CallNowPage';
import CallFirst from './components/call/first';

// ----------------------------------------------------------------------

const session = { useSession }

export default function Router() {
  const { isLoading } = useSessionContext();
  const session = { useSession }
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'contacts', element: <UserPage /> },
        { path: 'calendar', element: <Calendar /> },
        { path: 'call', element: <CalNowPage /> },
        { path: 'callf', element: <CallFirst /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
  if (session) {
    return routes;
  }

}
