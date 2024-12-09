import React, { useState } from 'react';

const Introduction = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Reusify?",
            answer: "Reusify is a modern React UI component library that helps developers build beautiful and accessible web applications quickly. It combines React with Tailwind CSS and follows best practices for accessibility and performance."
        },
        {
            question: "Is Reusify free to use?",
            answer: "Yes, Reusify is completely free and open-source. You can use it in both personal and commercial projects without any licensing fees."
        },
        {
            question: "Do I need to know Tailwind CSS to use Reusify?",
            answer: "While basic knowledge of Tailwind CSS is helpful, it's not required. Our components work out of the box with default styling, but you can customize them using Tailwind classes if needed."
        },
        {
            question: "Does Reusify support TypeScript?",
            answer: "Yes, Reusify includes TypeScript definitions for all components, making it easy to use in TypeScript projects with full type safety and autocompletion."
        }
    ];

    return (
        <div className='z-10 pb-4'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Introduction</h2>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>
                Welcome to Reusify, a modern React UI component library designed to help you build beautiful and accessible web applications quickly and efficiently. Our components are built with React, Tailwind CSS, and follow best practices for accessibility and performance.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Key Features</h3>
            <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6'>
                <li>Modern React components built with JavaScript</li>
                <li>Fully customizable with Tailwind CSS</li>
                <li>Dark mode support out of the box</li>
                <li>Accessible and responsive by default</li>
                <li>Comprehensive documentation and examples</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Getting Started</h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
                To get started with Reusify, check out our installation guide and usage examples. You can install the package using npm or yarn, and start using our components right away in your React application.
            </p>

            <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mb-8'>
                <p className='text-blue-800 dark:text-blue-200'>
                    💡 Pro tip: Make sure to check out our Components section for detailed API documentation and live examples of each component.
                </p>
            </div>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Frequently Asked Questions</h3>
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                        <button
                            className="w-full px-4 py-3 text-left flex justify-between items-center"
                            onClick={() => toggleFaq(index)}
                        >
                            <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                            <svg
                                className={`w-5 h-5 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openFaq === index && (
                            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Introduction;
