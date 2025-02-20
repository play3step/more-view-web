import styled from 'styled-components';
import FriendBox from './FriendItem';

function FriendRequestsContainer({ requests, accept, reject }) {
  return (
    <RequestContainer>
      <p>Friend Requests</p>
      {requests?.map((data, index) => (
        <FriendBox
          type="Request"
          data={data}
          key={index}
          accept={accept}
          reject={reject}
        />
      ))}
    </RequestContainer>
  );
}

export default FriendRequestsContainer;

const RequestContainer = styled.div`
  width: 100%;
  height: 23.7vh;
  display: flex;
  flex-direction: column;
  gap: 2.22vh;
`;
