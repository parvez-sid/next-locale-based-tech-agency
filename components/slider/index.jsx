import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Heading, Text } from "@radix-ui/themes";

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide slides justify-items-center content-center">
          <Heading as="h1">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </Heading>
          <Text as="p" className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem sunt aliquid non, quidem voluptas, obcaecati, ducimus
            at reiciendis consectetur facilis sequi autem! Perspiciatis
            voluptate quia praesentium, ipsa ipsam nostrum possimus?
          </Text>
        </div>
        <div className="keen-slider__slide slides justify-items-center content-center">
          <Heading as="h1">
            Box 2
          </Heading>
          <Text as="p" className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem sunt aliquid non, quidem voluptas, obcaecati, ducimus
            at reiciendis consectetur facilis sequi autem! Perspiciatis
            voluptate quia praesentium, ipsa ipsam nostrum possimus?
          </Text>
        </div>
        <div className="keen-slider__slide slides justify-items-center content-center">
          <Heading as="h1">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum - 3
          </Heading>
          <Text as="p" className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem sunt aliquid non, quidem voluptas, obcaecati, ducimus
            at reiciendis consectetur facilis sequi autem! Perspiciatis
            voluptate quia praesentium, ipsa ipsam nostrum possimus?
          </Text>
        </div>
      </div>
    </>
  );
};

export default Slider;
