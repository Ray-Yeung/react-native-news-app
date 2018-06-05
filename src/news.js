const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d575b150799b4da087a4327eba7fa925';

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
};