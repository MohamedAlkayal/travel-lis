export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Ading Items to your packing list 🚀</em>
      </p>
    );

  const packedItems = items.filter((item) => item.packed);
  const packedItemsPercentage = Math.round(
    (packedItems.length / items.length) * 100
  );

  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? "you got everything! Ready to go ✈️"
          : `💼 You have ${items.length} items on your list, and you already packed (${packedItems.length}) (${packedItemsPercentage} %)`}
      </em>
    </footer>
  );
}
