import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;            /* fixed에서 relative로 변경 */
  width: calc(100vw - 4vw);
  height: 120px;
  flex-direction: column;         /* 세로 방향으로 나열 */
  align-items: flex-start;
  padding: 2vh 2vw;               /* 상하좌우 여백 */
  background-color: black;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;         /* 세로 정렬 */
  align-items: flex-start;        /* 왼쪽 정렬 */
  color: white;
  margin-bottom: auto;
  margin-left: 5%;
`;

export const ListItem = styled.li`
  font-size: 1.3vh;
  color: white;
  line-height: 1.5;
  padding: 0 0 0 125px;
`;

export const Paragraph = styled.p`
  font-size: 1.3vh;
  color: white;
  width: 90%;                    /* 전체 너비 */
  text-align: right;              /* 오른쪽 정렬 */
  margin-top: auto;               /* 위쪽 여백 */
  z-index: 2;
  background-color: black;
`;
