import { Article } from '../types';

let articles: Article[] = [
    {
        id: "1",
        title: "Article 1",
        content: "This is Article 1",
        author: "Author 1"
    },
    {
        id: "2",
        title: "Article 2",
        content: "This is Article 2",
        author: "Author 2"
    }
];

export const fetchArticles = async (): Promise<Article[]> => {
    // Simulate a delay with setTimeout
    return new Promise(resolve => setTimeout(() => resolve(articles), 1000));
};

export const createArticle = async (article: Article): Promise<Article> => {
    articles.push(article);
    return new Promise(resolve => setTimeout(() => resolve(article), 1000));
};

export const updateArticle = async (updatedArticle: Article): Promise<Article> => {
    articles = articles.map(article => article.id === updatedArticle.id ? updatedArticle : article);
    return new Promise(resolve => setTimeout(() => resolve(updatedArticle), 1000));
};

export const deleteArticle = async (articleId: string): Promise<void> => {
    articles = articles.filter(article => article.id !== articleId);
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
};

