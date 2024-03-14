import {Alert, Avatar, Button, Input, Loader, Title} from "../../../components";
import { AvatarPicker } from "../components/avatar-picker";
import styles from "./index.module.css";
import { useCreateProfile } from "./hooks/use-create-profile";
import { useTranslations } from "../../../hooks/useI18n";

export const CreateProfile = () => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    handleClose,
    errors,
    isPending,
    isError,
    avatar,
    selectAvatar,
    isDisabled,
    open,
    close,
    isOpen,
  } = useCreateProfile();

  return (
    <>
      <div className="container">
        <div className={styles.limiter}>
          <div className={styles.container}>
            <Title>{t["profile.create"]}</Title>
            <div className={styles["flex-center"]} onClick={open}>
              <Avatar image={avatar?.image} isEdit />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <Input
                  type="hidden"
                  error={errors?.avatarId?.message}
                  {...register("avatarId")}
                />
                <Input
                  label={t["profile.name"]}
                  disabled={isPending}
                  error={errors.name?.message}
                  {...register("name")}
                />
              </div>
              <div className={styles.actions}>
                <Button
                  type="submit"
                  fullWidth
                  isLoading={isPending}
                  disabled={isDisabled}
                >
                  {t["profile.save"]}
                </Button>
                <Button variant="filled" onClick={handleClose} type="button">
                  {t["profile.cancel"]}
                </Button>
              </div>
            </form>
            {isError && <Alert>{t["profile.error"]}</Alert>}
          </div>
        </div>
      </div>
      {isOpen ? (
        <AvatarPicker onSelectAvatar={selectAvatar} onClose={close} />
      ) : null}

      {isPending && <Loader />}
    </>
  );
};
