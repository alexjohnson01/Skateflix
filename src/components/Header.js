export default function Header({val, setVal}) {
  const searchHandler = () => {
      setVal("");
    };
    const typeHandler = (e) => {
      setVal(e.target.value);
    };
return (
  <div className="header">
    <h1>LOGO</h1>
    <div className="header-container">
      <input
        className={"searchTrue"}
        type="text"
        value={val}
        onInput={typeHandler}
      />
      <button className="signin" onClick={searchHandler}>
        search
      </button>
      <button className="signin">:)</button>
    </div>
  </div>
);
}