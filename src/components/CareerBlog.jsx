import React, { useState } from 'react';
import './career.css'

const articlesData = [
    {
      id: 1,
      title: "How to Write a Cover Letter [Full Guide & Examples for 2024]",
      subtitle: "3 May | 8 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/how-to-write-a-cover-letter-guide/bg-mid.png",
      description: "Learn how to write a job-winning cover letter in this detailed article! Check out our guide and cover letter examples for different professions.",
      time: "3 May",
      readTime: "8 min read",
      shares: 3751,
      likes: 25544,
      comments: 8456,
      views: 21945
    },
    {
      id: 2,
      title: "How to Make a Resume in 2024 | Beginner's Guide",
      subtitle: "3 May | 5 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/how-to-write-a-resume-guide/bg-mid.png",
      description: "Learn the ins and outs of writing the perfect resume with our complete guide! Check out expert tips, resume file examples, and more!",
      time: "3 May",
      readTime: "5 min read",
      shares: 1937,
      likes: 25382,
      comments: 1489,
      views: 2057
    },
    {
      id: 3,
      title: "Including a Photo on Your Resume | Full Guide for 2024",
      subtitle: "Yesterday | 6 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/including-photo-on-resume/bg-mid.png",
      description: "Should you include a photo on your resume or not? We’ve gathered the best advice to find out everything you need to know!",
      time: "Yesterday",
      readTime: "6 min read",
      shares: 1874,
      likes: 24386,
      comments: 1359,
      views: 3095
    },
    {
      id: 4,
      title: "16 ATS-Friendly Resume Templates [Great for 2024]",
      subtitle: "2 October | 8 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/ats-friendly-resume-templates/bg-mid.png",
      description: "The first step to success? Using the right ATS-friendly templates. Find out what they mean and pick one of these free templates right away!",
      time: "2 October",
      readTime: "8 min read",
      shares: 1765,
      likes: 22948,
      comments: 1204,
      views: 4893
    },
    {
      id: 5,
      title: "How to Write an ATS Resume | Full Guide for 2024",
      subtitle: "Yesterday | 10 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/ats-resume/bg-mid.png",
      description: "Want your application to make it into the hiring manager's hands? Learn how to write an ATS resume and break through ATS software for your desired job!",
      time: "Yesterday",
      readTime: "10 min read",
      shares: 1647,
      likes: 24563,
      comments: 1178,
      views: 3178
    },
    {
      id: 6,
      title: "How to Tailor Your Resume to a Job Description with ChatGPT",
      subtitle: "3 October | 12 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/tailor-resume-to-job-with-chatgpt/bg-mid.png",
      description: "Want to make your resume-writing process easier? Learn how to tailor your resume to the job description with ChatGPT in our article!",
      time: "3 October",
      readTime: "12 min read",
      shares: 1559,
      likes: 24057,
      comments: 1079,
      views: 2849
    },
    {
      id: 7,
      title: "6 Ways to Use ChatGPT to Review Your Resume (with Prompts)",
      subtitle: "2 October | 12 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/use-chatgpt-to-review-resume/bg-mid.png",
      description: "Want ways to review and enhance your resume with ChatGPT? Browse our tips to stand out from competitors and land your dream job!",
      time: "2 October",
      readTime: "12 min read",
      shares: 1457,
      likes: 22564,
      comments: 984,
      views: 3092
    },
    {
      id: 8,
      title: "29 ChatGPT Cover Letter Prompts to Land the Job in 2024",
      subtitle: "2 October | 11 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/chatgpt-cover-letter-prompts/bg-mid.png",
      description: "Want to level up your cover letter with ChatGPT? Get rid of writer's block with any of our free-to-use ChatGPT cover letter prompts!",
      time: "2 October",
      readTime: "11 min read",
      shares: 1378,
      likes: 21984,
      comments: 945,
      views: 2845
    },
    {
      id: 9,
      title: "25 Must-Try ChatGPT Resume Prompts to Land Your Dream Job",
      subtitle: "2 October | 10 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/chatgpt-resume-prompts/bg-mid.png",
      description: "Discover how to optimize your resume with tailored ChatGPT prompts. Step-by-step strategies to enhance each resume section!",
      time: "2 October",
      readTime: "10 min read",
      shares: 1298,
      likes: 21094,
      comments: 859,
      views: 2758
    },
    {
      id: 10,
      title: "How to Create a Cover Letter with ChatGPT [Guide for 2024]",
      subtitle: "2 October | 9 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/create-a-cover-letter-with-chatgpt/bg-mid.png",
      description: "Wonder how AI tools can help during your job hunt? Learn how to write a cover letter with ChatGPT with our detailed guide!",
      time: "2 October",
      readTime: "9 min read",
      shares: 1209,
      likes: 20235,
      comments: 783,
      views: 2618
    },
    {
      id: 11,
      title: "45 ChatGPT Prompts for Job Interview Prep in 2024",
      subtitle: "1 October | 15 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/is-using-chatgpt-for-resume-bad/bg-mid.png",
      description: "Discover effective ChatGPT prompts to help you nail your next job interview. Prepare for the most common questions and optimize your answers!",
      time: "1 October",
      readTime: "15 min read",
      shares: 1405,
      likes: 23018,
      comments: 1124,
      views: 2927
    },
    {
      id: 12,
      title: "10 Ways to Use ChatGPT to Boost Your Job Search in 2024",
      subtitle: "3 October | 7 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/how-to-use-chatgpt-to-find-a-job/bg-mid.png",
      description: "Learn how to use ChatGPT to find a job with our guide. Discover the top tips for searching effectively and landing your next dream role!",
      time: "3 October",
      readTime: "7 min read",
      shares: 1239,
      likes: 20489,
      comments: 953,
      views: 2751
    },
    {
      id: 13,
      title: "PDF vs DOC CV - Best Practices for 2024",
      subtitle: "5 September | 7 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/pdf-doc-cv/bg-mid.png",
      description: "Learn when to send your CV as a PDF or as a Doc file. Pros and cons of each format are detailed inside.",
      time: "5 September",
      readTime: "7 min read",
      shares: 1184,
      likes: 19863,
      comments: 873,
      views: 2532
    },
    {
      id: 14,
      title: "30-Second Resume Rule | Transform Your Job Hunt in 2024",
      subtitle: "5 September | 8 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/30-second-resume-rule/bg-mid.png",
      description: "Are your job applications constantly rejected? Read about the 30-second resume rule and learn tips on how to apply it!",
      time: "5 September",
      readTime: "8 min read",
      shares: 1327,
      likes: 21534,
      comments: 1024,
      views: 2784
    },
    {
      id: 15,
      title: "Resume Examples for 2024 & Guides for Any Job [90+ Examples]",
      subtitle: "5 September | 9 min read",
      imageUrl: "https://cdn-blog.novoresume.com/articles/resume-examples/bg-mid.png",
      description: "Get inspired with 90+ of our top resume examples for 2024. How-to guides, samples, and well-designed resume samples all included.",
      time: "5 September",
      readTime: "9 min read",
      shares: 1483,
      likes: 22354,
      comments: 1174,
      views: 2956
    }
  ];
  

const ArticlesGrid = () => {
  const [visibleArticles, setVisibleArticles] = useState(6); // Show 6 articles by default

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 6); // Load 6 more on click
  };

  return (
    <div className="articles-container">
      <h2 className="articles-header">All Blogs</h2>
      <div className="articles-grid">
        {articlesData.slice(0, visibleArticles).map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.imageUrl} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p className="article-subtitle">{article.subtitle}</p>
              <div className="article-info">
                <span>{article.time}</span> | <span>{article.readTime}</span>
              </div>
              <button className="share-button">Share</button>
            </div>
          </div>
        ))}
      </div>
      {visibleArticles < articlesData.length && (
        <button className="load-more-button" onClick={loadMoreArticles}>
          Load more
        </button>
      )}
    </div>
  );
};

export default ArticlesGrid;
