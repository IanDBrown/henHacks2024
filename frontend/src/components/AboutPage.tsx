import React, { useEffect, useState } from 'react';
import about_css from "../css/about.module.css";

export default function AboutPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`${about_css.about} ${fadeIn ? about_css.fadeIn : ''}`}>
      <h1>About Intelli Learn</h1>
      <p>Welcome to Intelli Learn, where innovation meets education. At the heart of our mission lies a commitment to transforming the study of Mathematics through the power of Artificial Intelligence. In today's digital era, we recognize the need for personalized and adaptive learning solutions that cater to the unique needs of each learner.</p>

      <h2>Revolutionizing Math Education with AI</h2>
      <p>Intelli Learn is more than just a platform; it's a gateway to a new era of learning Mathematics. We leverage cutting-edge AI technology to provide an immersive and interactive learning experience that is both engaging and effective. Our intelligent system is designed to identify your strengths and areas for improvement, offering tailored exercises and feedback to guide you through the complexities of mathematical concepts.</p>

      <h2>Tailored Learning Paths</h2>
      <p>We understand that Math can be challenging, but we believe it shouldn't be a barrier to your academic or personal growth. Intelli Learn adapts to your individual learning pace, ensuring that you can grasp concepts at a comfortable speed, build confidence, and achieve mastery in various mathematical disciplines.</p>

      <h2>Empowering Learners Worldwide</h2>
      <p>Whether you're struggling with basic arithmetic or navigating the intricacies of calculus, Intelli Learn is here to support your journey. Our goal is to make Math accessible and enjoyable for learners around the globe, empowering you to unlock your full potential.</p>

      <h2>Join Our Community</h2>
      <p>Step into a world where Math learning is demystified and made accessible for everyone. Join Intelli Learn today and experience the transformative power of AI-driven education.</p>

      <p>Discover the joy of learning with Intelli Learn—where every equation leads you one step closer to success.</p>
    </div>
  );
}
