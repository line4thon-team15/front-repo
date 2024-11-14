import React, { useState } from 'react';
import * as Styled from './HeartRating.styled';

const HeartRating = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0); // 마우스 위치에 따른 별점 값

    const handleMouseMove = (index, event) => {
        const { left, width } = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - left;
        const isHalf = mouseX < width / 2;
        setHoverRating(index - 0.5 + (isHalf ? 0 : 0.5)); // 소수점 포함한 값 설정
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = () => {
        setRating(hoverRating); // 클릭 시 hoverRating 값(소수 포함)을 rating에 설정
    };

    return (
        <Styled.HeartContainer onMouseLeave={handleMouseLeave}>
            {[1, 2, 3, 4, 5].map((index) => (
                <Styled.Heart
                    key={index}
                    filled={
                        hoverRating >= index || (!hoverRating && rating >= index)
                            ? "true"
                            : undefined
                    }
                    halfFilled={
                        hoverRating === index - 0.5 || (!hoverRating && rating === index - 0.5)
                            ? "true"
                            : undefined
                    }
                    onMouseMove={(event) => handleMouseMove(index, event)}
                    onClick={handleClick} // hoverRating 값을 rating으로 설정
                />
            ))}
            <Styled.Score>{rating.toFixed(1)}</Styled.Score> {/* rating을 소수점 1자리까지 표시 */}
        </Styled.HeartContainer>
    );
};

export default HeartRating;
