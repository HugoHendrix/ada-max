
import { Button } from "..";
import { useTranslations } from "../../hooks/useI18n";
import styles from "./index.module.css";
import clsx from "clsx";


export const PageError = () => {

    const t = useTranslations();

    function handleClick(){
        window.location.href = '/'
    }


    return (
    <div className={clsx(styles["h-100vh"], styles.container)}>
        <section
        className={clsx(
            styles["bg-img"],
            styles["max-section-hero"],
            styles["h-100"]
        )}
    >
        <div>
            <h1>
                {t.pageError}
            </h1>
            <Button onClick={handleClick}>
                {t["pageDefault.button"]}
            </Button>
        </div>
    </section>
    </div>
);
}