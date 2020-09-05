import React, { ReactElement } from "react";
import GlassCaseCard, {
  GlassCaseCardProps,
} from "src/components/cards/GlassCaseCard";
import Inspiration from "src/assets/GlassCase/Inspirational.png";
import Cartoon from "src/assets/GlassCase/Cartoon.png";
import Scenery from "src/assets/GlassCase/Scenery.png";
import Special from "src/assets/GlassCase/Special.png";
import Game from "src/assets/GlassCase/Games.png";

export default function GlassCase(): ReactElement {
  const CARDS: GlassCaseCardProps[] = [
    { name: "Cartoons", image: Cartoon },
    { name: "Quotes", image: Inspiration },
    { name: "Special", image: Special },
    { name: "Beautiful", image: Scenery },
    { name: "Fun", image: Game },
  ];
  return (
    <section className="d-flex blue-200-bg flex-column align-items-center py-5">
      <div className="d-flex flex-column justify-content-center text-center px-3">
        <span className="dark p2 font-weight-bold">
          Always stay close, no matter the distance.
        </span>
        <span className="mt-3">
          In just a few taps, you can turn photos, letters, and postcards into
          lasting memories.
        </span>
      </div>
      <div className="d-flex flex-row w-100 justify-content-center mt-5 scrolling-wrapper-flexbox">
        {CARDS.map((card) => (
          <GlassCaseCard name={card.name} image={card.image} />
        ))}
      </div>
    </section>
  );
}
