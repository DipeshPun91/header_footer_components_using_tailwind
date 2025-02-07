export default function FooterTwo() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 p-2 bg-accent rounded-full"
              viewBox="0 0 512 512">
              <path d="M112.31,268l40.36-68.69,34.65,59-67.54,115h135L289.31,432H16Zm58.57-99.76,33.27-56.67L392.44,432H325.76ZM222.67,80h66.59L496,432H429.32Z"></path>
            </svg>
            <span className="ml-3 text-xl text-white font-primary">
              Bitwise
            </span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-accent tracking-widest text-sm mb-3">
              SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Web Development
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Cloud Solutions
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-accent tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-accent tracking-widest text-sm mb-3">
              RESOURCES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Help Center</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQs</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Documentation
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  API Reference
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-accent tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Accessibility
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
