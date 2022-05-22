import React, { useState } from "react";
import Card from "./Card";
import Categories from "./Categories";
import items from "./data";
import logo from "./images/cse.png";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [cardItems, setCardItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setCardItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setCardItems(newItems);
  };

  return (
    <main>
      <section className="notes__section">
        <div className="notes__title">
          <img src={logo} alt="logo" className="logo" />
          <h2 className="notes__heading">Notes</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Card items={cardItems} />
      </section>
    </main>
  );
};

export default App;
