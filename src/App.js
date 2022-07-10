import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";

import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <PrimaryButton>ぼたん</PrimaryButton>
      <SecondaryButton>ぼたん</SecondaryButton>
      　 <br />
      <SearchInput />
    </div>
  );
};
