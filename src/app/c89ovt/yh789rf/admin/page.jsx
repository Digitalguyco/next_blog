// AdminPage.jsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../firebase/config";
import DashNavBar from "@/app/components/DashNavbar";
import Dashboard from "./Dashboard";
import ContentPage from "./Content";

const AdminPage = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        router.push('/login'); // Redirect to login page if not authenticated
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state
  }

  return (
    <div className="w-full overflow-x-hidden h-[100vh] flex">
      <DashNavBar setPage={setPage} page={page} />
      {page === 1 && <Dashboard />}
      {page === 2 && <ContentPage />}
    </div>
  );
};

export default AdminPage;
