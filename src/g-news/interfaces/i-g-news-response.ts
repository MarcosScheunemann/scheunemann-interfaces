export interface IGNewsResponse {
    articles: IGNewsResponseArticles[];
    totalArticles: number;
  }
  export interface IGNewsResponseArticles {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: {
      name: string;
      url: string;
    };
  }
  