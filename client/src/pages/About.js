import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about row">
      <div className="col-5"></div>
      <aside className="p-3 col-6 text-center text-white">
        <h2 className="p-2"><span>About Kota Bear Woodworks</span></h2>
        <p>
          My name is Kevin. I have been woodworking since I was a young man. In the beginning I did it for work, but as time went on I discovered that it was a true passion. With this revelation, I made the moved from woodworking as a "job" onto something that I love; creating art. Wether that be repurposing old items to make them usable and beautiful again, building custom furniture, adding exciting new features to homes, or any and everything you could imagine, it seems I can and have done it all!
        </p>
        <p>
          For any inquiries about pricing or custom pieces, please feel free to
          <Link className='p-1 text-white' to="/contact">
             contact me.
          </Link>
        </p>
      </aside>
      <div className="col-1"></div>
    </div>
  );
};

export default About;
