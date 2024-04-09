import styled from 'styled-components';
import ControlBox from './atom/ControlBox';

function ObjectTool() {
  return (
    <ObjectToolBox>
      <ToolText>Object Size</ToolText>
      <ControlBox />
      <ToolText>Light intensity</ToolText>

      <ControlBox />
    </ObjectToolBox>
  );
}

export default ObjectTool;

const ObjectToolBox = styled.div`
  width: 16.666666666666664vw;
  height: 19.25925925925926vh;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ToolText = styled.p`
  font-size: 0.82vw;
  margin-bottom: 1.6vh;
  margin-top: 0.6vw;
`;
