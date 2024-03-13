import { Avatar, Button, Loader, Title } from "../../../components";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useGetProfiles } from "../hooks/use-get-profiles";
import { useProfile } from "./hooks/use-profile";
import { useAuth } from "../../../providers/AuthProvider";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useEffect } from "react";

export const Profile = () => {
  const { data, isLoading } = useGetProfiles();
  const { logout } = useAuth();
  const { goToPage, isEditing, toggleEditing } = useProfile();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage("pt");
    }, 2000);
  }, [i18n]);

  return (
    <>
      <div className="container">
       
       <div>  
        <div className="section">
          <div className={styles["btn-logout"]}>

            {/* TODO: Componentizar botão */}
            <Button variant="filled" onClick={() => logout()}>
              {t("profile.logout")}
            </Button>
         
          </div>

      
            <Title>{t("profile.title")}</Title>

            {/* TODO: componentizar esses aqui */}
            <div className={styles.avatars}>
              {data?.map((profile) => (
                <button
                  className={styles.avatar__item}
                  key={profile.id}
                  onClick={() => goToPage(profile.id)}
                >
                  <Avatar image={profile.avatar.image} isEdit={isEditing} />
                  <div className={styles.avatar__name}>{profile.name}</div>
                </button>
              ))}
              <Link
                to="/create-profile"
                className={clsx(styles.avatar__item,styles["avatar__item--new"] )}
              >
                <div  className={styles.avatar__image}>+</div>
                <div className={styles.avatar__name}>{t("profile.newProfile")}</div>
              </Link>
            </div>

            <div className={styles.avatar__actions}>
              <Button variant="filled" onClick={toggleEditing}>
                {isEditing ? t("profile.done") : t("profile.edit")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
