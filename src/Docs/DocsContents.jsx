import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Introduction from './DocsData/Introduction';
import Installation from './DocsData/Installation';
import Usage from './DocsData/Usage';

const DocsContents = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='max-w-4xl px-3 py-8'>
                <Routes>
                    <Route path="introduction" element={<Introduction />} />
                    <Route index element={<Navigate to="/docs/introduction" replace />} />
                    <Route path="installation" element={<Installation />} />
                    <Route path="usage" element={<Usage />} />
                </Routes>
            </div>
        </div>
    );
};

export default DocsContents;
