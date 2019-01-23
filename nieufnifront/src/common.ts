import { API_BASE } from '@/config';

export interface Article {
    id: string;
    title: string;
    date: string;
    author: string;
    markdown_text: string;
    rendered_text: string;
}

export function emptyArticle(): Article {
    return {
        id: '',
        title: '',
        date: '',
        author: '',
        markdown_text: '',
        rendered_text: '',
    }
}

export async function getArticle(id: string): Promise<Article> {
    const response = await fetch(`${API_BASE}/artykuly/${id}`);
    return await response.json();
}

export async function allArticles(): Promise<Article[]> {
    const response = await fetch(`${API_BASE}/artykuly`);
    return await response.json();
}