import React, { useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';

const CodeAndCopy = ({ codeString, showLineBreaks = false }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        });
    };

    return (
        <div className='relative'>
            <div className='bg-gray-50 dark:bg-brandDark-900 p-4 rounded-lg border border-brandDark-200 dark:border-brandDark-500 relative'>
                <button
                    onClick={() => copyToClipboard(codeString)}
                    className='absolute top-2 right-2 p-2 hover:bg-gray-200 dark:hover:bg-brandDark-700 rounded-md'
                    title='Copy to clipboard'
                >
                    <AiOutlineCopy className='text-gray-600 dark:text-gray-400' />
                </button>
                <code className='text-sm text-gray-800 dark:text-gray-200'>
                    {showLineBreaks ? (
                        codeString.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))
                    ) : (
                        codeString
                    )}
                </code>
            </div>
            {copySuccess && <p className='mt-2 text-green-500 dark:text-green-400'>Copied!</p>}
        </div>
    );
};

export default CodeAndCopy;
