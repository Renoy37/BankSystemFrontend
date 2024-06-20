import React from 'react';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/fa-brands/github';
import linkedinIcon from '@iconify-icons/fa-brands/linkedin';
import userIcon from '@iconify-icons/fa-solid/user';

const Footer = () => {
  return (
    <footer className="bg-primary py-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-right">
          <p className="text-gray-600">© Payaam</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Renoy37/Robins-Mugambi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Icon icon={githubIcon} width="2em" height="2em" />
          </a>
          <a
            href="https://www.linkedin.com/in/robins-mugambi-731235225/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Icon icon={linkedinIcon} width="2em" height="2em" />
          </a>
          <a
            href="https://development--darling-scone-92fc6f.netlify.app/"
            className="text-gray-600 hover:text-gray-900"
          >
            <Icon icon={userIcon} width="2em" height="2em" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
