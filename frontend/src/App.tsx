import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

// Layouts
import { MainLayout } from '@/layouts/MainLayout';
import { AuthLayout } from '@/layouts/AuthLayout';

// Pages
import { Dashboard } from '@/pages/Dashboard';
import { Students } from '@/pages/Students';
import { Courses } from '@/pages/Courses';
import { Settings } from '@/pages/Settings';
import { Finance } from '@/pages/Finance';
import { HR } from '@/pages/HR';
import { Assessment } from '@/pages/Assessment';
import { Login } from '@/pages/auth/Login';
import { NotFound } from '@/pages/NotFound';

// New Pages
import { Analytics } from '@/pages/Analytics';
import { Programs } from '@/pages/Programs';
import { Schools } from '@/pages/Schools';
import { Technology } from '@/pages/Technology';
import { Facilities } from '@/pages/Facilities';
import { Transportation } from '@/pages/Transportation';
import { FoodServices } from '@/pages/FoodServices';

// Protected Route Component
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              
              {/* Academic Routes */}
              <Route path="/students" element={<Students />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/programs" element={<Programs />} />
              
              {/* Administration Routes */}
              <Route path="/finance" element={<Finance />} />
              <Route path="/hr" element={<HR />} />
              
              {/* Analytics */}
              <Route path="/analytics" element={<Analytics />} />
              
              {/* Operations Routes */}
              <Route path="/schools" element={<Schools />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/transportation" element={<Transportation />} />
              <Route path="/food-services" element={<FoodServices />} />
              
              {/* Settings */}
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App; 