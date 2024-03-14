import {
  Alert,
  Button,
  IconEyeClosed,
  IconEyeOpened,
  Input,
} from "../../components";


// TODO: usar css moduless

import { Link } from "react-router-dom";
import { useLogin } from "./hooks/use-login";
import { useTranslations } from "../../hooks/useI18n";

export const Login = () => {
  const  t  = useTranslations();
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
    <div className="container">
      <div className="header">
        <Link to="/" className="logo">
          <img src="/max.webp" alt="Ada Max" />
        </Link>

        <Button variant="subtle">{t["login.signUp"]}</Button>
      </div>
      <div className="content">
        <h1 className="title">{t.started}</h1>
        <div className="login">
          <h2 className="title">{t.signIn}</h2>
          <p className="text-center">{t["login.description"]}</p>
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
              {/* TODO: criem um componente suportando o ícone */}
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
