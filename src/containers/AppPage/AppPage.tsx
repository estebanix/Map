import { Density } from "../../components/BoxPlot/BoxPlot";
import { SideMenu } from "../../components/SideMenu/SideMenu";

import {data} from "./../../data/data";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
  return (
    <div className={styles.appPageContainer}>
      <SideMenu />
      <Density width={800} height={500} data={data} />
    </div>
  );
};
