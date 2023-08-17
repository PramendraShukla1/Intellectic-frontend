import React, { useState, useEffect } from 'react';


const NewsCards = () => {
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        const apiKey = 'ef4c2059e94c4f2b84e74b9843d5d177';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
    
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => setNewsData(data.articles))
          .catch(error => console.error('Error fetching news:', error));
      }, []);
    


  return (
 
    <>
    
    <div className="container my-24 mx-auto md:px-6">
      
      <section className="mb-32 text-center md:text-left">
        <h2 className="mb-12 text-center text-3xl font-bold">Latest articles</h2>
        {newsData.map(article => (<div key={article.title} className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
          <div className="mb-6 md:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <img
                src={article.urlToImage}
                className="w-full"
                alt="India"
              />
              <a href={article.url} target='_blank'>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-2xl font-bold">{article.title}</h3>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
             
            </div>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>{article.publishedAt}</u>&nbsp;  by &nbsp; 
                <a href="#!">{article.author}</a>
              </small>
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
            {article.description}
            </p>
          </div>
        </div>))}
      </section>
    
    </div>
   
  </>
  

   
  )
}

export default NewsCards