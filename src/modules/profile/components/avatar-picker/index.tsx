import { Avatar } from "../../../../components/Avatar";
import { AvatarType } from "../../../../types";
import styles from "./index.module.css";
import { useGetAvatars } from "../../hooks/use-get-avatars";
import { useTranslations } from "../../../../hooks/useI18n";
import { Button } from "../../../../components";

type Props = {
  onSelectAvatar: (avatar: AvatarType) => void;
  onClose: () => void;
};

export const AvatarPicker = ({ onSelectAvatar, onClose }: Props) => {
  const { data, isLoading } = useGetAvatars();
  const t = useTranslations();
  if (isLoading) {
    return <div>{t.loading}</div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <div className={styles.close}>
            <Button variant="filled" onClick={onClose}>
              {t.back}
            </Button>
          </div>
        <div className={styles.section}>
          <h1 className={styles.title}>{t["avatar.picker"]}</h1>
        </div>
        <div className={styles.avatars}>
          <div className={styles.scroll}>
            {data?.map((avatar) => {
              return (
                <div className={styles.box} key={avatar.name}>
                  <h4 id={avatar.name}>{avatar.name}</h4>
                  <div className={styles.box__items}>
                    {avatar.items.map((item) => (
                      <span
                        onClick={() => onSelectAvatar(item)}
                        key={item.id}
                        className={styles.box__items__item}
                      >
                        <Avatar image={item.image} size="large" />
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
