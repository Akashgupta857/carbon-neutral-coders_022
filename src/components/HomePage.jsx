import React from 'react';
import { useState ,useEffect} from 'react';

// import './HomePage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HeaderHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <header className="header">
      <div className="header-content" data-aos="fade-up">
        <h1>The online resume builder getting folks hired by BBC, Google, Apple, Tesla, and Airbnb.</h1>
        <p>Build your brand-new resume in as little as 5 minutes. <strong>Try it for free.</strong></p>
        <button className="btn-primary">Get Started Now</button>
        <p className="no-credit">No credit card required</p>
      </div>
      <ResumePreview />
    </header>
  );
};

export const ResumePreview = () => (
  <div className="resume-preview">
    <img src="https://static.resumegiants.com/wp-content/uploads/sites/25/2022/05/31105158/templates3-736x708.webp" alt="Resume Preview" className="resume-img" />
  </div>
);

// Remove the ResumePreview from here if you had it previously
export const FeaturedLogos = () => (
  <section className="featured" data-aos="zoom-in">
    <h3>Featured In</h3>
    <div className="logo-grid">
      <img src="https://d.novoresume.com/images/landing_page/featured/logo-business-insider.png" alt="Business Insider" />
      <img src="https://d.novoresume.com/images/landing_page/featured/logo-interesting-engineering.png" alt="Interesting Engineering" />
      <img src="https://d.novoresume.com/images/landing_page/featured/logo-recruiter.png" alt="Recruiter" />
      <img src="https://d.novoresume.com/images/landing_page/featured/logo-lifehacker.png" alt="Lifehacker" />
      <img src="https://d.novoresume.com/images/landing_page/featured/logo-forbes.png" alt="Forbes" />
    </div>
  </section>
);


export const SectionOne = () => (
  <section className="section-one">
    <div className="section-content">
      <h2>Your Personal Branding Starts Here</h2>
      <p>Create a professional resume in minutes. Showcase your skills, experience, and qualifications to potential employers and recruiters.</p>
      <button className="btn-primary">Learn More</button>
    </div>
  </section>
);


export const TrustpilotSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className="trustpilot-section">
      <div className="trustpilot-content">
        {showVideo ? (
          <div className="video-wrapper" data-aos="fade-up">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/gl-ORm5nRyQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="btn-close-video" onClick={handleVideoToggle}>
              Close Video
            </button>
          </div>
        ) : (
          <>
            <img
              src="https://img.youtube.com/vi/gl-ORm5nRyQ/0.jpg"
              alt="Trustpilot rating"
              className="trustpilot-img"
              data-aos="fade-up"
            />
            <div className="rating-text" data-aos="fade-up">
              <h3>Recruiters Love Our Resume Builder.</h3>
              <p>P.S. The video is less than 3 minutes</p>
              <button className="btn-close-video" onClick={handleVideoToggle}>
                Play Video
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// Resume Templates Section





export const ResumeTemplatesSection = () => (
  <section className="resume-templates" data-aos="zoom-in">
    <h2>Resume Templates for Every Career Path</h2>
    <p>... some content</p>
    <div className="templates-grid">
      <div className="template-item" data-aos="fade-up">
        <img src="https://d25zcttzf44i59.cloudfront.net/official-resume-template.png" alt="Template 1" />
        <p>Template 1</p>
      </div>
      <div className="template-item" data-aos="fade-up">
        <img src="https://d.novoresume.com/images/doc/skill-based-resume-template.png" alt="Template 2" />
        <p>Template 2</p>
      </div>
      <div className="template-item" data-aos="fade-up">
        <img src="https://resumod.co/uploads/873a7ac920b082171a63b07f6d7d22b91562960116665.jpeg" alt="Template 3" />
        <p>Template 3</p>
      </div>
    </div>
    <button className="btn-primary discover-more-btn" data-aos="fade-in">Discover More Resume Templates</button>
  </section>
);


export const BuildResumeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="build-resume">
      <h2 data-aos="fade-up">Build Your Resume Fast and Easy</h2>
      <p data-aos="fade-up">
        Novorésumé is lightning fast. There's no software to download. No
        multi-part sign-up form. No long-winded tutorials. Just a straightforward
        process.
      </p>
      <div className="steps-grid">
        <div className="step-item" data-aos="fade-up">
          <img src="/resume1.png" alt="Pick a Template" />
          <h3>1. Pick a Template</h3>
          <p>
            Don't sabotage your job search before it has even begun. Choose from
            our ATS-friendly, handcrafted resume templates.
          </p>
        </div>
        <div className="step-item" data-aos="fade-up">
          <img src="/resume2.png" alt="Customize Layout" />
          <h3>2. Customize Your Layout</h3>
          <p>Make the resume template truly your own.</p>
        </div>
        <div className="step-item" data-aos="fade-up">
          <img src="/resume3.png" alt="Fill in the Blanks" />
          <h3>3. Fill in the Blanks</h3>
          <p>
            Fill in your resume information, let our AI content analyzer do its job, 
            and see your resume changes dynamically in real-time.
          </p>
        </div>
        <div className="step-item" data-aos="fade-up">
          <img src="/resume4.png" alt="Hit 'Download!'" />
          <h3>4. Hit 'Download!'</h3>
          <p>
            And yes, it's free! We don't hit you with a paywall once you've completed 
            your resume in the Basic Account. If you use any of our premium features, 
            the software will let you know about it.
          </p>
        </div>
      </div>
    </section>
  );
};

