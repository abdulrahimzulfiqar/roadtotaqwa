"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function App() {
  // Array of random quotes
  const quotes = [
    "The Prophet Muhammad (peace be upon him) said: Convey (knowledge) from me even if it is just one verse. – Sahih Al-Bukhari",
    "The Prophet Muhammad (peace be upon him) said: He who does not acquire knowledge with the sole intention of seeking the Pleasure of Allah but for worldly gain, will not smell the fragrance of Paradise on the Day of Resurrection. If you love what you are doing, you will be successful. – Abu Dawood",
    "The Prophet Muhammad (peace be upon him) said: The best among you are those who learn the Quran and teach it. – Sahih Al-Bukhari",
    "The Prophet Muhammad (peace be upon him) said: Whoever treads a path seeking knowledge, Allah will make easy for him the path to Paradise – Sahih Muslim",
  ];

  // State to store the selected random quote
  const [randomQuote, setRandomQuote] = useState("");

  // Function to update the random quote
  const updateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  // Use useEffect to update the random quote when the component mounts or updates
  useEffect(() => {
    updateRandomQuote();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-[400px] bg-golden mb-14">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Hadees</p>
            <p className="text-small text-default-500">Hadees of the day</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          {/* Display the random quote */}
          <p>{randomQuote}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://www.instagram.com/road_2_taqwa/"
          >
            Visit Instagram.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
