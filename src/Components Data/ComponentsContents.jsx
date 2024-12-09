import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Buttons from './All Components/Buttons';
import Forms from './All Components/Forms';
// import Cards from './All Components/Cards';
import Accordions from './All Components/Accordions';

const ComponentsContents = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='max-w-4xl px-4 py-8'>
                <Routes>
                    <Route path="buttons" element={<Buttons />} />
                    <Route index element={<Navigate to="/components/buttons" replace />} />
                    <Route path="forms" element={<Forms />} />
                    <Route path="accordions" element={<Accordions />} />
                    {/* <Route path="cards" element={<Cards />} /> */}
                </Routes>
            </div>
        </div>
    );
};

export default ComponentsContents;
