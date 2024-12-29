// import React from 'react'
 import React, { useState } from 'react';
const UserDashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to 'true' if logged in, 'false' if logged out
    const handleLogout = () => {
        setIsLoggedIn(false); // Handle the logout process
      };

  return (
    <>
      <h1>Hello {isLoggedIn ? "admin" : "guest"}!</h1>
      {!isLoggedIn ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <p>
          From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
        </p>
      )}

    </>
  )
}

export default UserDashboard