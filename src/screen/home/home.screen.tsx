import { useTranslation } from "react-i18next";

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>
        {t("descriptionHome")}
        <a
          style={{ color: "black" }}
          href="https://jsonplaceholder.typicode.com/"
        >
          {" "}
          JSONPlaceholder
        </a>
      </h1>
    </div>
  );
};
