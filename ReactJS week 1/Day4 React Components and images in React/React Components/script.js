import ReactDOM from "react-dom/client";
import "./style.css";

function Card(cardDetails) {
    const { id, thumbnail, title, description, price } = cardDetails;
  return (
    <div className="card" key={id}>
      <img src={thumbnail}></img>
      <h4>{title}</h4>
      <p>{description}</p>
      <h4>${ price}</h4>
    </div>
  );
}
// const cardContainer = [Card(1),Card(2),Card(3),Card(4),Card(5)];
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render( <div className='container'>
//     {cardContainer}
// </div>);

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const cardContainer2 = data.products.map((prd) => {
      return <Card key={prd.id} {...prd} />;
    });

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<div className="container">{cardContainer2}</div>);
  });


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <Card
//         id={1}
//         thumbnail="https://dummyjson.com/data/products/1/thumbnail.jpg"
//         title="iPhone 9"
//         description="An apple mobile which is nothing like apple"
//         price="549"
//     />
// );

