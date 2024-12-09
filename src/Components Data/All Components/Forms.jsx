import React, { useState } from 'react';
import CodeAndCopy from '../../ReUseComponents/CodeAndCopy';
const Forms = () => {
    const [basicFormData, setBasicFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleBasicSubmit = (e) => {
        e.preventDefault();
        console.log('Basic form submitted:', basicFormData);
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', contactFormData);
    };

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-3xl font-bold mb-4 text-brandDark-800 dark:text-white">Form Components</h1>
                <p className="text-brandDark-600 dark:text-brandDark-300 mb-8">
                    A collection of responsive and customizable form components for your web applications.
                </p>
            </div>

            {/* Basic Form */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-brandDark-800 dark:text-white">Basic Form</h2>
                <div className="p-6 bg-white dark:bg-brandDark-900 rounded-xl border border-brandDark-200 dark:border-brandDark-700">
                    <form onSubmit={handleBasicSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-brandDark-700 dark:text-brandDark-300">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-4 py-2 rounded-lg border border-brandDark-300 dark:border-brandDark-600 bg-white dark:bg-brandDark-800 text-brandDark-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
                                value={basicFormData.username}
                                onChange={(e) => setBasicFormData({...basicFormData, username: e.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-brandDark-700 dark:text-brandDark-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 rounded-lg border border-brandDark-300 dark:border-brandDark-600 bg-white dark:bg-brandDark-800 text-brandDark-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
                                value={basicFormData.email}
                                onChange={(e) => setBasicFormData({...basicFormData, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-brandDark-700 dark:text-brandDark-300">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 rounded-lg border border-brandDark-300 dark:border-brandDark-600 bg-white dark:bg-brandDark-800 text-brandDark-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
                                value={basicFormData.password}
                                onChange={(e) => setBasicFormData({...basicFormData, password: e.target.value})}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Code Example */}
                <CodeAndCopy codeString={`const BasicForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                className="w-full px-4 py-2 rounded-lg"
                value={formData.username}
                onChange={(e) => setFormData({
                    ...formData,
                    username: e.target.value
                })}
            />
            {/* Other inputs */}
            <button type="submit">
                Submit
            </button>
        </form>
    );
};`} />
            </section>

            {/* Contact Form */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-brandDark-800 dark:text-white">Contact Form</h2>
                <div className="p-6 bg-white dark:bg-brandDark-900 rounded-xl border border-brandDark-200 dark:border-brandDark-700">
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-brandDark-700 dark:text-brandDark-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-brandDark-300 dark:border-brandDark-600 bg-white dark:bg-brandDark-800 text-brandDark-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
                                    value={contactFormData.name}
                                    onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label htmlFor="contactEmail" className="block mb-2 text-sm font-medium text-brandDark-700 dark:text-brandDark-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="contactEmail"
                                    className="w-full px-4 py-2 rounded-lg border border-brandDark-300 dark:border-brandDark-600 bg-white dark:bg-brandDark-800 text-brandDark-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
                                    value={contactFormData.email}
                                    onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-brandDark-700 dark:text-brandDark-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-2 rounded-lg border border-brandDark-300 dark:border-brandDark-600 bg-white dark:bg-brandDark-800 text-brandDark-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
                                value={contactFormData.subject}
                                onChange={(e) => setContactFormData({...contactFormData, subject: e.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-brandDark-700 dark:text-brandDark-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 rounded-lg border border-brandDark-300 dark:border-brandDark-600 bg-white dark:bg-brandDark-800 text-brandDark-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
                                value={contactFormData.message}
                                onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Code Example */}
                <CodeAndCopy codeString={`const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({
                        ...formData,
                        name: e.target.value
                    })}
                />
                {/* Other inputs */}
            </div>
            <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg"
                value={formData.message}
                onChange={(e) => setFormData({
                    ...formData,
                    message: e.target.value
                })}
            ></textarea>
            <button type="submit">
                Send Message
            </button>
        </form>
    );
};`} />
            </section>
        </div>
    );
};

export default Forms;
