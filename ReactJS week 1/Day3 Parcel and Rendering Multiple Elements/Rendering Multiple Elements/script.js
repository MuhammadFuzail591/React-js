import ReactDOM from 'react-dom/client'
import "./style.css"


function Card(key,image,title,description,price){
    return <div className='card' key={key}>
    <img src={image}></img>
    <h4>{title}</h4>
    <p>{description}</p>
    <h4>${price}</h4>
    </div>
}



// const cardContainer = [Card(1),Card(2),Card(3),Card(4),Card(5)];
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render( <div className='container'>
//     {cardContainer}
// </div>);



fetch("https://dummyjson.com/products")
.then((response) => response.json())
.then((data) => {
    const cardContainer2 = data.products.map((prd)=>{
            return Card(prd.id,prd.thumbnail,prd.title,prd.description,prd.price)
    })

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render( <div className='container'>
        {cardContainer2}
    </div>);
})