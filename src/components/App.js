import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handelTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirm) setItems([]);
  }

  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handelAddItems} />
      <PackageList
        items={items}
        onDeleteItem={handelDeleteItem}
        onTogglePacked={handelTogglePacked}
        onClearList={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}
