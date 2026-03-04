"use client";

import { DataTextWrapper, DataTextTitle } from "./styles";

type DataTextProps = {
  title: string,
  data: string,
};
const DataText = ({ title, data }: DataTextProps) => (
  <DataTextWrapper>
    <DataTextTitle>{`${title}:`}</DataTextTitle>
    <p>{data}</p>
  </DataTextWrapper>
);

export default DataText;
