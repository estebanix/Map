import * as d3 from "d3";
import { FeatureCollection } from "geojson";

import styles from "./MapPlot.module.scss";

type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
};

export const MapPlot = ({ width, height, data }: MapProps) => {
  const projection = d3
    .geoMercator()
    .scale(width)
    .center([10, 35]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = data.features
    .filter((shape) => shape.id !== "ATA")
    .map((shape) => {
      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill="black"
          fillOpacity={0.7}
        />
      );
    });

  return (
    <div className={styles.mapPlotContainer}>
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
    </div>
  );
};
