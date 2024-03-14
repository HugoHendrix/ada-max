import { Avatar, Button, Loader, Title } from "../../../components";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useProfile } from "./hooks/use-profile";
import { useAuth } from "../../../providers/AuthProvider";
import clsx from "clsx";
import { useTranslations } from "../../../hooks/useI18n";

export const Profile = () => {

  const { logout } = useAuth();

  const { profiles, goToPage, isEditing, toggleEditing, isLoading } =
    useProfile();

  const t = useTranslations();


  return (
    <>
      <div className="container">
      
      <div>  
        <div className="section">
          <div className={styles["btn-logout"]}>
            <Button variant="filled" onClick={() => logout()}>
              {t.signOut}
            </Button>
          </div>
            <Title>{t['profile.who']}</Title>

            {/* TODO: componentizar esses aqui */}
            <div className={styles.avatars}>
              {profiles?.map((profile) => (
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
                <div className={styles.avatar__name}>{t["profile.newProfile"]}</div>
              </Link>
            </div>

            <div className={styles.avatar__actions}>
              <Button variant="filled" onClick={toggleEditing}>
                {isEditing ? t["profile.done"] : t["profile.button.edit"]}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
