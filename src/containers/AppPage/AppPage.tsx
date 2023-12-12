import { MapPlot } from "../../components/MapPlot";
import { SideMenu } from "../../components/SideMenu/SideMenu";

import {data} from "./../../data/data";
import styles from "./AppPage.module.scss";

export const AppPage = () => {
    return (
        <div className={styles.appPageContainer}>
            <SideMenu />
            <MapPlot data={data} width={500} height={100} />
        </div>
    );
}