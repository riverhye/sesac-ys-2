function ProductCard(props) {
  return (
    <section className="product-card">
      <div className="product-card__img-body">
        <div className="product-card__img">
          <img src={props.productPoster} alt="{props.index} img" />
        </div>
        <div className="product-card__ranking">
          <span>{props.ranking}</span>
        </div>
      </div>
      <div className="product-card__info">
        <span className="product-card__brand-name">{props.brandName}</span>
        <span className="product-card__product-name">{props.productName}</span>
        <span className="product-card__original-price">
          {props.originalPrice}
        </span>
        <span className="product-card__discount-rate">
          {props.discountRate}%
        </span>
        <span className="product-card__current-price">
          {props.currentPrice}원
        </span>
      </div>
      <div className="product-card__icon-body">
        <div className="product-card__like-body">
          <i className="heart"></i>
          <span>{props.productLike}</span>
        </div>
        <div className="product-card__comment-body">
          <i className="message"></i>
          <span>{props.productComment}</span>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
