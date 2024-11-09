import React from 'react';
import * as Styled from './Login.styled';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Login = () => {
    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Box>
                    <p>로그인<br/>
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

export default Login;
