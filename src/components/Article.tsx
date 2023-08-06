import React from 'react';
import { Article } from '../types';

interface ArticleProps {
    article: Article;
}

const ArticleComponent: React.FC<ArticleProps> = ({ article }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold">{article.title}</h2>
            <p className="mt-2 text-sm sm:text-base">{article.content}</p>
            <p className="mt-2 text-gray-500 text-xs sm:text-sm">Author: {article.author}</p>
        </div>
    );
};

export default ArticleComponent;
