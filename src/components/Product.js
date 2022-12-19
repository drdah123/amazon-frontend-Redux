import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

import { useDispatch, useSelector } from 'react-redux';
import cartAction from '../Redux/actions/cartAction';

function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const cartItems2 = useSelector((state) => state?.reducer2?.cart?.cartItems);
  const addToCartHandler = (item) => {
    const existItem = cartItems2.find((x) => x._id === product._id);
    dispatch(cartAction.cartAddItem(item, existItem));
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
