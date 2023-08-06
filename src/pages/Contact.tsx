import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: "url('https://example.com/path-to-your-image.jpg')"}}></div>

            <div className="relative bg-gray-100 bg-opacity-75 min-h-screen flex items-center justify-center px-4">
                <div className="bg-white p-6 rounded-lg shadow-xl w-full sm:p-8 md:p-12 lg:w-3/4 xl:w-1/2">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="mb-8">Get in touch with our team.</p>

                    <form>
                        <label className="block mb-4">
                            <span className="text-gray-700">Name</span>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700">Email</span>
                            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700">Message</span>
                            <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                        </label>

                        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
