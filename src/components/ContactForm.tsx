import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { error } from 'console';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        'https://us-central1-tci-admin-14fab.cloudfunctions.net/sendEmail/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.text();
      console.log("Email send result:", response);

      if (!response.ok) throw new Error(result);

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you soon."
      });

      setFormData({
        name: '',
        email: '',
        department: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tci-primary"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tci-primary"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="department" className="block mb-2 font-medium text-gray-700">Department</label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tci-primary"
          required
        >
          <option value="" disabled>Select a department</option>
          <option value="Ed-Tech">Ed-Tech</option>
          <option value="Fin-Tech">Fin-Tech</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="General-Inquiry">General Inquiry</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tci-primary"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-primary w-full flex justify-center items-center"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : 'Submit Message'}
      </button>
    </form>
  );
};

export default ContactForm;