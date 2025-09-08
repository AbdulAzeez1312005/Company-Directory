import React from "react";

function Profile({ user }) {
  if (!user) {
    return (
      <div className="container mt-5">
        <h3 className="text-center">You are not logged in</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">My Profile</h2>
      <div className="card shadow-sm p-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role || "User"}</p>
      </div>
    </div>
  );
}

export default Profile;
