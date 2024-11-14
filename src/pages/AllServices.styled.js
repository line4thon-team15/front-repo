import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 60px 0 60px 200px;
  align-items: center;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 200px);
  background-color: #e9ecef;
`;

// TitleTop 컴포넌트 정의
export const TitleTop = styled.div`
  display: flex;
  flex-direction: row;
`;

// MenuBar 스타일 정의
export const MenuBar = styled.div`
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  background-color: white;
  text-align: center;
  font-weight: bold;
`;

// Title 스타일 정의
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  font-family: Arial, sans-serif;

  .singlequo {
    font-size: 50px;
    font-weight: 700;
  }

  .smalltitle1 {
    color: #00a4e3;
    font-size: 50px;
    font-weight: 700;
  }

  .smalltitle2 {
    font-size: 100px;
    font-weight: 700;
    color: black;
    margin: 4px 0;
  }

  .subtitle {
    font-size: 14px;
    color: #888;
    margin-top: 4px;
  }
`;

// SearchBar 스타일 정의
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #e1e1e1;
  padding: 10px 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;

  .search-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
    color: #555;
  }
`;

// ServiceCardAll 스타일 정의
export const ServiceCardAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// CardGrid 스타일 정의
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: calc(100%);
  max-width: 1200px;
  margin-top: 40px;
  justify-items: center;
`;

// ServiceCard 스타일 정의
export const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
  text-align: center;
`;

// CardImage 스타일 정의
export const CardImage = styled.img`
  display: flex;
  align-items: center;
  height: 100%;
  object-fit: cover;
`;

// CardText 스타일 정의
export const CardText = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 0 10px 15px;
  font-size: 14px;
  color: #333;
  gap: 5px;

  .service-name {
    font-weight: bold;
  }

  span {
    display: block;
    color: #555;
  }
`;

export const Box = styled.div``;