// Why Use Novorésumé Section
// Why Use Novorésumé Section
export const WhyUseNovoresume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="why-use">
      <h2 data-aos="fade-up">Why Use The Novorésumé Resume Builder?</h2>
      <div className="features-grid">
        <div className="feature-item" data-aos="fade-up">
          <img src="https://d.novoresume.com/images/landing_page/why/why-0@2x.png" alt="Free AND Premium" />
          <h3>Free AND Premium</h3>
          <p>We offer both free and premium features. Upgrade to Premium for extra punch!</p>
        </div>
        <div className="feature-item" data-aos="fade-up">
          <img src="https://d.novoresume.com/images/landing_page/why/why-2@2x.png" alt="NO Hidden Fees" />
          <h3>NO Hidden Fees</h3>
          <p>Don’t waste time on hidden paywalls. Use our builder freely.</p>
        </div>
        <div className="feature-item" data-aos="fade-up">
          <img src="https://d.novoresume.com/images/landing_page/why/why-4@2x.png" alt="Live Content Feedback" />
          <h3>Live Content Feedback</h3>
          <p>Get real-time feedback to enhance your resume content.</p>
        </div>
        <div className="feature-item" data-aos="fade-up">
          <img src="https://d.novoresume.com/images/landing_page/why/why-1@2x.png" alt="Creative Templates" />
          <h3>Creative and Professional Templates</h3>
          <p>Find the perfect resume template that suits your style!</p>
        </div>
        <div className="feature-item" data-aos="fade-up">
          <img src="https://d.novoresume.com/images/landing_page/why/why-3@2x.png" alt="ATS-Friendly" />
          <h3>ATS-Friendly</h3>
          <p>Our templates ensure your resume gets past automated filters.</p>
        </div>
        <div className="feature-item" data-aos="fade-up">
          <img src="https://d.novoresume.com/images/landing_page/why/why-5@2x.png" alt="Edit in Real Time" />
          <h3>Edit in Real Time</h3>
          <p>See your changes instantly as you edit your resume.</p>
        </div>
      </div>
      <button className="btn-primary try-it-btn" data-aos="fade-up">Try It Out Yourself</button>
    </section>
  );
};




export const ELearningSection = () => (
  <section className="elearning-section">
    <div className="elearning-content">
      <div className="text-content">
        <h1>Introducing e-learning!</h1>
        <p>
          Whether you're job hunting, planning a career shift, or aiming to enhance your professional skills,
          our e-learning feature is designed to tackle your unique challenges.
        </p>
        <ul className="features-list">
          <li>✔ Top-notch content by certified experts</li>
          <li>✔ Address specific challenges using tailored content</li>
          <li>✔ Help us shape the final product</li>
          <li>✔ Receive discounts and exclusive content</li>
        </ul>
        <p>
          Rcareer is the latest addition to our platform, and we're excited to embark on this journey with you.
          Together, we'll shape and expand the content to meet your evolving needs and aspirations.
        </p>
        <button className="btn-primary">Get Access Now</button>
      </div>
      <div className="image-content">
        <img src="https://media.licdn.com/dms/image/v2/D4D05AQFb3zK6kFlr-g/feedshare-thumbnail_720_1280/feedshare-thumbnail_720_1280/0/1696932418753?e=2147483647&v=beta&t=H3RAgu5xINyrGEurs0JOE6pRtMBEwHBQ1rXfgGm3KSY" alt="E-learning Promotion" />
      </div>
    </div>
  </section>
);

export default ELearningSection;


