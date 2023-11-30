import { Route, Routes } from 'react-router-dom';
//protected route
import ProtectedRoute from './ProtectedRoute';
import CheckAuth from './CheckAuth';
//admin layout
import AdminLayout from '../layouts/AdminLayout';
//pages
import Dashboard from '../pages/dashboard/Dashboard';
import SignIn from '../pages/signin/SignIn';
import Student from '../pages/student/Student';
import UnderConstruction from '../components/UnderConstruction';
import NotFound from '../pages/404/NotFound';
//course
import Course from '../pages/course/Course';
//payment
import Payment from '../pages/payment/Payment';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CheckAuth />} />
      <Route
        path="/signin"
        element={
          <CheckAuth>
            <SignIn />
          </CheckAuth>
        }
      />
      <Route
        path="admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<NotFound />} />
        <Route path="course" element={<Course />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="students" element={<Student />} />
        <Route path="payment" element={<Payment />} />
        <Route path="report" element={<UnderConstruction />} />
        <Route path="settings" element={<UnderConstruction />} />
      </Route>
    </Routes>
  );
};
