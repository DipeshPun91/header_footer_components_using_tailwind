import MobileNav from "./MobileNav";

export default function HeaderThree() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            fill="#000000"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 p-2 bg-accent rounded-full">
            <path d="M112.31,268l40.36-68.69,34.65,59-67.54,115h135L289.31,432H16Zm58.57-99.76,33.27-56.67L392.44,432H325.76ZM222.67,80h66.59L496,432H429.32Z"></path>
          </svg>
          <span className="ml-3 text-xl font-primary">Bitwise</span>
        </a>

        <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-accent flex-wrap items-center text-base justify-center">
          <a className="mr-5 relative hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            About Us
          </a>
          <a className="mr-5 relative hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            Blog
          </a>
          <a className="mr-5 relative hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            Pages
          </a>
          <a className="mr-5 relative hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            Contact Us
          </a>
        </nav>

        <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-full bg-accent text-primary font-semibold h-11 px-6 hover:bg-accent-HOVER focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-200">
          Get Started
        </button>

        <div className="md:hidden flex items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
