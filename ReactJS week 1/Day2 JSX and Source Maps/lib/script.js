// const h2 = <h2>Using JSX</h2>;
// ReactDOM.render(h2, document.getElementById('root'));

//How to use JavaScript inside JSX

const userName = "M Fuzail";
const h1 = /*#__PURE__*/React.createElement("h1", null, "Hello ", /*#__PURE__*/React.createElement("b", null, userName), " ");
ReactDOM.render(h1, document.getElementById('root'));
console.log(h1);
//# sourceMappingURL=script.js.map
