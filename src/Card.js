import React from "react";

const Card = ({ items }) => {
  return (
    <div className="card__section">
      {items.map((item) => {
        const { id, title, img, desc } = item;
        return (
          <article key={id} className="card__item">
            <img src={img} alt={title} className="card__photo" />
            <div className="card__info">
              <header>
                <h4 className="card__title">{title}</h4>
              </header>
              <p className="card__text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Card;
