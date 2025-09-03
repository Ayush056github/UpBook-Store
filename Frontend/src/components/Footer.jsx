import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Java</a>
          <a className="link link-hover">Digital Marketing</a>
          <a className="link link-hover">React Js</a>
        </nav>

        
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Freelancing</a>
          <a className="link link-hover">Public Speaking</a>
        </nav>

        
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
          
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                width="24"
                height="24"
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>

          
            <a href="https://github.com/Ayush056github" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                width="24"
                height="24"
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>

        
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.pngmart.com/files/23/Instagram-Logo-Black-And-White-PNG-Pic.png"
                alt="Instagram"
                width="24"
                height="24"
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </nav>
      </footer>
    <hr color="black"/>
      
      <div className="text-center p-3 text-sm text-black bg-base-300">
        © {new Date().getFullYear()} BookStore. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;


