import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-6 px-4 sm:py-12">
            <div className="max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                <div className="px-4 py-2">
                    <h1 className="text-gray-800 text-3xl font-semibold">About Article</h1>
                </div>
                <div className="px-4 py-2 mt-2 text-gray-600">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reiciendis, nulla, dolorem, corporis dicta dolorum tempore doloribus
                        porro quo velit deleniti fugiat voluptatem non placeat asperiores sequi
                        quam ipsam veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Sapiente exercitationem, consectetur odio accusamus aspernatur quas,
                        mollitia ea quos reprehenderit natus voluptate illum quod nulla.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
