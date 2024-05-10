import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function App() {
  const cardsData = [
    {
      title: "Frontend Radio",
      subtitle: "12 Tracks",
      imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      title: "Backend Beats",
      subtitle: "10 Tracks",
      imageUrl:
        "https://thecurrent.pk/wp-content/uploads/2022/12/maulana-tariq-jamil.jpg",
    },
    {
      title: "Backend Beats",
      subtitle: "10 Tracks",
      imageUrl:
        "https://thecurrent.pk/wp-content/uploads/2022/12/maulana-tariq-jamil.jpg",
    },
    {
      title: "Backend Beats",
      subtitle: "10 Tracks",
      imageUrl:
        "https://thecurrent.pk/wp-content/uploads/2022/12/maulana-tariq-jamil.jpg",
    },
    {
      title: "Backend Beats",
      subtitle: "10 Tracks",
      imageUrl: "https://example.com/backend-beats.jpeg",
    },
    // Add more card data as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-5 ">
      {/* Map over the cardsData array to render multiple cards */}
      {cardsData.map((card, index) => (
        <Card key={index} className="py-1 mt-16 bg-golden">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">{card.subtitle}</small>
            <h4 className="font-bold text-large">{card.title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={card.imageUrl}
              width={270}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
