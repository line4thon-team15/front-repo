import React from 'react';
import * as Styled from './MyPage.styled';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const MyPage = () => {
    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Box>
                    <p>마이페이지<br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    </p>
                </Styled.Box>

            </Styled.Content>
            <Footer/>
        </Styled.Wrapper>
    );
};

export default MyPage;
