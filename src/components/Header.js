export default function Header({val, setVal, className}) {
  const searchHandler = () => {
      setVal("");
    };
    const typeHandler = (e) => {
      setVal(e.target.value);
    };
return (
  <div className={className}>
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
    </div>
  </div>
);
}