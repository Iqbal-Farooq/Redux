import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products=[{
    id:'p1',
     price:200,
     title:"book"
     ,},
     {
      id:'p2', 
      price:100,
      title:"bat"
     },
     {
      id:'p',
       price:400,
       title:"phone"
     }
    
    
    
    ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {products.map((item)=>{return <ProductItem
       title={item.title}  
       price={item.price}
        id={item.id}>
          
        </ProductItem>})}
       
      </ul>
    </section>
  );
};

export default Products;
