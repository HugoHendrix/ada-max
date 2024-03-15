import {
  Alert,
  Button,
  IconEyeClosed,
  IconEyeOpened,
  Input,
} from "../../components";
import styles from "./index.module.css";


import { useLogin } from "./hooks/use-login";
import { useTranslations } from "../../hooks/useI18n";
import { Header } from "../../components/Header";

export const Login = () => {
  const t = useTranslations();
  const {
    handleSubmit,
    register,
    errors,
    isPending,
    isError,
    showPassword,
    togglePassword,
  } = useLogin();

  return (
    <div className={styles.container}>
      <Header buttons="signDown" />
      <div className="content">
        <h1 className={styles.title}>{t.started}</h1>
        <div className="login">
          <h2 className={styles.title}>{t.signIn}</h2>
          <p className={styles["text-center"]}>{t["login.description"]}</p>
          <form onSubmit={handleSubmit}>
            <Input
              label={t.email}
              placeholder="email@email.com"
              disabled={isPending}
              error={errors?.email?.message}
              {...register("email")}
            />

            <div className="form-group">
              <label htmlFor="">{t.password}</label>
              <div className="input-with-icon">
                <Input
                  type={showPassword ? "text" : "password"}
                  disabled={isPending}
                  {...register("password")}
                />
                <Button className="eye" type="button" onClick={togglePassword}>
                  {showPassword ? <IconEyeClosed /> : <IconEyeOpened />}
                </Button>
              </div>
              {errors?.password?.message && (
                <span>{errors?.password?.message}</span>
              )}
            </div>
            <div>
              <Button type="submit" isLoading={isPending}>
                {t.signIn}
              </Button>
            </div>
            {isError && <Alert>{t.invalidCredentials}</Alert>}
          </form>
        </div>
      </div>
    </div>
  );
};
