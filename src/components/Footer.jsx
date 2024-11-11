// src/components/Footer.js or in your index.js directly

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-cardBlack text-cardWhite py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-cardGold mb-4">DeskMates</h2>
            <p className="text-lg text-cardGray max-w-xl mx-auto md:mx-0">
              Immerse yourself in a world of strategic card battles, unique game modes, and competitive gameplay!
            </p>
          </div>

          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link href="/about">
              <button className="text-cardGold hover:text-cardGreen transition duration-300">About</button>
            </Link>
            <Link href="/contact">
              <button className="text-cardGold hover:text-cardGreen transition duration-300">Contact</button>
            </Link>
            <Link href="/privacy-policy">
              <button className="text-cardGold hover:text-cardGreen transition duration-300">Privacy Policy</button>
            </Link>
          </div>
        </div>

        {/* Footer Middle Section - Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://twitter.com" passHref>
            <button className="text-cardGold hover:text-cardGreen transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M23.944 4.517a9.935 9.935 0 0 1-2.828.775A4.9 4.9 0 0 0 23.337 2c-.954.564-2.004.954-3.121 1.157a4.957 4.957 0 0 0-8.458 4.528c-4.105-.2-7.756-2.168-10.19-5.16a4.886 4.886 0 0 0-.664 2.487c0 1.717.872 3.232 2.187 4.128a4.942 4.942 0 0 1-2.228-.616v.061c0 2.396 1.708 4.392 3.973 4.847a4.95 4.95 0 0 1-2.218.084c.625 1.948 2.446 3.369 4.603 3.408a9.936 9.936 0 0 1-7.306 2.035c-.464 0-.923-.027-1.379-.081a13.98 13.98 0 0 0 7.529 2.21c9.032 0 14.007-7.487 14.007-13.983 0-.212-.004-.422-.014-.63A9.91 9.91 0 0 0 24 4.64c-.883.391-1.832.653-2.856.775z"></path>
              </svg>
            </button>
          </Link>

          <Link href="https://github.com" passHref>
            <button className="text-cardGold hover:text-cardGreen transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.868 8.167 6.839 9.497.5.093.682-.215.682-.478 0-.235-.01-.863-.015-1.696-2.785.604-3.369-1.345-3.369-1.345-.456-1.158-1.113-1.47-1.113-1.47-.911-.621.069-.608.069-.608 1.008 0 1.534 1.014 1.534 1.014 1.576 2.618 4.138 1.86 5.198 1.419.162-.795.615-1.86 1.078-2.295-2.366-.269-4.832-1.183-4.832-5.261 0-1.14.408-2.071 1.078-2.795-.107-.269-.467-1.29-.202-1.828 0 0 1.18-.379 3.846 1.367 1.11-.31 2.268-.465 3.431-.465s2.32.155 3.431.465c2.665-1.746 3.846-1.367 3.846-1.367.265.538-.095 1.559-.202 1.828.67.724 1.078 1.655 1.078 2.795 0 4.087-2.466 4.992-4.832 5.261.63.548 1.178 1.545 1.178 2.914 0 2.107-.014 3.801-.014 4.319 0 .267.183.575.692.478 3.97-1.33 6.838-5.079 6.838-9.497 0-5.523-4.477-10-10-10z"></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-cardGray">
          <p className="text-sm">&copy; 2024 DeskMates. All Rights Reserved.</p>
          <p className="text-sm mt-2">
            Created with ❤️ by the DeskMates Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
