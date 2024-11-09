import { useState, useEffect, useRef } from 'react';
import * as M from "@/components/Intro/MetroStye"
import { useNavigate } from 'react-router-dom';

const MetroMap = ({ mainScroll }) => {




    return (
        <M.MetroMap>
            <div>
                왼쪽박스
            </div>
            <M.RightBox>
                {/* <M.MetroLine>
                    <div id='line'></div>
                    {teamNumber.map((team, index) => (
                        <M.StationBtn
                            key={index}
                            ref={(el) => (buttonRefs.current[index] = el)}
                            isActive={index === activeIndex}
                            onClick={() => handleClick(index)}
                        >
                            {teamNumber[index]}
                        </M.StationBtn>
                    ))}
                </M.MetroLine> */}
            </M.RightBox>
        </M.MetroMap >
    );
}

export default MetroMap;