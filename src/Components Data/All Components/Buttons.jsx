import React from 'react';
import CodeAndCopy from '../../ReUseComponents/CodeAndCopy';

const Buttons = () => {
  return (
    <section id='buttons'>
      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Buttons</h3>

      <p className='text-gray-600 dark:text-gray-400 mb-4'>
        Our button components provide flexible and reusable button styles with various sizes, colors, and states.
      </p>

      <h4 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>Basic Usage</h4>
      <div className='space-x-2 mb-4'>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
          Primary Button
        </button>
        <button className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
          Secondary Button
        </button>
      </div>

      <CodeAndCopy
        codeString={`<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
  Primary Button
</button>

<button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
  Secondary Button
</button>`}
      />

      <h4 className='text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2'>Button Sizes</h4>
      <div className='space-x-2 mb-4'>
        <button className='px-2 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700'>
          Small
        </button>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
          Medium
        </button>
        <button className='px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
          Large
        </button>
      </div>

      <CodeAndCopy
        codeString={`<button className="px-2 py-1 text-sm bg-blue-600 text-white rounded-md">Small</button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-md">Medium</button>
<button className="px-6 py-3 bg-blue-600 text-white rounded-md">Large</button>`}
      />

      <h4 className='text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2'>Button Variants</h4>
      <div className='space-x-2 mb-4'>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
          Solid
        </button>
        <button className='px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50'>
          Outline
        </button>
        <button className='px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md'>
          Ghost
        </button>
      </div>

      <CodeAndCopy
        codeString={`<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
  Solid
</button>

<button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
  Outline
</button>

<button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
  Ghost
</button>`}
      />

      <div className='mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800'>
        <p className='text-yellow-800 dark:text-yellow-200'>
          <span className='font-medium'>Note:</span> All button components are fully customizable using Tailwind CSS classes.
        </p>
      </div>
    </section>
  );
};

export default Buttons;
