import React, { useEffect, useState } from "react";
import "../../styles/cases.scss";

//images
import anishaImg from "url:../../../images/avatar-anisha.png";
import aliImg from "url:../../../images/avatar-ali.png";
import richardImg from "url:../../../images/avatar-richard.png";
import shanaiImg from "url:../../../images/avatar-shanai.png";

const Slides = function (props) {
  const { data } = props;

  return data.map((person) => {
    return (
      <div key={person.id} className="slide">
        <img src={person.img} alt={`${person.name} image`} />
        <h2>{person.name}</h2>
        <p>{person.words}</p>
      </div>
    );
  });
};

const Slider = function () {
  const data = [
    {
      name: "Anisha Li",
      words:
        "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
      img: anishaImg,
      id: 1,
    },
    {
      name: "Ali Bravo",
      words:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused",
      img: aliImg,
      id: 2,
    },
    {
      name: "Richard Watts",
      words:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
      img: richardImg,
      id: 3,
    },
    {
      name: "Shanai Gough",
      words:
        "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
      img: shanaiImg,
      id: 4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  let movesCounter = 0;

  const moveTo = function () {
    console.log(movesCounter);
    document.querySelectorAll(".slide").forEach((slide) => {
      slide.style.transform = `translateX(${movesCounter * -100}%)`;
    });
    setCurrentSlide(movesCounter + 1);
  };

  //move to the next slide
  const moveSlide = function (move) {
    if (move === "next") {
      if (movesCounter >= 3) {
        movesCounter = -1;
      }
      movesCounter++;
      moveTo();
    }
    if (move === "preview" && movesCounter > 0) {
      movesCounter--;
      moveTo();
    }
  };

  const setSlide = function (slide) {
    movesCounter = slide;
    moveTo();
  };

  //change the icon (slide indicator)
  useEffect(() => {
    document
      .querySelectorAll(".person-opt")
      .forEach((li) => li.classList.remove("current-slide"));
    document
      .querySelector(`.person-${currentSlide}`)
      .classList.add("current-slide");
  }, [currentSlide]);

  //Espera por um clique nos botões de controle ou nos indicadores
  useEffect(() => {
    document
      .querySelector("#next-slide")
      .addEventListener("click", () => moveSlide("next"));
    document
      .querySelector("#prev-slide")
      .addEventListener("click", () => moveSlide("preview"));

    document.querySelectorAll(".person-opt").forEach((indicator, i) => {
      indicator.addEventListener("click", () => setSlide(i));
    });
  }, []);

  return (
    <section id="cases-sec">
      <h2>What they've said</h2>
      <div id="slider">
        <Slides data={data} />
      </div>
      <div id="slider-control">
        <button id="prev-slide">&lt;</button>
        <ul>
          <li className="person-opt person-1"></li>
          <li className="person-opt person-2"></li>
          <li className="person-opt person-3"></li>
          <li className="person-opt person-4"></li>
        </ul>
        <button id="next-slide">&gt;</button>
      </div>
      <button className="get-started">Get started</button>
    </section>
  );
};

export default Slider;
