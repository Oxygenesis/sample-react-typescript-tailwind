import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../services/articleService';
import ArticleComponent from '../components/Article';
import { Article } from '../types';

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticlesData = async () => {
      const articlesData = await fetchArticles();
      setArticles(articlesData);
    };

    fetchArticlesData().then(r => console.log(r));
  }, []);

  return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto px-4 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-center">Articles</h1>
            <div className="space-y-6">
              {articles.map((article) => (
                  <ArticleComponent key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Articles;
