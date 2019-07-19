# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library that allows us to create reusable components to build our applications. It uses a virtual DOM and only updates changed components and data, rather than rendering all components and data. By using components, we're able to scale our applications and keep our workflow and code cleaner.

2. What does it mean to think in react?

Thinking in react is being able to think of things in terms of reusable components and breaking down items into into smaller parts that act as components that can be reused in multiple places.

3. Describe state.

State is an object with properties and can be initialized by props. By using setState(), state becomes mutable, and updates props, by re-rendering the specified props of our data.

4. Describe props.

Props are the actual properties of an object, and are passed to children components. Props are immutable and can only be changed by using state to update it's properties.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that changes something outside of the scope of the function being executed. The effect hook (useEffect()) is one of the tools to help us manage side effects with it's paramaters (function and then a dependency array).