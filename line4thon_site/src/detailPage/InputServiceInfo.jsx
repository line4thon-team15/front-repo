import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './InputServiceInfo.styled';
import ThumbnailTotal from '../assets/ThumbnailTotal.svg';
import servicePhotoFile from '../assets/servicePhotoFile.svg';
import upload from '../assets/upload.svg';
import changeThumbnail from '../assets/changeThumbnail.svg';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const InputServiceInfo = () => {
    const navigate = useNavigate();
    const [uploadedImages, setUploadedImages] = useState([]); // Update to store multiple images
    const [thumbnailImage, setThumbnailImage] = useState(ThumbnailTotal);
    const maxImages = 10; // 최대 업로드 개수 설정

    const handleGoBack = () => {
        navigate('/my-service');
    };

    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files) {
            const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
            setUploadedImages(prevImages => [...prevImages, ...imageUrls].slice(0, maxImages)); // 최대 10개까지 제한
        }
    };

    const handleThumbnailUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setThumbnailImage(URL.createObjectURL(file));
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
                        <Styled.ThumbnailImage src={thumbnailImage} alt="service thumbnail" />
                    </Styled.ThumbnailBox>
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
                </Styled.Header>

                <Styled.Background>
                    <Styled.InfoBox>
                        <Styled.InfoTitle>N팀 서비스 정보 입력</Styled.InfoTitle>
                        <Styled.ServiceName>내 서비스 이름은 무엇인가요?</Styled.ServiceName>
                        <Styled.ServiceNameInput
                            type="text"
                            placeholder="서비스 이름을 알려주세요"
                        />
                        <Styled.ServiceSimple>서비스를 한 문장으로 설명한다면?</Styled.ServiceSimple>
                        <Styled.ServiceSimpleInput
                            type="text"
                            placeholder="한 줄 소개를 적어주세요"
                        />
                        <Styled.ServiceURL>서비스 URL이 있다면 입력해주세요!</Styled.ServiceURL>
                        <Styled.ServiceURLInput
                            type="text"
                            placeholder="배포된 서비스가 없다면 공란으로 유지해주세요"
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
                            placeholder="기능에 대한 설명을 입력하세요"
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
                            <Styled.GoBack onClick={handleGoBack}>&lt; 이전</Styled.GoBack>
                            <Styled.SignUp>등록하기</Styled.SignUp>
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
