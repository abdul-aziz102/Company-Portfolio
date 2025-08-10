import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#d5fff7] text-[#23194f] pt-16 pb-8 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Appearls</h2>
            <p className="text-[#23194f]/80">Design, Space, Enterprise</p>
            <p className="text-[#23194f]">
              Fill out the contact form below and tell us about your vision for the project.
            </p>
            <div className="pt-4">
              <h3 className="text-[#23194f]/80 mb-2">Your Email Address</h3>
              <button className="text-sky-700 hover:underline">MORE WORK →</button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-[#23194f]/80">Follow Us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-[#23194f] hover:text-sky-700"><FiFacebook /></a>
                <a href="#" className="text-[#23194f] hover:text-sky-700"><FiTwitter /></a>
                <a href="#" className="text-[#23194f] hover:text-sky-700"><FiInstagram /></a>
                <a href="#" className="text-[#23194f] hover:text-sky-700"><FiLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-700">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blogs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#23194f] hover:text-sky-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact USA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-700">Contact Us</h3>
            <div>
              <h4 className="font-medium">USA</h4>
              <p className="text-[#23194f]">
                1035 Fairfield Ave<br />
                Bridgeport, Connecticut
              </p>
              <p className="text-[#23194f] mt-2">(203) -446-5381</p>
              <p className="text-[#23194f]">Email: sales@appearls.com</p>
            </div>
          </div>

          {/* Contact UAE */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-700">&nbsp;</h3>
            <div>
              <h4 className="font-medium">UAE</h4>
              <p className="text-[#23194f]">
                Avenue Residence, I, 8 floor<br />
                Al Futjan, Dubai
              </p>
              <p className="text-[#23194f] mt-2">+971 543 367865</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#23194f]/20 pt-8 text-center text-[#23194f]/80">
          <p>© Copyright 2014–2025 Appearls | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;