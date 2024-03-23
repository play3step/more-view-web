import styled from 'styled-components';
import { ReactComponent as Comment } from '../../../assets/svgIcon/commentIcon.svg';
import { ReactComponent as Creation } from '../../../assets/svgIcon/creationIcon.svg';
import { ReactComponent as Image } from '../../../assets/svgIcon/imageIcon.svg';
import { ReactComponent as Note } from '../../../assets/svgIcon/noteIcon.svg';
import { ReactComponent as Play } from '../../../assets/svgIcon/playIcon.svg';
import { ReactComponent as Redo } from '../../../assets/svgIcon/redoIcon.svg';
import { ReactComponent as Shape } from '../../../assets/svgIcon/shapeIcon.svg';
import { ReactComponent as Search } from '../../../assets/svgIcon/search3DIcon.svg';
import { ReactComponent as Text } from '../../../assets/svgIcon/textIcon.svg';
import { ReactComponent as Undo } from '../../../assets/svgIcon/undoIcon.svg';

const ICONS = [
  { id: 'Comment', type: Comment, text: 'Comment' },
  { id: 'Creation', type: Creation, text: '3D Creation' },
  { id: 'Image', type: Image, text: 'Image' },
  { id: 'Note', type: Note, text: 'Note' },
  { id: 'Play', type: Play, text: 'Play' },
  { id: 'Redo', type: Redo, text: 'Redo' },
  { id: 'Shape', type: Shape, text: 'Shape' },
  { id: 'Search', type: Search, text: '3D Search' },
  { id: 'Text', type: Text, text: 'Text' },
  { id: 'Undo', type: Undo, text: 'Undo' },
];

function SvgIcon({ type, onClick }) {
  const Icon = ICONS.find((icon) => icon.id === type);

  if (!Icon) {
    return null;
  }
  const IconComponent = Icon.type;
  return (
    <IconBox onClick={onClick}>
      <IconComponent width="1.875vw" height="3.3333333333333335vh" />
      <IconText>{Icon.text}</IconText>
    </IconBox>
  );
}
export default SvgIcon;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconText = styled.p`
  font-size: 0.6vw;
`;
