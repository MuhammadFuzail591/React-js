const myReactElement = React.createElement(
  "div",
  { className: "my-react-element" },
  [
    React.createElement(
      "h1",
      { className: "my-heading", key: "heading" },
      "First React Element"
    ),
    React.createElement(
      "section",
      { className: "my-react-section", key: "paragraph", style:{backgroundColor:"black", color:"white",padding:10, borderRadius:10} },
      [
        React.createElement(
          "p",
          { className: "my-paragraph", key: "paragraph-1" },
          "The Library for web and native user interfaces"
        ),
        React.createElement(
          "p",
          { className: "my-paragraph", key: "paragraph-2" },
          "React expects each element in a list have a unique key"
        ),
        React.createElement(
          "img",
          { className: "my-img", key: "img-1",style:{borderRadius:10}, src: "https://reactjs.org/logo-og.png" }
        ),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(myReactElement);
