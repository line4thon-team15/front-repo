import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './WriteReview.styled';
import ThumbnailTotal from '../assets/ThumbnailTotal.svg';
import find from '../assets/find.svg';
import simple from '../assets/simple.svg';
import easy from '../assets/easy.svg';
import design from '../assets/design.svg';
import ui from '../assets/ui.svg';
import feedback from '../assets/feedback.svg';
import idea from '../assets/idea.svg';
import reuse from '../assets/reuse.svg';
import loading from '../assets/loading.svg';
import want from '../assets/want.svg';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import HeartRating from './HeartRating';

const WriteReview = () => {
    const navigate = useNavigate();
    const [reviewText, setReviewText] = useState('');
    const maxChars = 400;

    const handleGoBack = () => {
        navigate('/my-service-info');
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        if (text.length <= maxChars) {
            setReviewText(text);
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
                        <HeartRating />
                        <Styled.Rating>
                            <Styled.RatingAsk>어떤 점이 좋았나요?</Styled.RatingAsk>
                            <Styled.RatingFive>5개까지 선택할 수 있어요</Styled.RatingFive>
                        </Styled.Rating>

                        <Styled.RatingBox>
                            <Styled.RatingBox1>
                                <Styled.RatingSelect>UI/편의성</Styled.RatingSelect>
                                <Styled.Find src={find} alt="find" />
                                <Styled.Simple src={simple} alt="simple" />
                                <Styled.Easy src={easy} alt="easy" />
                                <Styled.Design src={design} alt="design" />
                                <Styled.Ui src={ui} alt="ui" />
                                <Styled.Feedback src={feedback} alt="feedback" />


                            </Styled.RatingBox1>
                            <Styled.RatingBox2>
                                <Styled.RatingSelect2>독창성/완성도</Styled.RatingSelect2>
                                <Styled.Idea src={idea} alt="idea" />
                                <Styled.Reuse src={reuse} alt="reuse" />
                                <Styled.Loading src={loading} alt="loading" />
                                <Styled.Want src={want} alt="want" />
                            </Styled.RatingBox2>


                        </Styled.RatingBox>
                        



                        <Styled.WriteReviewAsk>리뷰를 작성해주세요</Styled.WriteReviewAsk>
                        <Styled.InputContainer>
                            <Styled.WriteReviewInput
                                as="textarea"
                                placeholder={`
여러분의 소중한 피드백은 아기사자들에게 ‘큰’ 도움이 됩니다! 
좋은 점, 개선 할 점, 사용후기를 알려주세요.

*욕설, 비방성 표현은 누군가에게 상처가 될 수 있습니다`}
                                value={reviewText}
                                onChange={handleTextChange}
                            />
                            <Styled.CharCount>
                                <Styled.ColoredLength>{reviewText.length}</Styled.ColoredLength> / {maxChars}
                            </Styled.CharCount>
                        </Styled.InputContainer>

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

export default WriteReview;
