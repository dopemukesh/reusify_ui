import React from 'react';
import CodeAndCopy from '../../ReUseComponents/CodeAndCopy';

const Usage = () => {
    return (
        <section id='usage'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Usage</h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
                Import components directly from the package and use them in your React application.
            </p>
            <CodeAndCopy 
                codeString={`import { Button } from '@your-library/components';\n\nfunction App() {\n  return <Button variant="primary">Click me</Button>;\n}`}
                showLineBreaks={true}
            />
            <textarea className='w-full h-24 p-2 rounded-md border border-brandDark-200 dark:border-brandDark-500 mt-4'>
                
            </textarea>
        </section>
    );
};

export default Usage;
