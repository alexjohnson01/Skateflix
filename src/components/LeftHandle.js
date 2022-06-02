export default function LeftHandle({
  cardsIndex,
  setCardsIndex,
  css,
  leftCycle,
}) {
  const onHandleClickLeft = () => {
    if (cardsIndex === 0) {
      setCardsIndex(2);
      document.documentElement.style.setProperty(css, 2);
      return;
    }
    let index = cardsIndex - 1;
    setCardsIndex(index);
    document.documentElement.style.setProperty(css, index);
  };
  return (
    <button className="handle left-handle" onClick={onHandleClickLeft}>
      <div className="text">&#8249;</div>
    </button>
  );
}
