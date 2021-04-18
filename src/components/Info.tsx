import * as React from "react";
import { OpenApiInfo } from "../type/open_api";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

type Props = {
  info: OpenApiInfo;
};

const Title = styled.h2``;

const Info: React.VFC<Props> = (props: Props) => {
  console.log(props.info.description);
  return (
    <div>
      <Title>{`${props.info.title} (${props.info.version})`}</Title>
      <div>
        {props.info.description ? (
          <ReactMarkdown>{props.info.description}</ReactMarkdown>
        ) : (
          <React.Fragment />
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Info;
