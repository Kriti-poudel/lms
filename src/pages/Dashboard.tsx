import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LearnerDashboard from '@/components/LearnerDashboard';
import TeacherDashboard from '@/components/TeacherDashboard';
import UserProfileSidebar from '@/components/UserProfileSidebar';

const Dashboard = () => {
  // This should come from your auth context/state management
  const [userRole] = useState('teacher'); // or 'teacher'

  return (
    <>
      <Helmet>
        <title>{userRole === 'teacher' ? 'Teacher Dashboard' : 'My Learning'} | CourseSpace</title>
        <meta name="description" content="Access your personalized dashboard" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-9">
            {userRole === 'teacher' ? <TeacherDashboard /> : <LearnerDashboard />}
          </div>
          <div className="md:col-span-3">
            <UserProfileSidebar role={userRole as 'learner' | 'teacher'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
