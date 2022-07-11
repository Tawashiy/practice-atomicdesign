import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";

import "./styles.css";

const user = {
  name: "わんこ",
  image: "https://source.unsplash.com/Sg3XwuEpybU",
  email: "aaa@aaaa.aa",
  phone: "090-0000-0000",
  company: {
    name: "わんこ株式会社"
  },
  website: "htttp://asasas"
};

export const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>ぼたん</PrimaryButton>
        <SecondaryButton>ぼたん</SecondaryButton>
        　 <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
};
