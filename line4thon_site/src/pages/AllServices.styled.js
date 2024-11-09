import styled from "styled-components";

// Wrapper 스타일 정의
export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 200px);
  height: calc(100% - 120px);
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
    font-size: 24px;
    margin-right: 8px;
  }

  .smalltitle1 {
    color: #00a4e3;
    font-size: 40px;
    font-weight: bold;
  }

  .smalltitle2 {
    font-size: 60px;
    font-weight: bold;
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
  margin-left: 120px;

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

// CardGrid 스타일 정의
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  padding: 0 20px;
  justify-items: center;
`;

// ServiceCard 스타일 정의
export const ServiceCard = styled.div`
  width: 100%;
  max-width: 250px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// CardImage 스타일 정의
export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

// CardText 스타일 정의
export const CardText = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #333;

  .service-name {
    font-weight: bold;
  }

  span {
    display: block;
    color: #555;
  }
`;
