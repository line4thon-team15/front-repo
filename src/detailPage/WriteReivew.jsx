import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './WriteReview.styled';
import ThumbnailTotal from '../assets/ThumbnailTotal.svg';
import EASY from '../assets/easy.svg';
import SIMPLE from '../assets/simple.png';
import ERROR_FREE from '../assets/errorfree.svg';
import DESIGN from '../assets/design.svg';
import GROWTH from '../assets/growth.svg';
import FEEDBACK from '../assets/feedback.svg';
import BASIC from '../assets/basic.svg';
import REUSE from '../assets/reuse.jpg';
import LOADING from '../assets/loading.svg';
import ORIGINAL from '../assets/original.svg';
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
import { useAuth } from '../contexts/AuthContext';

const WriteReview = ({ API_BASE_URL }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const { service_id } = useParams(); // URL에서 service_id를 가져옵니다.
    console.log("useParams에서 받아온 service_id:", service_id); // service_id 값 확인

     // 로그인 여부 확인
     if (!isAuthenticated) {
        alert("로그인이 필요합니다.");
        navigate("/login");
        return null; // 로그인 상태가 아니면 컴포넌트를 렌더링하지 않음
    }

    // 로그인 상태라면 이하의 코드가 실행됩니다
    const [review, setReviewText] = useState('');
    const [score, setScore] = useState(0); // rating 대신 score로 상태 이름 변경
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedImages, setSelectedImages] = useState({
        EASY: false,
        SIMPLE: false,
        ERROR_FREE: false,
        DESIGN: false,
        GROWTH: false,
        FEEDBACK: false,
        BASIC: false,
        REUSE: false,
        LOADING: false,
        ORIGINAL: false
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
    
    const handleSubmit = async () => {
        console.log("handleSubmit 호출됨");
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) throw new Error('Access token not found');
    
            const url = `${ API_BASE_URL }/services/4line-services/${service_id}/`;
            
            console.log("Service ID:", service_id);
            console.log("Request URL:", url);
    
            const response = await axios.post(
                url,
                {
                    score: score,
                    tags: selectedTags, // 선택된 태그만 포함
                    review: review
                },
                {
                    headers: { Authorization: `Bearer ${accessToken}` }
                }
            );
    
            console.log("전송할 데이터:", {
                score: score,
                tags: selectedTags,
                review: review
            });
            
            console.log("리뷰 생성 성공:", response.data);
    
            // 생성 후 초기화 및 페이지 이동
            setReviewText("");
            setScore(0);
            setSelectedTags([]);
            navigate(`/Detail/${service_id}`);
    
        } catch (error) {
            console.error("오류 발생:", error.message || error);
            if (error.response && error.response.status === 404) {
                alert('리뷰 생성에 실패했습니다.');
            } else {
                alert('리뷰 생성 중 오류가 발생했습니다.');
            }
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
                        <HeartRating rating={score} setRating={setScore} /> {/* score와 setScore를 전달 */}
                        <Styled.Rating>
                            <Styled.RatingAsk>어떤 점이 좋았나요?</Styled.RatingAsk>
                            <Styled.RatingFive>5개까지 선택할 수 있어요</Styled.RatingFive>
                        </Styled.Rating>

                        <Styled.RatingBox>
                            <Styled.RatingBox1>
                                <Styled.RatingSelect>UI/편의성</Styled.RatingSelect>
                                <Styled.Easy
                                    src={selectedImages.EASY ? easyS : EASY}
                                    alt="easy"
                                    onClick={() => handleTagToggle('EASY')}
                                />
                                <Styled.Simple
                                    src={selectedImages.SIMPLE ? simpleS : SIMPLE}
                                    alt="simple"
                                    onClick={() => handleTagToggle('SIMPLE')}
                                />
                                <Styled.Errorfree
                                    src={selectedImages.ERROR_FREE ? errorfreeS : ERROR_FREE}
                                    alt="errorfree"
                                    onClick={() => handleTagToggle('ERROR_FREE')}
                                />
                                <Styled.Design
                                    src={selectedImages.DESIGN ? designS : DESIGN}
                                    alt="design"
                                    onClick={() => handleTagToggle('DESIGN')}
                                />
                                <Styled.Growth
                                    src={selectedImages.GROWTH ? growthS : GROWTH}
                                    alt="growth"
                                    onClick={() => handleTagToggle('GROWTH')}
                                />
                                <Styled.Feedback
                                    src={selectedImages.FEEDBACK ? feedbackS : FEEDBACK}
                                    alt="feedback"
                                    onClick={() => handleTagToggle('FEEDBACK')}
                                />
                                                                                                
                            </Styled.RatingBox1>
                            <Styled.RatingBox2>
                                <Styled.RatingSelect2>독창성/완성도</Styled.RatingSelect2>
                                <Styled.Basic
                                    src={selectedImages.BASIC ? basicS : BASIC}
                                    alt="basic"
                                    onClick={() => handleTagToggle('BASIC')}
                                />
                                <Styled.Reuse
                                    src={selectedImages.REUSE ? reuseS : REUSE}
                                    alt="reuse"
                                    onClick={() => handleTagToggle('REUSE')}
                                />
                                <Styled.Loading
                                    src={selectedImages.LOADING ? loadingS : LOADING}
                                    alt="loading"
                                    onClick={() => handleTagToggle('LOADING')}
                                />
                                <Styled.Original
                                    src={selectedImages.ORIGINAL ? originalS : ORIGINAL}
                                    alt="original"
                                    onClick={() => handleTagToggle('ORIGINAL')}
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
