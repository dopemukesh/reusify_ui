import { useState } from 'react';
import CodeAndCopy from '../../ReUseComponents/CodeAndCopy';

const Accordions = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [activeTab, setActiveTab] = useState('preview');

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Is it accessible?',
            content: 'Yes, this accordion component is built with accessibility in mind. It uses proper ARIA attributes and can be navigated using keyboard controls.'
        },
        {
            title: 'Is it styled?',
            content: 'Yes, the accordion comes with a clean, modern design that can be customized using Tailwind CSS classes to match your project\'s theme.'
        },
        {
            title: 'Is it animated?',
            content: 'Yes, smooth transitions are included when expanding and collapsing accordion items for a polished user experience.'
        }
    ];

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-3xl font-bold mb-4 text-brandDark-800 dark:text-white">Accordion Components</h1>
                <p className="text-brandDark-600 dark:text-brandDark-300 mb-8">
                    A vertically stacked set of interactive headings that reveal additional content when activated.
                </p>
            </div>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-brandDark-800 dark:text-white">Basic Accordion</h2>
                
                <div className="border border-brandDark-200 dark:border-brandDark-700 rounded-xl overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-brandDark-200 dark:border-brandDark-700">
                        <button
                            className={`px-4 py-2 ${activeTab === 'preview' ? 'bg-brandDark-50 dark:bg-brandDark-800 text-brandDark-800 dark:text-white' : 'text-brandDark-600 dark:text-brandDark-400'}`}
                            onClick={() => setActiveTab('preview')}
                        >
                            Preview
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'code' ? 'bg-brandDark-50 dark:bg-brandDark-800 text-brandDark-800 dark:text-white' : 'text-brandDark-600 dark:text-brandDark-400'}`}
                            onClick={() => setActiveTab('code')}
                        >
                            Code
                        </button>
                    </div>

                    {/* Content */}
                    {activeTab === 'preview' ? (
                        <div className="p-6 bg-white dark:bg-brandDark-900">
                            <div className="space-y-2">
                                {accordionData.map((item, index) => (
                                    <div key={index} className="border border-brandDark-200 dark:border-brandDark-700 rounded-lg">
                                        <button
                                            className="w-full px-4 py-3 flex justify-between items-center text-left text-brandDark-800 dark:text-white hover:bg-brandDark-50 dark:hover:bg-brandDark-800 rounded-lg transition-colors"
                                            onClick={() => handleAccordionClick(index)}
                                            aria-expanded={openAccordion === index}
                                        >
                                            <span className="font-medium">{item.title}</span>
                                            <svg
                                                className={`w-5 h-5 transition-transform ${openAccordion === index ? 'rotate-180' : ''}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openAccordion === index && (
                                            <div className="px-4 py-3 text-brandDark-600 dark:text-brandDark-300">
                                                {item.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <CodeAndCopy 
                                codeString={`const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            title: 'Is it accessible?',
            content: 'Yes, it uses proper ARIA attributes.'
        },
        {
            title: 'Is it styled?',
            content: 'Yes, it can be customized with Tailwind CSS.'
        }
    ];

    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index} className="border rounded-lg">
                    <button
                        className="w-full px-4 py-3 flex justify-between items-center"
                        onClick={() => handleClick(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span>{item.title}</span>
                        <svg className={\`w-5 h-5 \${openIndex === index ? 'rotate-180' : ''}\`}>
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {openIndex === index && (
                        <div className="px-4 py-3">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};`} />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Accordions;
