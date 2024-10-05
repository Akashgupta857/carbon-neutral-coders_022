import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './price.css';

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="pricing-container">
      <div className="pricing-header" data-aos="fade-up">
        <h1>Pricing Plans</h1>
      </div>

      <div className="pricing-cards">
        {/* Basic Plan */}
        <div className="card basic" data-aos="fade-right">
          <h2>Basic</h2>
          <p className="price">Free</p>
          <p className="description">Unlimited</p>
          <ul className="features">
            <li>✓ Ideal for students</li>
            <li>✓ Single version</li>
            <li>✓ Max 1-Page Resume</li>
            <li>✓ Predefined Layouts</li>
            <li>✓ No Cover Letter</li>
            <li>✓ 3 Fonts</li>
            <li>✓ 30 color themes</li>
          </ul>
          <button className="button">Get Started</button>
        </div>

        {/* Premium Plan */}
        <div className="card premium" data-aos="fade-left">
          <h2>Premium</h2>
          <div className="pricing-info">
            <p className="price">3899 INR</p>
            <p>Year</p>
            <p className="save">Save ₹6889</p>
          </div>
          <p className="popular">Most Popular</p>
          <ul className="features">
            <li>✓ Create multiple versions</li>
            <li>✓ Max 10-page Resume/CV</li>
            <li>✓ Custom Layout</li>
            <li>✓ Matching Cover Letter</li>
            <li>✓ 12 Fonts</li>
            <li>✓ 74 color themes</li>
            <li>✓ Creative Backgrounds</li>
          </ul>
          <button className="button">Upgrade Now</button>
          <p className="note">No recurring billing, pay once. 14 days money back.</p>
        </div>

        {/* Quarterly and Monthly Options */}
        <div className="card" data-aos="fade-up">
          <div className="subscription-option">
            <p className="price">1499 INR</p>
            <p>Quarter</p>
            <p className="save">Save ₹1198</p>
          </div>
          <div className="subscription-option">
            <p className="price">899 INR</p>
            <p>Month</p>
            <p className="equal">equal to</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
            <h3>Will my Premium account renew automatically?</h3>
            <p>No, our pricing model is not subscription-based. Therefore, you will not be charged automatically without your consent.</p>
          </div>
          <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
            <h3>Will my information be saved after the Premium period expires?</h3>
            <p>All the information will be saved in your account, even when the Premium period expires.</p>
          </div>
          <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
            <h3>Are there any hidden costs?</h3>
            <p>There are no hidden costs. The total price will be displayed before entering payment details.</p>
          </div>
          <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
            <h3>Is my payment information secure?</h3>
            <p>All transactions are 100% secure with trusted platforms like Stripe and PayPal.</p>
          </div>
          <div className="faq-item" data-aos="fade-up" data-aos-delay="500">
            <h3>Can I try before I buy?</h3>
            <p>You can test the Premium features with a Basic account. However, you cannot download documents with Premium features.</p>
          </div>
          <div className="faq-item" data-aos="fade-up" data-aos-delay="600">
            <h3>What format will the documents be saved as?</h3>
            <p>All documents are saved as PDFs for increased security and readability.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" data-aos="fade-up">
        <h3>Have a particular question?</h3>
        <p>If you have any questions regarding our Premium account or services, feel free to contact us!</p>
        <a href="mailto:contact@resumebuilder.com" className="contact-email">contact@resumebuilder.com</a>

        {/* Adding the image */}
        <div className="contact-image">
          <img src="https://d.novoresume.com/images/pricing/contact-bellow/group-1849@3x.webp" alt="Customer Service" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
