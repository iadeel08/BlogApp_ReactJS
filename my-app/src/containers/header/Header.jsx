import React from "react";
import "./header.css";
import people from "../../assests/people.png";
import ai from "../../assests/ai.png";

const Header = () => {
  return (
    <div className="gp3__header__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          let's build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
      </div>

      {/* <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div> */}
    </div>
  );
};

export default Header;


// import React from 'react';
// import people from '../../assests/people.png';
// import ai from '../../assests/ai.png';
// import './header.css';

// const Header = () => (
//   <div className="gpt3__header section__padding" id="home">
//     <div className="gpt3__header-content">
//       <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
//       <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

//       <div className="gpt3__header-content__input">
//         <input type="email" placeholder="Your Email Address" />
//         <button type="button">Get Started</button>
//       </div>

//       <div className="gpt3__header-content__people">
//         <img src={people} />
//         <p>1,600 people requested access a visit in last 24 hours</p>
//       </div>
//     </div>

//     <div className="gpt3__header-image">
//       <img src={ai} />
//     </div>
//   </div>
// );

// export default Header;