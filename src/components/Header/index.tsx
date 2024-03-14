import clsx from "clsx";
import { Button } from "..";
import Switch from "../Switch";
import { useTranslations } from "../../hooks/useI18n";
import { useAuth } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./index.module.css";

export const Header = () => {
    const { user } = useAuth();
    const  t  = useTranslations();
    const navigate = useNavigate();

    function handleClick() {
        if (user) {
            navigate(ROUTES.PROFILE);
            return;
        }
            navigate(ROUTES.LOGIN);
    }

    return (
        <div className={clsx(styles["bg-black"], styles.header)}>
            <Link to="/" className="logo">
                <img src="/max.webp" alt="Ada Max" />
            </Link>
            <div className={styles.space}>
                <Switch />
                <Button variant="subtle" onClick={handleClick}>
                {t.signIn.toLocaleUpperCase()}
                </Button>
                <Button variant="secondary">
                {t["home.signUp"].toLocaleUpperCase()}
            </Button>
            </div>
        </div>
    );
    
}


