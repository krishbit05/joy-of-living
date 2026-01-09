"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    enquiryType: "",
    referralSource: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later send to backend
    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* First Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          First Name *
        </label>
        <input
          name="firstName"
          required
          placeholder="Enter first name"
          className="w-full border p-4 rounded"
          onChange={handleChange}
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Last Name *
        </label>
        <input
          name="lastName"
          required
          placeholder="Enter last name"
          className="w-full border p-4 rounded"
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="example@email.com"
          className="w-full border p-4 rounded"
          onChange={handleChange}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Phone Number *
        </label>
        <input
          name="phone"
          required
          placeholder="Enter phone number"
          className="w-full border p-4 rounded"
          onChange={handleChange}
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Enquiry Type *
        </label>
        <select
          name="enquiryType"
          required
          className="w-full border p-4 rounded bg-white"
          onChange={handleChange}
        >
          <option value="">Select enquiry type</option>
          <option>NDIS Participant</option>
          <option>Family / Carer</option>
          <option>Support Coordinator</option>
          <option>Healthcare Professional</option>
          <option>General Enquiry</option>
        </select>
      </div>

      {/* Service Required */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Service Required *
        </label>
        <select
          name="service"
          required
          className="w-full border p-4 rounded bg-white"
          onChange={handleChange}
        >
          <option value="">Select a service</option>
          <option>Community Nursing</option>
          <option>After Hospital Care</option>
          <option>Daily Living Skills</option>
          <option>Supported Independent Living</option>
          <option>Domestic Assistance</option>
          <option>In Home Support</option>
          <option>Support Coordination</option>
        </select>
      </div>

      {/* Referral Source */}
      <div>
        <label className="block text-sm font-medium mb-1">
          How did you hear about us?
        </label>
        <select
          name="referralSource"
          className="w-full border p-4 rounded bg-white"
          onChange={handleChange}
        >
          <option value="">Select option</option>
          <option>Google</option>
          <option>NDIS</option>
          <option>Support Coordinator</option>
          <option>Friend / Family</option>
          <option>Social Media</option>
        </select>
      </div>

      {/* Message */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          placeholder="Please provide any additional details about your enquiry"
          className="w-full border p-4 rounded"
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-primary text-white py-4 rounded font-semibold hover:bg-teal-700 transition"
        >
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}
