import "./ItemCounter.css";

export default function ItemCounter({ stock, count, increase, decrease }) {
  return (
    <div className="itemCounter">
      <button
        className="counterButton"
        onClick={decrease}
        disabled={count <= 0}
      >
        -
      </button>
      <span className="counterRender">{count}</span>
      <button
        className="counterButton"
        onClick={increase}
        disabled={count >= stock}
      >
        +
      </button>
    </div>
  );
}
