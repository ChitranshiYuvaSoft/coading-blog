import { FaRegCommentAlt } from "react-icons/fa";

import { IoIosHeartEmpty } from "react-icons/io";

import { CiShare2 } from "react-icons/ci";

export const reactBlog = [
  {
    id: 1,
    img: "/React/react1.png",
    title: "Understanding React State Management",
    author: "Chitranshi Gourana",
    date: "2024-11-18",
    description:
      "State management in React is one of the core concepts every developer must understand. It allows components to manage their dynamic data efficiently. In this blog, we will explore React's built-in `useState` and `useReducer` hooks, as well as external libraries like Redux and Zustand. By the end, you'll know how to decide between local state and global state for your application, and understand advanced concepts like React Context for passing data down the component tree without prop drilling.",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aliquid eveniet excepturi labore et tenetur accusamus incidunt nesciunt voluptas ipsa ut nostrum, sit repudiandae ipsum, exercitationem doloremque qui dolores! Cum earum sequi molestias fugiat necessitatibus delectus, in voluptates quod ipsam aperiam quasi nesciunt voluptatem. Tenetur quis id ea dignissimos corrupti corporis enim eius est adipisci. Sunt accusantium hic quas vitae.",
    imgGroup: ["/React/react2.webp", "/React/react3.jpg", "/React/react4.jpg"],
    comments: [
      {
        userName: "Radhika Singh",
        comment:
          "reat post! I found your explanation of React hooks really helpful. I've been struggling to understand how to use them effectively, but your examples made it much clearer. Thanks for sharing your knowledge!",
      },
      {
        userName: "Manav Rathore",
        comment:
          "I have a question though: How would you handle error handling with asynchronous actions in a React component? By following these guidelines, you can contribute meaningfully to the discussion and enhance the overall quality of the React blog",
      },
    ],
    like: "10+",
  },

  {
    id: 2,
    img: "/React/react2.webp",
    title: "React Component Lifecycles: Then and Now",
    author: "Chitranshi Gourana",
    date: "2024-11-17",
    description:
      "React's component lifecycle is pivotal in understanding how components are created, updated, and destroyed. In this blog, we take a deep dive into the lifecycle methods of class components, like `componentDidMount`, `shouldComponentUpdate`, and `componentWillUnmount`. Then, we explore how functional components achieve the same functionality using hooks like `useEffect`. Whether you're migrating from class-based to functional components or starting afresh, this blog provides detailed insights with examples.",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aliquid eveniet excepturi labore et tenetur accusamus incidunt nesciunt voluptas ipsa ut nostrum, sit repudiandae ipsum, exercitationem doloremque qui dolores! Cum earum sequi molestias fugiat necessitatibus delectus, in voluptates quod ipsam aperiam quasi nesciunt voluptatem. Tenetur quis id ea dignissimos corrupti corporis enim eius est adipisci. Sunt accusantium hic quas vitae.",
  },
  {
    id: 3,
    img: "/React/react3.jpg",
    title: "React Router: Building Dynamic Single Page Applications",
    author: "Chitranshi Gourana",
    date: "2024-11-16",
    description:
      "React Router is a powerful library for creating dynamic single-page applications (SPAs). This blog covers the basics of React Router, such as setting up routes, using `useParams` for dynamic routing, and implementing nested routes. We'll also discuss route protection using private routes and redirect strategies. Through real-world examples, you'll learn to build a fully-functional navigation system for your React application.",
  },
  {
    id: 4,
    img: "/React/react4.jpg",
    title: "Mastering Forms in React with Controlled Components",
    author: "Chitranshi Gourana",
    date: "2024-11-15",
    description:
      "Forms are an essential part of any web application, and React provides an elegant way to handle them through controlled components. This blog explains the concept of controlled and uncontrolled components, demonstrating the best practices for handling input fields, text areas, and dropdowns. We'll also explore how to manage form validation using libraries like Formik and Yup. By the end, you'll have a comprehensive understanding of building user-friendly and error-proof forms in React.",
  },
  {
    id: 5,
    img: "/React/react5.jpg",
    title: "Exploring React Performance Optimization Techniques",
    author: "Chitranshi Gourana",
    date: "2024-11-14",
    description:
      "Performance optimization is crucial for delivering a smooth user experience in React applications. In this blog, we dive into techniques like memoization using `React.memo`, `useMemo`, and `useCallback`. We’ll also cover code-splitting with React's lazy loading and Suspense, as well as best practices for rendering large lists using virtualization. Learn how to identify bottlenecks and optimize your React application to improve performance.",
  },
  {
    id: 6,
    img: "/React/react6.jpg",
    title: "Styling in React: CSS, Tailwind, and Styled-Components",
    author: "Chitranshi Gourana",
    date: "2024-11-13",
    description:
      "React offers flexibility in styling, with several approaches available to suit your project needs. This blog explores traditional CSS and CSS Modules, utility-first frameworks like Tailwind CSS, and dynamic styles with Styled-Components. Learn how to structure your styles effectively, manage scoped styles, and leverage modern tools to enhance your development workflow. By the end, you’ll be equipped to create visually stunning and maintainable designs.",
  },
  {
    id: 7,
    img: "/React/react7.webp",
    title: "Testing React Applications with Jest and React Testing Library",
    author: "Chitranshi Gourana",
    date: "2024-11-12",
    description:
      "Writing tests is a crucial part of building reliable React applications. This blog covers how to set up Jest and React Testing Library to test your components and logic effectively. Learn the differences between unit tests, integration tests, and end-to-end tests, and see practical examples of testing user interactions, state changes, and API calls. With these skills, you’ll ensure your application works as intended and stays maintainable over time.",
  },
  {
    id: 8,
    img: "/React/react8.jpg",
    title: "Getting Started with React Context for Global State Management",
    author: "Chitranshi Gourana",
    date: "2024-11-11",
    description:
      "React Context is a powerful feature for managing global state without the need for external libraries. This blog explains how to create and use contexts effectively, covering topics like provider and consumer patterns, using hooks like `useContext`, and avoiding unnecessary re-renders. We’ll also discuss when to use Context over alternatives like Redux. By the end, you’ll know how to manage state seamlessly in small to medium-sized applications.",
  },
];

export const iconFun = [
  { name: "like", icon: <IoIosHeartEmpty /> },
  { name: "comment", icon: <FaRegCommentAlt /> },
  { name: "share", icon: <CiShare2 /> },
];
