/*React has "declarative views" instead of "imperative views":
    Declarative Programming allows us to control flow and state.
    Declarative programming tells us "how it should look".
    We can make interactive User Interfaces (UIs) by changing the state of a component, then React updates the DOM accordingly.
    
     Imperative Programming is the instruction on how to make it look that way.
    React already knows how to communicate with the DOM when the state changes, making it Declarative.
     Declarative programming makes our code more readable. We only focus on how things should look and not the detailed instructions on how to make them look this way.
     React basically focuses on the way the browser displays the code. In other words, "I want the page to look like this when it is rendered and it doesn't matter how it happened".

     2. REACT WORKFLOW FOR LOCAL DEVELOPMENT

 To improve performance of our React application we will keep it as small and optimized as possible by building
this workflow.

 This is for both SPA (single page applications) and MPA (multipage applications).
Single Page Application:
On page load the browser gets back 1 HTML page from the server. Everything else occurs on the browser. JavaScript renders and manages all components. React is an excellent solution for Single Page Applications!

Multipage Application:
We get back different pages from the web server. All the content is rendered on the server. Only individual widgets/components are managed by React.

We need to use Next-Gen JavaScript features to write less error prone code.
Since all browsers don't support these ES6 features yet, we need to build a workflow that will compile these
features.

 We need a dependency management tool (third party javascript packages), such as React, React DOM, and the
compiler to convert next gen JavaScript to current gen JavaScript.

 We will need either node's package manager or yarn. For this course we will be using npm, which will allow us to
manage all the packages.

 We will also need a bundler such as Webpack, so that our code gets bundled into a couple of files for better
browser support.

 Babel is included into the WebPack configuration. Babel compiles/translates these modern js features
into traditional js features for older browsers.

 We also need a development server that will run locally on our machine to do testing.

 Create React App is a tool that we will use to create our React projects.
    */
