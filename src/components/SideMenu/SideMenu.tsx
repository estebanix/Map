import individuals from "../../data/individuals";

import styles from "./SideMenu.module.scss";

export const SideMenu = () => {
    const ind = individuals.map((dat) => {
        return <div className={styles.individualBox}>
            <p>{dat.Individual}</p>
        </div>
    })
    return (
        <div className={styles.sideMenuContainer}>
            {ind}
        </div>
    );
}