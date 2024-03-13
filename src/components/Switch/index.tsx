import clsx from 'clsx';
import { useI18n } from '../../hooks/useI18n'
import styles from "./index.module.css";

export default function Switch() {
  const { currentLanguage, setCurrentLanguage } = useI18n() as unknown as { currentLanguage: string, setCurrentLanguage: (language: string) => void }

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input type="checkbox"
          onChange={(event) => {
            setCurrentLanguage(event.target.checked ? 'en' : 'pt')
            localStorage.setItem("@lang", event.target.checked ? 'en' : 'pt')
          }}
          checked={currentLanguage === 'en'}
        />
        <span className={clsx(styles.slider,styles.round)}></span>
      </label>
    </div>
  )
}