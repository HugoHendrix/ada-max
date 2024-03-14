import { Button } from "../../components";
import { Header } from "../../components/Header";
import styles from "./index.module.css";
import clsx from "clsx";
import { useTranslations } from "../../hooks/useI18n";
import { useNavigate } from "react-router-dom";

export const PageDefault = () => {
    const t = useTranslations();
    const navigate = useNavigate();
    return (
    <div className={clsx(styles["h-100vh"], "container")}>
        <Header />
        <section
        className={clsx(
            styles["bg-img"],
            styles["max-section-hero"],
            styles["h-100"]
        )}
    >
        <div className="">
            <div>
                <div className="text-center">
                <h1>{t["pageDefault.error"]} <br /> {t["pageDefault.message"]}</h1>
                </div>
            </div>
                <Button onClick={() => navigate("/")}>{t["pageDefault.button"]}</Button>
        </div>
    </section>
    </div>
);
};

