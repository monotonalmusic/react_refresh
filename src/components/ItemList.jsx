// Hvad er fejlen her og hvordan løses den?

const ItemList = () => {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    //key skal tilføjes

    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
