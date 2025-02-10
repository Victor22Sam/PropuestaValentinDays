import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás segura?",
      "¿Realmente segura?",
      "¡Piensa otra vez!",
      "¡Última oportunidad!",
      "¿Segura que no?",
      "¡Podrías arrepentirte de esto!",
      "¡Piénsalo otra vez!",
      "¿Estás completamente segura?",
      "¡Esto podría ser un error!",
      "¡Ten corazón!",
      "¡No seas tan fría!",
      "¿Cambio de opinión?",
      "¿No lo reconsiderarías?",
      "¿Es esa tu respuesta final?",
      "Me estás rompiendo el corazón ;(",
      "¿Es esa tu respuesta final?",
      "Me estás rompiendo el corazón ;(",
      "¿Plis? :( Me estás rompiendo el corazón",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://i.pinimg.com/originals/7a/3e/fb/7a3efb5796251264f6102722949b7ce9.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            SIIIIII, YO SABIA QUE SI, GRACIASSSSSSSSSSSSSSSS!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Hola mi tarroncito de azucar!
          </h1>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://i.pinimg.com/originals/da/f3/a4/daf3a4c4ec06aea34548831c80421207.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Quieres ser mi San Valentin?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              SI
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      target="__blank"
    >
      Hecho con mucho cariño por tu Novio: {" SamyLopez "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
