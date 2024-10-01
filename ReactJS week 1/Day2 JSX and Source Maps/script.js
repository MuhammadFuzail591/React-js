// const h2 = <h2>Using JSX</h2>;
// ReactDOM.render(h2, document.getElementById('root'));

//How to use JavaScript inside JSX

const userName = "M Fuzail";

const h1 = <h1>Hello <b>{userName}</b> </h1>;
ReactDOM.render(h1, document.getElementById('root'));

console.log(h1);