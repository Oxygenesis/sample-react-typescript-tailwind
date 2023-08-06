import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
    return (
        <ParallaxProvider>
            <div className="min-h-screen bg-gray-100 py-6 sm:py-12">
                <Helmet>
                    <title>Home Page - My App</title>
                </Helmet>
                <div className="px-4 sm:relative sm:py-3 sm:max-w-xl sm:mx-auto">
                    <div className="bg-white shadow-lg sm:rounded-3xl sm:p-8">
                        <h1 className="mb-4 text-lg sm:text-2xl font-bold text-center">Welcome to Article</h1>
                        <p className="mb-4 text-center sm:text-base">Discover a world of articles on various topics.</p>
                        <Carousel
                            autoPlay
                            interval={3000}
                            infiniteLoop
                            showStatus={false}
                            showThumbs={false}>
                            <div>
                                <img src="https://via.placeholder.com/400x200" alt="Slider 1" />
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/400x200" alt="Slider 2" />
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/400x200" alt="Slider 3" />
                            </div>
                        </Carousel>
                        <Parallax className="custom-class" rotateX={[0, 0]} rotateY={[0, -20]}>
                            <img src="https://via.placeholder.com/400x200" alt="Parallax 1" />
                        </Parallax>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default Home;
