import { BrowserRouter, Route, Routes } from "react-router-dom";
import { redirect } from "react-router-dom/dist";
import { UserLayout } from "src/layouts/user";
import { ArticlePage } from "src/pages/article";
import { DashboardPage } from "src/pages/dashboard";
import { MonitoringPage } from "src/pages/monitoring";

export default function UserRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/monitoring" element={<MonitoringPage />} />
          <Route path="/article" element={<ArticlePage />} />

          {/* all path redirect to path "/" */}
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
