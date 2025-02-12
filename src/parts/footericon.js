/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Button from '../elements/Button';
import logo from './logo.jpg'; // Adjust the path as necessary

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <div className="flex items-center"> {/* Use flex to align items */}
        <img src={logo} alt="Logo" className="h-10 mr-3" /> {/* Adjust the height and margin as necessary */}
        <p className="text-theme-blue text-2xl font-medium"> {/* Adjust text size here */}
          Blackwavestudio
          {/* <span className="text-theme-purple">studio</span> */}
        </p>
      </div>
    </Button>
  );
}
