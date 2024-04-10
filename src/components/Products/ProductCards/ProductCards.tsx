import styles from "./ProductCards.module.css";

interface IProductCards {
  id: string;
  imgProduct: string;
  colors: Array<string>;
  price: number;
  title: string;
  description: string;
}

export function ProductCard({ product }: { product: IProductCards }) {
  return (
    <div className={styles.container}>
      <img src={product.imgProduct} alt={product.title} />
      <div>
        {product.colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: "20px",
              height: "20px",
              borderRadius: "4px",
              display: "inline-block",
              cursor: "pointer",
              margin: "8px 5px",
            }}
          ></div>
        ))}
      </div>
      <p className={styles.price}>
        {product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.button}>Adicionar</button>
      </div>
    </div>
  );
}
