export default function RightHandle({
  cardsIndex,
  setCardsIndex,
  css,
}) {
  //Functions
  const onHandleClickRight = () => {
    let index = cardsIndex + 1;
    setCardsIndex(index);
    document.documentElement.style.setProperty(css, index);
    console.log(cardsIndex);
    if (cardsIndex === 2) {
        setCardsIndex(0);
        document.documentElement.style.setProperty(css, 0);
        return;
      }
  };
  return (
    <button className="handle right-handle" onClick={onHandleClickRight}>
      <div className="text">&#8250;</div>
    </button>
  );
}
