import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios를 통해 POST 요청 전송
import { useNavigate, useParams } from 'react-router-dom';
import * as Styled from './InputServiceInfo.styled';
import ThumbnailTotal from '../assets/ThumbnailTotal.svg';
import servicePhotoFile from '../assets/servicePhotoFile.svg';
import upload from '../assets/upload.svg';
import changeThumbnail from '../assets/changeThumbnail.svg';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { useAuth } from "../contexts/AuthContext";


const InputServiceInfo = ({ API_BASE_URL }) => {
    const navigate = useNavigate();
    const [serviceName, setServiceName] = useState(''); // 서비스 이름
    const [thumbnailImage, setThumbnailImage] = useState(ThumbnailTotal); // 썸네일 이미지
    const [intro, setIntro] = useState(''); // 한 줄 소개
    const [content, setContent] = useState(''); // 기능 설명
    const [siteUrl, setSiteUrl] = useState(''); // 서비스 URL
    const [teamNum, setTeamNum] = useState(''); // 팀 번호
    const [teamName, setTeamName] = useState(''); // 팀 이름
    const [uploadedImages, setUploadedImages] = useState([]); // 발표자료 이미지 배열
    const maxImages = 10;
    const [serviceData, setServiceData] = useState(null);
    const { isAuthenticated, accessToken } = useAuth();
    const { service_id } = useParams();

    //정보가져오기
    useEffect(() => {
        const token = localStorage.getItem("accessToken"); // 토큰 확인
        console.log(token);
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/services/4line-services/${service_id}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`, // 인증 토큰 추가
                        },
                    });
                // 서비스 데이터 및 좋아요 상태 설정
                const serviceData = response.data;
                setServiceData(serviceData);
                console.log("받아온 서비스 데이터:", serviceData);

            } catch (error) {
                console.error("데이터 불러오기 실패:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [API_BASE_URL, service_id, accessToken]);


    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files) {
            const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
            setUploadedImages(prevImages => [...prevImages, ...imageUrls].slice(0, maxImages));
        }
    };

    const handleThumbnailUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setThumbnailImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async ({ API_BASE_URL }) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) throw new Error('Access token not found');

            const url = `${API_BASE_URL}/services/4line-services`;
            const postData = {
                service_name: serviceName,
                thumbnail_image: thumbnailImage, // 썸네일 이미지
                intro: intro, // 한 줄 소개
                content: content, // 기능 설명
                site_url: siteUrl, // 서비스 URL
                team_num: parseInt(teamNum, 10), // 팀 번호
                team_name: teamName, // 팀 이름
                presentation: uploadedImages // 발표자료 이미지
            };

            const response = await axios.post(url, postData, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            console.log("등록된 서비스 데이터:", postData);
            console.log("서버 응답:", response.data);

            // 성공 후 초기화 및 페이지 이동
            setServiceName('');
            setIntro('');
            setContent('');
            setSiteUrl('');
            setTeamNum('');
            setTeamName('');
            setUploadedImages([]);
            setThumbnailImage(ThumbnailTotal);
            navigate('/my-service');

        } catch (error) {
            console.error('서비스 등록 오류:', error.message || error);
            alert('서비스 등록에 실패했습니다.');
        }
    };







    const teamMembers = [
        { id: '1', name: '신채린' },
        { id: '2', name: '이주원' },
        { id: '3', name: '전효준' },
        { id: '4', name: '홍상희' },
        { id: '5', name: '조희원' },
        { id: '6', name: '황채현' },
    ];

    const categories = ['PD', 'FE', 'BE'];

    // 팀원의 선택된 카테고리를 저장하는 상태
    const [selectedCategories, setSelectedCategories] = useState(
        teamMembers.reduce((acc, member) => ({ ...acc, [member.id]: null }), {})
    );

    const handleCategoryChange = (memberId, category) => {
        setSelectedCategories(prevState => ({
            ...prevState,
            [memberId]: prevState[memberId] === category ? null : category
        }));
    };

    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Header>
                    <Styled.ThumbnailBox>
                        <Styled.ChangeThumbnail
                            src={changeThumbnail}
                            alt="changeThumbnail"
                            onClick={() => document.getElementById('thumbnailInput').click()}
                        />
                        <input
                            id="thumbnailInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleThumbnailUpload}
                        />


                        {serviceData.thumbnail_image ? (
                            <Styled.ThumbnailImage src={serviceData.thumbnail_image} alt="서비스 썸네일" />
                        ) : (
                            <Styled.ThumbnailImage src={ThumbnailTotal} alt="기본 썸네일" />
                        )}

                        {/* <Styled.ThumbnailImage src={thumbnailImage} alt="service thumbnail" /> */}
                    </Styled.ThumbnailBox>
                    <Styled.ChangeBox>




                    </Styled.ChangeBox>

                </Styled.Header>

                <Styled.Background>
                    <Styled.InfoBox>
                        <Styled.InfoTitle>N팀 서비스 정보 입력</Styled.InfoTitle>
                        <Styled.ServiceName>내 서비스 이름은 무엇인가요?</Styled.ServiceName>
                        <Styled.ServiceNameInput
                            type="text"
                            placeholder="서비스 이름을 알려주세요"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                        />
                        <Styled.ServiceSimple>서비스를 한 문장으로 설명한다면?</Styled.ServiceSimple>
                        <Styled.ServiceSimpleInput
                            type="text"
                            placeholder="한 줄 소개를 적어주세요"
                            value={intro}
                            onChange={(e) => setIntro(e.target.value)}
                        />
                        <Styled.ServiceURL>서비스 URL이 있다면 입력해주세요!</Styled.ServiceURL>
                        <Styled.ServiceURLInput
                            type="text"
                            placeholder="배포된 서비스가 없다면 공란으로 유지해주세요"
                            value={siteUrl}
                            onChange={(e) => setSiteUrl(e.target.value)}
                        />

                        <Styled.PartInput>파트 정보를 입력해주세요.</Styled.PartInput>
                        <Styled.PartInfo>
                            {/* Header Row with Underlines */}
                            <Styled.HeaderRow>
                                <Styled.HeaderLabel>이름</Styled.HeaderLabel>
                                {categories.map((category) => (
                                    <Styled.HeaderLabel key={category}>{category}</Styled.HeaderLabel>
                                ))}
                            </Styled.HeaderRow>

                            {/* Team Member Rows */}
                            {teamMembers.map((member) => (
                                <Styled.MemberRow key={member.id}>
                                    <Styled.MemberName>{member.name}</Styled.MemberName>
                                    <CheckboxGroup
                                        categories={categories}
                                        selectedCategory={selectedCategories[member.id]}
                                        onCategoryChange={(category) => handleCategoryChange(member.id, category)}
                                    />
                                </Styled.MemberRow>
                            ))}
                        </Styled.PartInfo>

                        <Styled.ServiceDetail>어떤 기능이 있는지 자세히 알려주세요!</Styled.ServiceDetail>
                        <Styled.ServiceDetailInput
                            as="textarea"
                            placeholder=" "
                            defaultValue='[기능 소개 작성 가이드라인]
✨‘4호선톤’을 위한 우리들만의 축제 사이트✨   

[문제제기]❔
 - [일상 속 문제 상황]
 - [일상 속 의문점]
 - [서비스를 만들게 된 계기]
이런 상황을 해결할 수는 없을까…?

😵 기존 문제 상황1, ➡ 서비스가 제공하는 해결책1
🤔 기존 문제 상황2, ➡ 서비스가 제공하는 해결책2  

이제는 [서비스명]에서 간편하게 [문제 상황 해결]을 해보세요!🙌 

 🌀 [서비스명]의 핵심 기능 소개🥳♫

➊주요 기능1 여기에 기능을 설명해주세요
➋주요 기능2 여기에 기능을 설명해주세요'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Styled.ServicePPTContainer>
                            <Styled.ServicePPT>마지막으로 발표자료를 업로드 해보세요!</Styled.ServicePPT>
                            <Styled.PPTCount>
                                <Styled.UploadedCount>{uploadedImages.length}</Styled.UploadedCount>/
                                <Styled.MaxCount>{maxImages}</Styled.MaxCount>
                            </Styled.PPTCount>
                            <Styled.ImageUploadButton onClick={() => document.getElementById('fileInput').click()}>
                                <Styled.ImageUpload src={upload} alt="upload" />
                            </Styled.ImageUploadButton>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageUpload}
                                multiple // Enable multiple file selection
                            />
                        </Styled.ServicePPTContainer>

                        <Styled.ImageGallery>
                            {uploadedImages.length > 0 ? (
                                uploadedImages.map((image, index) => (
                                    <Styled.ServicePhotoFile key={index} src={image} alt={`uploaded service file ${index + 1}`} />
                                ))
                            ) : (
                                <Styled.ServicePhotoFile src={servicePhotoFile} alt="default service file" />
                            )}
                        </Styled.ImageGallery>
                        <Styled.Bottom>
                            <Styled.GoBack >&lt; 이전</Styled.GoBack>
                            <Styled.SignUp onClick={handleSubmit}>등록하기</Styled.SignUp>
                        </Styled.Bottom>
                    </Styled.InfoBox>
                </Styled.Background>
            </Styled.Content>
            <Footer />
        </Styled.Wrapper>
    );
};

const CheckboxGroup = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <Styled.CheckboxContainer>
            {categories.map((category) => (
                <Styled.CheckboxWrapper key={category}>
                    <input
                        type="checkbox"
                        checked={selectedCategory === category}
                        onChange={() => onCategoryChange(category)}
                    />
                </Styled.CheckboxWrapper>
            ))}
        </Styled.CheckboxContainer>
    );
};

export default InputServiceInfo;
