"use client";
import { useEffect, useState } from "react";
import "./styles.css";

interface BlobArray {
  id: number;
  top: string;
  left: string;
  width: string;
  height: string;
  animationDelay: string;
}

function Blobs() {
  const [blobs, setBlobs] = useState<BlobArray[]>([]);

  useEffect(() => {
    const size = ["60", "100", "180", "210", "320"];

    const createRandomBalls = () => {
      const numberOfBalls = 35;

      const newBalls = Array.from({ length: numberOfBalls }, (_, index) => {
        const sizeBlob = `${size.at(Math.random() * size.length)}px`;
        const delay = `${(index + 1) * -0.2}s`;
        return {
          id: index,
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          width: sizeBlob,
          height: sizeBlob,
          animationDelay: delay,
        };
      });
      setBlobs(newBalls);
    };

    createRandomBalls();
  }, []);
  return (
    <div className="cont">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="drip"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.width,
            height: blob.height,
            animationDelay: blob.animationDelay,
          }}
        />
      ))}

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Blobs;
