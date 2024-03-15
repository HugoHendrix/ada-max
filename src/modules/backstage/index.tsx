import { Button } from "../../components";
import { useAuth } from "../../providers/AuthProvider";
import styles from "./index.module.css";
export const Backstage = () => {
  const { logout } = useAuth();

  return (
    <div className={styles.container}>
      <div className="section">
        <h1 className={styles.title}>BACKSTAGE</h1>
        <p>
          This is a protected route, only accessible to authenticated users.  
        </p>
        <Button onClick={() => logout()}>
          Logout
        </Button>
        
      </div>
    </div>
  );
};
