import React, { useState } from "react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [formDetails, setFormDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Details</h2>
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              name="name"
              value={formDetails.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formDetails.cardNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              placeholder="1234 5678 9123 4567"
              required
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formDetails.expiryDate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={formDetails.cvv}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
                placeholder="123"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}
