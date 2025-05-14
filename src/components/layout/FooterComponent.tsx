import React from "react";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-16">
      <div className="content-section mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr]  gap-8">
          <div>
            <h2 className="text-white text-xl font-bold mb-4">GetEventz</h2>
            <p className="text-sm">Your go-to platform for discovering and hosting amazing events around you.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Upcoming</li>
              <li>Ongoing</li>
              <li>Expired</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@geteventz.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li className="flex gap-3 mt-2">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          © {new Date().getFullYear()} GetEventz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
