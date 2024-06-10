# Assignment Twelve

- Assignment_category_0003
- Github server side link: https://github.com/Porgramming-Hero-web-course/b9a11-server-side-farzana-mohsin
- Github client side link: https://github.com/Porgramming-Hero-web-course/b9a11-client-side-farzana-mohsin
- live site link: https://assignment-eleven-a257a.web.app/
- admin email: elisa@gmail.com
- admin password: Abcd1234!

## Blissful Trails

- This project is a web application that allows users to browse through a tourism website, browse different tour type options. Users need to be logged in to view private routes.
- Once logged in, users can book a tourist package, all users can also access the dashboard depending on their roles.
- The website provides a user-friendly interface and offers various features to enhance productivity.

## Key Features

- Navbar, Banner, packages, package details, tourist stories, and Footer sections are publicly available.

- User authentication

  - The application allows users to create accounts and log in to access their tasks and settings.
  - The register and login have multiple credentials which are shown by toasts.
  - User can also login via their Google or Github accounts.

- The navbar is responsive and will show the buttons for private routes if a user is logged in

  - A hover dropdown is used under My Profile which navigates to the Dashboard.
  - User display name is visible on hover once the user is logged in

- The `Homepage` features the banner, a React tab with three tabs - Overview section has a video, Our Packages tab has three cards of packages, there is also a button to see all packages, and the third tab is Our Tour Guides that shows the Tour guides names in tabular format.

  - Tour Types section has four logos which navigates to package related to the tour type.
  - Our Top Reviews section features the stories shared by the tourists.
    - The stories have a View Details button and on the details page there is the option to share the review on Facebook. React-share is used. The stories are publicly available
    - The tourist needs to log in to post a story

- On the Navbar, there is About Blissful Trails dropdown which showcases three sections - Community, About Us, and Contact Us
- My Profile dropdown will take a logged in user to the dashboard depending on their roles.
- All the users will be by default tourist.
- Once the user goes to the dashboard, they can see
  - Tourist profile - user's name and photo will be displayed in this section
  - Tourist wishlist - Tourists are able to add a package to their wishlist, The wishlist packages will be displayed in this section in tabular format
  - Tourist bookings - tourists are able to see their bookings in this section. They can also cancel their booking until it's rejected or accepted by the tour guide. Once accepted, pay button will be enabled and tourist can pay for the booking.
  - Tourist can also request to admin to become a tour guide.
- Admin dashboard
  - Admin's profile - Admin's name and photo will be visible in this section
    add packages - admin can add new tour packages
    manage users - with manage users admin can assign a tour guide or admin role to the requester (tourist). the data is shown in tabular format
- Tour Guide Dashboard

  - tour guide profile - tour guide's name and photo will be visible in this section
  - the tours assigned to the tour guide - Tour guides will have the option to accept or reject the tours.

- Once the tourist/user clicks on a tour, they can see all the details (price, tour type, about the tour, tour plan)

  - User can book a tour. Users will also have the option to choose their tour guide.
  - React date range is used to show the calendar.

- An `Error page` is added with a button to go to homepage incase a user tries to go to a route that doesn't exist
- On the Navbar there is a About Blissful Trail dropdown - Community, About Us and Contact Us. Framer Motion is used on About Us page.

- Integration with other tools

  - The application has been integrated with popular productivity tools, such as Framer Motion, Slider, React Helmet, React Tabs, React date range, Animate.css
  - React toastify were used to show the success and error messages
  - Images were hosted on imgbb.

- Mobile and tablet friendly: The web application is responsive and optimized for mobile devices, allowing users to manage tasks on the go.
- Firebase config keys have been transferred to .env.local file.
- MongoDB username and password have been transferred to .env file with encrypted code.
- JWT is used to protect the backend data of private routes. Middlewares were used to verify the token and email addresses. `localStorage` is used to remove the token once the user logs out.
