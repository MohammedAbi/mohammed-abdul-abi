import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });

    console.log("Form submitted:", formData);

    setTimeout(() => setFormStatus(null), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f1f1f1] dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md animate-fade-in h-full"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    mohammedabdulabi@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    + (47) 458 45 550
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div className="w-full">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Stavanger, Rogaland
                  </p>
                  {/* Google Map */}
                  <div className="rounded overflow-hidden shadow-lg">
                    <iframe
                      title="Stavanger Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.4346998646815!2d5.732263876068883!3d58.96997557897901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b86f34733df6f%3A0x5c76d758228c8a9e!2sStavanger!5e0!3m2!1sen!2sno!4v1701459959462!5m2!1sen!2sno"
                      width="100%"
                      height="200"
                      className="rounded"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md animate-fade-in"
          >
            {formStatus && (
              <div
                className={`p-4 rounded-md ${
                  formStatus.success
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full py-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  formErrors.name
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } border-[1px] border-gray-300`}
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {formErrors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm  font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full py-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  formErrors.email
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } border-[1px] border-gray-300`}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  formErrors.message
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } border-[1px] border-gray-300`}
              />
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {formErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
