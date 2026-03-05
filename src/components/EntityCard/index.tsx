"use client";

import Image from "next/image";
import { ReactNode } from "react";

import { Wrapper, ImgWrapper, ContentWrapper } from "./styles";

type EntityCardProps = {
  title: string,
  children: ReactNode,
  image?: string,
};

const EntityCard = ({
  title,
  image,
  children,
}: EntityCardProps) => {
  const hasImage = !!image;

  return (
    <Wrapper>
      {hasImage && (
        <ImgWrapper>
          <Image src={image} alt={title} fill sizes="250px" loading="eager" />
        </ImgWrapper>
      )}
      <ContentWrapper>
        <h2>{title}</h2>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export default EntityCard;
