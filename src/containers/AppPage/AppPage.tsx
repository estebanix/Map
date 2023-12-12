import { HeaderMenu } from "../../components/HeaderMenu";
import { MapPlot } from "../../components/MapPlot";

import {data} from "./../../data/data";
import styles from "./AppPage.module.scss";

export const AppPage = () => {
    return (
        <div className={styles.appPageContainer}>
            <HeaderMenu />
            <MapPlot data={data} width={1050} height={600} />
        </div>
    );
}