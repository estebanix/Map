import { SideMenu } from "../../components/SideMenu/SideMenu";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
    return (
        <div className={styles.appPageContainer}>
            <SideMenu />
            <div>
                
            </div>
        </div>
    );
}