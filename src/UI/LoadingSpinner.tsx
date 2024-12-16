import { useTheme } from "next-themes";
import styles from "./Loading.module.css";
import { useEffect, useState } from "react";

const LoadingSpinner = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className={styles.spinner}>
                <div className={styles["lds-roller"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    // fallback to lightMode
    const currentTheme = theme || resolvedTheme || 'light';
    const themeClass = currentTheme === 'light'
        ? styles['light-theme']
        : currentTheme === 'dark'
            ? styles['dark-theme']
            : styles['system-theme'];

    return (
        <div className={`${styles.spinner} ${themeClass}`}>
            <div className={styles["lds-roller"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;