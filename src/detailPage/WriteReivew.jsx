import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './WriteReview.styled';
import ThumbnailTotal from '../assets/ThumbnailTotal.svg';
import easy from '../assets/easy.svg';
import simple from '../assets/simple.png';
import errorfree from '../assets/errorfree.svg';
import design from '../assets/design.svg';
import growth from '../assets/growth.svg';
import feedback from '../assets/feedback.svg';
import basic from '../assets/basic.svg';
import reuse from '../assets/reuse.png';
import loading from '../assets/loading.svg';
import original from '../assets/original.svg';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import HeartRating from './HeartRating';
import easyS from '../assets/easyS.svg';
import simpleS from '../assets/simpleS.png';
import errorfreeS from '../assets/errorfreeS.svg';
import designS from '../assets/designS.svg';
import growthS from '../assets/growthS.svg';
import feedbackS from '../assets/feedbackS.svg';
import basicS from '../assets/basicS.svg';
import reuseS from '../assets/reuseS.png';
import loadingS from '../assets/loadingS.svg';
import originalS from '../assets/originalS.svg';

const WriteReview = ({ API_BASE_URL }) => {
    const navigate = useNavigate();
    const { service_id } = useParams();
    console.log("service_id:", service_id);

    const [review, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedImages, setSelectedImages] = useState({
        easy: false,
        simple: false,
        errorfree: false,
        design: false,
        growth: false,
        feedback: false,
        basic: false,
        reuse: false,
        loading: false,
        original: false
    });
    
    const maxChars = 400;

    const handleGoBack = () => {
        navigate(`/Detail/${service_id}`);
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        if (text.length <= maxChars) {
            setReviewText(text);
        }
    };

    const handleTagToggle = (tag) => {
        if (!selectedTags.includes(tag) && selectedTags.length >= 5) {
            alert("최대 5개의 태그만 선택할 수 있습니다.");
            return;
        }
    
        setSelectedTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    
        setSelectedImages((prevState) => ({
            ...prevState,
            [tag]: !prevState[tag]
        }));
    };
    
    console.log("API URL:", `${API_BASE_URL}/services/4line-services/${service_id}`);

    const handleSubmit = async () => {
        if (!review || rating === 0) {
            alert("리뷰와 평점을 입력해주세요.");
            return;
        }

        if (!API_BASE_URL || !service_id) {
            console.error("API_BASE_URL 또는 service_id가 정의되지 않았습니다");
            alert("URL에 문제가 있습니다. 다시 시도해 주세요.");
            return;
        }
        
        try {
            const response = await axios.patch(`${API_BASE_URL}/services/4line-services/${service_id}`, {
                score: rating,
                tags: selectedTags,
                review: review
            });
            console.log("리뷰 등록 성공:", response.data);
            navigate(`/Detail/${service_id}`);
        } catch (error) {
            console.error("리뷰 등록 실패:", error);
            alert("리뷰 등록 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Header>
                    <Styled.ThumbnailBox>
                        <Styled.ThumbnailImage src={ThumbnailTotal} alt="service thumbnail" />
                    </Styled.ThumbnailBox>
                </Styled.Header>

                <Styled.Background>
                    <Styled.InfoBox>
                        <Styled.InfoTitle>서비스 이름의 사용 경험을 들려주세요!</Styled.InfoTitle>
                        <HeartRating rating={rating} setRating={setRating} />
                        <Styled.Rating>
                            <Styled.RatingAsk>어떤 점이 좋았나요?</Styled.RatingAsk>
                            <Styled.RatingFive>5개까지 선택할 수 있어요</Styled.RatingFive>
                        </Styled.Rating>

                        <Styled.RatingBox>
                            <Styled.RatingBox1>
                                <Styled.RatingSelect>UI/편의성</Styled.RatingSelect>
                                <Styled.Easy
                                    src={selectedImages.easy ? easyS : easy}
                                    alt="easy"
                                    onClick={() => handleTagToggle('easy')}
                                />
                                <Styled.Simple
                                    src={selectedImages.simple ? simpleS : simple}
                                    alt="simple"
                                    onClick={() => handleTagToggle('simple')}
                                />
                                <Styled.Errorfree
                                    src={selectedImages.errorfree ? errorfreeS : errorfree}
                                    alt="errorfree"
                                    onClick={() => handleTagToggle('errorfree')}
                                />
                                <Styled.Design
                                    src={selectedImages.design ? designS : design}
                                    alt="design"
                                    onClick={() => handleTagToggle('design')}
                                />
                                <Styled.Growth
                                    src={selectedImages.growth ? growthS : growth}
                                    alt="growth"
                                    onClick={() => handleTagToggle('growth')}
                                />
                                <Styled.Feedback
                                    src={selectedImages.feedback ? feedbackS : feedback}
                                    alt="feedback"
                                    onClick={() => handleTagToggle('feedback')}
                                />
                                                                                                
                            </Styled.RatingBox1>
                            <Styled.RatingBox2>
                                <Styled.RatingSelect2>독창성/완성도</Styled.RatingSelect2>
                                <Styled.Basic
                                    src={selectedImages.basic ? basicS : basic}
                                    alt="basic"
                                    onClick={() => handleTagToggle('basic')}
                                />
                                <Styled.Reuse
                                    src={selectedImages.reuse ? reuseS : reuse}
                                    alt="reuse"
                                    onClick={() => handleTagToggle('reuse')}
                                />
                                <Styled.Loading
                                    src={selectedImages.loading ? loadingS : loading}
                                    alt="loading"
                                    onClick={() => handleTagToggle('loading')}
                                />
                                <Styled.Original
                                    src={selectedImages.original ? originalS : original}
                                    alt="original"
                                    onClick={() => handleTagToggle('original')}
                                />


                            </Styled.RatingBox2>
                        </Styled.RatingBox>

                        <Styled.WriteReviewAsk>리뷰를 작성해주세요</Styled.WriteReviewAsk>
                        <Styled.InputContainer>
                            <Styled.WriteReviewInput
                                as="textarea"
                                placeholder={`여러분의 소중한 피드백은 아기사자들에게 ‘큰’ 도움이 됩니다! 
좋은 점, 개선 할 점, 사용후기를 알려주세요.

*욕설, 비방성 표현은 누군가에게 상처가 될 수 있습니다`}
                                value={review}
                                onChange={handleTextChange}
                            />
                            <Styled.CharCount>
                                <Styled.ColoredLength>{review.length}</Styled.ColoredLength> / {maxChars}
                            </Styled.CharCount>
                        </Styled.InputContainer>

                        <Styled.Bottom>
                            <Styled.GoBack onClick={handleGoBack}>&lt; 이전</Styled.GoBack>
                            <Styled.SignUp onClick={handleSubmit}>등록하기</Styled.SignUp>
                        </Styled.Bottom>
                    </Styled.InfoBox>
                </Styled.Background>
            </Styled.Content>
            <Footer />
        </Styled.Wrapper>
    );
};

export default WriteReview;
