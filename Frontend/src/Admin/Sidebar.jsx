import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Sidebar() {
  const navigate = useNavigate();

  const AdminMenu = [
    { id: 0, label: "Overview", path: "/dashboard" },

  ];

  const handleLogout = async () => {
    if (!window.confirm("Are you sure you want to log out?")) return;
    try {
      await apiClient.post("/sfs-app/admin/admin-logout");
      sessionStorage.removeItem("Admin");
      toast.success("Session closed safely");
      navigate("/login");
      window.location.reload();
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <>
      <div className="w-72 h-screen p-50">
        
      </div>

    </>
  );
}

export default Sidebar;