Next.js Project with Swappable Headers and Footers

This is a Next.js project bootstrapped with create-next-app.

Getting Started

First, run the development server:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load font family.

Header and Footer Swapping

This project includes a feature that allows users to switch between multiple headers and footers dynamically using navigation buttons. The implementation can be found in app/page.js and uses React state management (useState) to cycle through different components.

Features:

Three Headers & Footers: HeaderOne, HeaderTwo, HeaderThree and FooterOne, FooterTwo, FooterThree are available.

Navigation Controls: Buttons allow users to cycle through headers and footers.

Pagination Indicators: Dots indicate the current active header and footer.

Smooth UI Experience: Transitions enhance user experience.

Tailwind CSS for Styling: The project utilizes Tailwind CSS for efficient and responsive styling.

How to Modify:

To add more headers or footers, update the headers and footers arrays in app/page.js.

Modify individual header/footer components in the components directory.

Customize the UI further by modifying Tailwind CSS classes in the components.

Technologies Used

Next.js - A React framework for server-side rendering and static site generation.

React - The core library for building UI components.

Tailwind CSS - A utility-first CSS framework for styling.

Notes

Ensure you have tailwind.config.js properly set up for styling customization.

Additional headers and footers can be created in the components directory and included in the state management logic.
