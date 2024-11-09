import React from 'react';
import * as Styled from './AllServices.styled';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const AllServices = () => {
    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Box>
                    <p>전체 서비스<br/>
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

export default AllServices;
