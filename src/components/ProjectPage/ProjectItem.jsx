import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { interactiveState } from '../../store/recoil';
import ItemBtn from '../button/ItemBtn';

function ProjectItem() {
  const setInteractive = useSetRecoilState(interactiveState);

  return (
    <ProjectItemContainer>
      <ItemBox>
        <ItemBtn type="Design" onClick={() => setInteractive(1)} />
        <ItemTitle>디자인</ItemTitle>
      </ItemBox>
      <ItemBox>
        <ItemBtn type="Element" onClick={() => setInteractive(2)} />
        <ItemTitle>요소</ItemTitle>
      </ItemBox>
      <ItemBox>
        <ItemBtn type="Text" onClick={() => setInteractive(3)} />
        <ItemTitle>텍스트</ItemTitle>
      </ItemBox>
    </ProjectItemContainer>
  );
}

export default ProjectItem;

const ProjectItemContainer = styled.div`
  width: 4.166vw;
  height: 93.98vh;
  background-color: #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const ItemBox = styled.div`
  height: 14.648vh;
  width: 100%;
  border-bottom: 1px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemTitle = styled.p`
  font-size: 1.1111vw;
  margin-top: 0.6944vw;
`;