export const PremiumFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="premium-features">
      <h2 data-aos="fade-up">Premium Features for Ambitious Job-Seekers</h2>
      <p data-aos="fade-up">
        The job market today is competitive – you’ll need every edge to stand out. Here’s how Novorésumé Premium can help you:
      </p>

      <div className="feature-cards">
        <div className="feature-card" data-aos="fade-up">
          <img src="https://c0.wallpaperflare.com/preview/535/539/778/resume-cv-resume-template-application.jpg" alt="Unlimited Design Options" />
          <h3>Unlimited Design Options</h3>
          <p>Make your resume truly yours by customizing its design, layout, and much more.</p>
        </div>

        <div className="feature-card" data-aos="fade-up">
          <img src="https://d.novoresume.com/images/landing_page/premium/premium-left.webp" alt="Cover Letter Templates" />
          <h3>Cover Letter Templates</h3>
          <p>Create a matching cover letter to impress hiring managers and stand out from the rest.</p>
        </div>

        <div className="feature-card" data-aos="fade-up">
          <img src="https://d.novoresume.com/images/landing_page/premium/premium-2.webp" alt="Two Pages+" />
          <h3>Two Pages+</h3>
          <p>Fit your decade’s worth of experience on multiple pages beyond the one-page limit.</p>
        </div>
      </div>

      <button className="btn-primary" data-aos="fade-up">Check Out Premium</button>
    </section>
  );
};


export const TrustpilotReviews = () => {
  const reviews = [
    {
      stars: 5,
      title: "It was fantastic",
      text: "It was fantastic",
      author: "Tomás Pimenta",
      daysAgo: "3 days ago",
    },
    {
      stars: 5,
      title: "Good application for creating resume",
      text: "Good application for creating resume",
      author: "Nishu Bala",
      daysAgo: "3 days ago",
    },
    {
      stars: 5,
      title: "Very good app really very nice",
      text: "Very good app really very nice",
      author: "Waruna Prabath",
      daysAgo: "3 days ago",
    },
    {
      stars: 4,
      title: "Pretty decent overall",
      text: "Pretty decent overall",
      author: "John Doe",
      daysAgo: "5 days ago",
    },
    {
      stars: 5,
      title: "Absolutely love it!",
      text: "Absolutely love it!",
      author: "Jane Smith",
      daysAgo: "7 days ago",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="trustpilot-section">
      <h2>Novorésumé Users Love Our Resume Builder.</h2>

      <div className="trustpilot-rating">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqe53rHoUFhF7cfPRFISLu8yZxgwWv2Z7lg&s"
          alt="Trustpilot Rating"
        />
        <p>Excellent</p>
        <p>Based on 1,145 reviews</p>
      </div>

      <div className="carousel">
        <button className="carousel-button prev" onClick={prevReview}>
          {"<"}
        </button>
        <div className="review-container" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
            <div className="review" key={index}>
              <p className="stars">{"★".repeat(review.stars)}</p>
              <h3>{review.title}</h3>
              <p>{review.text}</p>
              <p>
                <strong>{review.author}</strong>, {review.daysAgo}
              </p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextReview}>
          {">"}
        </button>
      </div>

      <p>Showing our 4 & 5 star reviews</p>
    </section>
  );
};

export const FaqSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const faqs = [
    {
      question: "Why should I use a resume builder?",
      answer: `Using a resume builder makes the process of creating a resume significantly faster and easier. 
      Ever tried building your resume with Word? The whole process is a huge pain - you make a TINY change to your resume, 
      and the entire resume layout gets completely messed up. 
      With a resume builder, you don't have to worry about the nitty-gritty of resume creation: fonts, layouts, section orders, etc.`,
      image: "https://d.novoresume.com/images/landing_page/faq/faq0@2x.png",
    },
    {
      question: "What is the best resume builder?",
      answer: `Over the past 7 years, we've been working hard to make Novorésumé the best resume builder out there. 
      Here's what sets us apart from the rest of the competition.`,
      image: "https://d.novoresume.com/images/landing_page/faq/faq1@2x.png",
    },
    {
      question: "Is this a completely free resume builder?",
      answer: `Yes, Novorésumé is a 100% free resume builder. If you're on a budget, you can use it to create your resume for free.`,
      image: "https://d.novoresume.com/images/landing_page/faq/faq2@2x.png",
    },
    {
      question: "What is a resume?",
      answer: `A resume (also known as a CV) is a 1-2 page document that summarizes your work experience and career history.`,
      image: "https://d.novoresume.com/images/landing_page/faq/faq3@2x.png",
    },
    {
      question: "What's the difference between a CV and a resume?",
      answer: `In the EU, "CV" and "resume" are used interchangeably. In the US, however, a resume is used to apply for jobs.`,
      image: "https://d.novoresume.com/images/landing_page/faq/faq4@2x.png",
    },
    {
      question: "How can I create my resume?",
      answer: `Making a resume with Novorésumé is very straightforward. Just pick one of our templates.`,
      image: "https://d.novoresume.com/images/landing_page/faq/faq5@2x.png",
    },
    {
      question: "What should a resume include?",
      answer: `The must-have contents in your resume include: Work Experience, Educational Background, Contact Information, and more.`,
      image: "https://d.novoresume.com/images/landing_page/faq/faq6@2x.png",
    },
  ];

  return (
    <section className="faq-section">
      <h2 data-aos="fade-up">Resume Builder FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" data-aos="fade-up">
          <img src={faq.image} alt={`Icon for ${faq.question}`} />
          <div>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};