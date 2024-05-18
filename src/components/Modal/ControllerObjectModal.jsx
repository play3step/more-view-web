import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import CancelBtn from './atom/CancelBtn';
import { ControllerModalState } from '../../store/modalState';

function ControllerObjectModal() {
  const [modalValue, setModalValue] = useRecoilState(ControllerModalState);
  if (!modalValue) {
    return null;
  }

  const CancelHandler = () => {
    setModalValue(false);
  };

  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default ControllerObjectModal;
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48.125vw;
  height: 57.96296296296296vh;
  background-color: #ffffff;
  border-radius: 12px;
`;

const CancelPostion = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
`;
