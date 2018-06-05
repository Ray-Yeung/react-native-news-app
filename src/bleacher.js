const url = 'https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=d575b150799b4da087a4327eba7fa925';

export async function getBleacher() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
};