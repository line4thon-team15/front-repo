import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
`;

export const Content = styled.div`
    background-color: white;
    position: relative;  /* absolute에서 relative로 변경 */
    margin-left: 200px;  
    width: cal(100%-200px);
    flex-grow: 1; /* 콘텐츠가 남은 공간을 채우도록 설정 */
`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 615px;
    background-color: #BABABA;
    align-items: center; /* Header의 가로 가운데 정렬 */
    justify-content: center; /* Header의 세로 가운데 정렬 */
`;

export const ThumbnailBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ThumbnailImage = styled.img`
    width: 700px;
    height: auto; /* 이미지의 비율을 유지 */
`;

export const ChangeThumbnail = styled.img`
    width: 160px;
    margin-left: 70%;
    margin-top: 20px;
`;

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EDEDED;
    width: 100%;
    height: 100%;
    padding: 40px 0; /* Adds spacing above and below InfoBox */
`;

export const InfoBox = styled.div`
    padding: 20px;
    background-color: #FFFFFF;
    width: 95%;
    max-width: 80%; /* Optional: set a max width for better responsiveness */
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add a shadow for better visual separation */
    margin: 20px 0; /* Adds additional margin to ensure spacing */
`;

export const InfoTitle = styled.div`
    padding: 50px 50px 30px 50px;
    text-align: center;
    font-size: 35px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const ServiceName = styled.div`
    padding: 30px 0px 10px 50px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const ServiceNameInput = styled.input`
    width: 85%;
    padding: 10px 10px 10px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    margin: 5px 0 15px 50px;

`

export const ServiceSimple = styled.div`
    padding: 30px 0px 10px 50px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`


export const ServiceSimpleInput = styled.input`
    width: 85%;;
    padding: 10px 10px 10px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    margin: 5px 0 15px 50px;
`


export const ServiceURL = styled.div`
    padding: 30px 0px 10px 50px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const ServiceURLInput = styled.input`
    width: 85%;;
    padding: 10px 10px 10px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    margin: 5px 0 15px 50px;
`

export const PartInput = styled.div`
    padding: 30px 0px 10px 50px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`;

export const PartInfo = styled.div`
    padding: 10px 0px 10px 0px;
`;

export const PartLabel = styled.div`
    font-weight: bold;
    text-decoration: underline;
    padding-bottom: 10px;
    font-size: 18px;
`;

export const HeaderRow = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
`;

export const HeaderLabel = styled.div`
    font-weight: bold;
    text-decoration: underline;
    font-size: 16px;
    width: 130px; /* Adjust this width for consistent alignment */
    text-align: center;
`;

export const MemberRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const MemberName = styled.div`
    width: 135px; /* Same width as HeaderLabel for alignment */
    font-size: 16px;
    text-align: center;
    margin-right: 30px; /* Adjust this value to change the gap between Name and checkboxes */
`;


export const CheckboxContainer = styled.div`
    display: flex;
    gap: 70px; /* Adjust spacing between columns for checkboxes */
    margin-left: 0px; /* Adjust this value to change the gap between Name and checkboxes */
`;

export const CheckboxWrapper = styled.div`
    width: 60px; /* Same width as HeaderLabel for alignment */
    text-align: center;
`;


export const ServiceDetail = styled.div`
    padding: 30px 0px 10px 50px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const ServiceDetailInput = styled.input`
    width: 88%;
    height: 350px;
    padding: 10px 10px 10px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    margin: 5px 0 15px 50px;
`

export const ServicePPTContainer = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    padding: 10px 0px 0 50px;
    margin: 0;
`;


export const ServicePPT = styled.div`
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const PPTCount = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

export const UploadedCount = styled.span`
    color: #45DB00; /* uploadedImages.length의 글자색을 #45DB00으로 설정 */
`;

export const MaxCount = styled.span`
    color: black; /* maxImages의 글자색을 검은색으로 설정 */
`;


export const ImageUploadButton = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;



export const ImageUpload = styled.img`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 150px;

    justify-content: center;
    cursor: pointer;
    color: white;
`;

export const ImageGallery = styled.div`

    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    padding: 20px 50px; /* Optional padding */
    gap: 15px; /* Spacing between images */
`;

export const ServicePhotoFile = styled.img`
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 94%;
`

export const GoBack = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 50px 20px 10px 50px;
    font-size: 25px;
`

export const SignUp = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    background-color: #0033FF;
    justify-content: center;
    cursor: pointer;
    color: white;
    margin-top: 30px;
    margin-left: auto;
`
