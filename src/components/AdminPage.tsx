import React, { useState } from 'react';

const AdminPage = () => {
  const [stats, setStats] = useState<any>(null);

  const generateDiscountCode = async () => {
    const response = await fetch('http://localhost:3001/admin/generate-discount', { method: 'POST' });
    const data = await response.json();
    alert(data.message);
  };

  const fetchStats = async () => {
    const response = await fetch('http://localhost:3001/admin/stats');
    const data = await response.json();
    setStats(data);
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <button onClick={generateDiscountCode}>Generate Discount Code</button>
      <button onClick={fetchStats}>View Stats</button>

      {stats && (
        <div>
          <h3>Order Stats</h3>
          <p>Total Items Sold: {stats.totalItems}</p>
          <p>Total Amount: ${stats.totalAmount}</p>
          <p>Total Discount Given: ${stats.totalDiscount}</p>
          <h4>Discount Codes</h4>
          {stats.discountCodes.map((code: any, index: number) => (
            <p key={index}>{code.code}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
