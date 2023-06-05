/* eslint-disable prettier/prettier */
import Pedigree from "./Pedigree";

const App = () => {
  const handlePerroClick = (perroId) => {
    // Handle the click event, e.g., update the state with the selected perroId
    console.log(`Perro clicked: ${perroId}`);
  };

  return (
    <div>
      <Pedigree handlePerroClick={handlePerroClick} />
      {/* Render other components */}
    </div>
  );
};

export default App;