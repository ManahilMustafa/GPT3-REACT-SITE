import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <header className="gpt3_header section_padding" id="home">
    <div className="gpt3_header-content">
      <h1 className="gradient_text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
        Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow 
        asked of.
      </p>

      <div className="gpt3_header-content_input">
        <input type="email" placeholder="Your Email Address" required />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3_header-content_people">
        <img src={people} alt="People requesting access" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3_header-image">
      <img src={ai} alt="AI Illustration" />
    </div>
  </header>
);

export default Header;
