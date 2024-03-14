import { useAuth } from "../../providers/AuthProvider";

export const Backstage = () => {
  const { logout } = useAuth();

  return (
    <div className="container">
      <div className="section">
        <h1 className="title">BACKSTAGE</h1>

      {/* TODO: Componentizar botão */}
        <button className="btn btn--white" onClick={() => logout()}>
          Logout{" "}
        </button>
        
      </div>
    </div>
  );
};
