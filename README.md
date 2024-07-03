<React.StrictMode> would make its initial rendered twice in main.jsx

---

npm create vite@4.1.0
Choose React, then JavaScript

---

What are Hooks?

Hooks are special functions, that allow us to use state and other React features in functional components.

Earlier, when we used to create react app using Functional component, then we did not have access to the state management and lifecycle methods.

To access these features we had to add class components. So this was the problem with functional component.

But after introducing React Hooks from version 16.8, we can now use state management and other react features without writing class components.

In other words, Hooks are the functions that make functional components work like class components.

Hooks made react functional components so easy to use.

Developers prefer functional components over class components.

Benefits of React Hooks?

React Hooks simplify the code, improves the readability, reusability and overall performance of the application.

---

useEffect

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are:

- Fetching data from API
- Directly upating the DOM
- Timers like SetTimeOut and SetInterval

---

useRef

useRef is a react hook that allow us to create mutable variables, which will not re-render the component.

useRef is also used for accessing DOM elements.

---

useMemo

The React useMemo Hook returns a memorized value. (It is like caching a value so that it does not need to be recalculated.)

The useMemo Hook only runs when one of its dependencies gets updated.

This can improve the performance of the application. There is one more hook in react to improve performance, that is useCallback hook.

The useMemo and useCallback hooks are similar. The main difference is

- useMemo returns a memorized value.
- useCallback returns a memorized function.

---

useCallback

useCallback is a React Hook that let you cache a function definition between re-renders. This means that by using useCallback, it does not create multiple instance of same function when re-rendering happens.

It provides the cached function on re-rendering of the component, instead of creating a new instance of the function.

---

useContext

useContext is a React Hook that allows you access data from any component without explicitly passing it down through props at every level.

useContext is used to manage Global data in the React App.

---

useReducer

useReducer is similar to useState, but instead of providing state & setter function, it provides state and dispatch function.

The useReducer Hook accepts two arguments

- Reducer function, which specifies how the state gets updated.
- initial state

and returns: current state and dispatch method
