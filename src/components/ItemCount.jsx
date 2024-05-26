import "../styles/ItemCount.css";

const ItemCount = ({ stock, count, increment, decrement }) => {
  return (
    <div className="btnContainer">
      <div>
        <button className="btnAdd" onClick={decrement} disabled={count <= 0}>
          -
        </button>
        <span className="numberCount">{count}</span>
        <button
          className="btnAdd"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
