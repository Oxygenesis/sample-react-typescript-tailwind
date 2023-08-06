import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-center text-white py-4 sm:py-8">
            <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Article. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
