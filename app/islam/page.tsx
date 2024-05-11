import React from "react";
import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

export default function App() {
  const cardsData = [
    {
      title: "Dr Israr Ahhmed",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1200/1*UVpSmZxlh_todHsyA8RkUQ.jpeg",
      link: "https://example.com/dr-israr-ahmed",
    },
    {
      title: "Muhammad Ali Mirza",
      imageUrl:
        "https://www.onlykashmir.in/wp-content/uploads/2023/10/Engineer-Muhammad-Ali-Mirza-aka-EMAM.jpg",
      link: "https://example.com/muhammad-ali-mirza",
    },
    {
      title: "Tariq Jameel",
      imageUrl:
        "https://thecurrent.pk/wp-content/uploads/2022/12/maulana-tariq-jamil.jpg",
      link: "https://example.com/tariq-jameel",
    },
    {
      title: "Tuaha Ibn Jalil",
      imageUrl: "https://pbs.twimg.com/media/FT8UWG9XoAkJ5L3.jpg",
      link: "https://example.com/tuaha-ibn-jalil",
    },
    {
      title: "Dr Zakir Naik",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA045ViyCVMOnLIfvf8NA1efyJ9_1TyVYZrP27JKRdJA&s",
      link: "https://example.com/dr-zakir-naik",
    },
    // Add more card data as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-5">
      {/* Map over the cardsData array to render multiple cards */}
      {cardsData.map((card, index) => (
        <a
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          {/* Wrap each Card component with an anchor tag */}
          <Card className="py-1 mt-16 bg-golden">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{card.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover h-48 w-96"
                src={card.imageUrl}
                width={270}
              />
            </CardBody>
          </Card>
        </a>
      ))}
    </div>
  );
}
