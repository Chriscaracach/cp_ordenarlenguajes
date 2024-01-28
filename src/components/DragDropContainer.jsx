// DragDropContainer.js
import { Stack } from "rsuite";
import LanguageCard from "./LanguageCard";
import { useState } from "react";

const DragDropContainer = () => {
  const [languagesAvailable, setLanguagesAvailable] = useState([
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Ruby",
    "Python",
    "Perl",
    "PHP",
    "Swift",
    "Kotlin",
    "TypeScript",
    "Rust",
    "Go",
  ]);
  const [languagesSelected, setLanguagesSelected] = useState([]);

  const handleAvailableCardClick = (language) => {
    setLanguagesAvailable((prevAvailable) =>
      prevAvailable.filter((lang) => lang !== language)
    );
    setLanguagesSelected((prevSelected) => [...prevSelected, language]);
  };

  const handleSelectedCardClick = (language) => {
    setLanguagesSelected((prevAvailable) =>
      prevAvailable.filter((lang) => lang !== language)
    );
    setLanguagesAvailable((prevSelected) => [...prevSelected, language]);
  };

  return (
    <Stack direction="column" alignItems="stretch" spacing={50}>
      {languagesAvailable.length && (
        <Stack className="Language-Card-Container" spacing={10}>
          {languagesAvailable.map((language) => (
            <LanguageCard
              key={language}
              language={language}
              onClick={() => handleAvailableCardClick(language)}
            />
          ))}
        </Stack>
      )}

      <Stack className="Language-Card-Container" spacing={10}>
        {!languagesSelected.length ? (
          <h5>Hacé click en los lenguajes para ordenarlos</h5>
        ) : (
          languagesSelected.map((language, index) => {
            return (
              <LanguageCard
                key={language}
                language={language}
                index={index}
                onClick={() => handleSelectedCardClick(language)}
              />
            );
          })
        )}
      </Stack>
    </Stack>
  );
};

export default DragDropContainer;
