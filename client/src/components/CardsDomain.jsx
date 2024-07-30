import React from "react";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";

function CardsDomain({ imageUrl, title, description }) {
  return (
    <div>
      <FlippingCard>
        <FlippingCardBack>
          <div className="bg-[#262626] max-w-2xl h-[45vh] rounded-3xl overflow-hidden shadow shadow-slate-500 border border-white">
            <div className="px-6 py-4">
              <p className="text-[#d1d1c7] text-xl mb-2">{description}</p>
            </div>
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <div className="max-w-2xl h-[50vh] rounded overflow-hidden shadow shadow-slate-500">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
            </div>
          </div>
        </FlippingCardFront>
      </FlippingCard>
    </div>
  );
}

export default CardsDomain;
