import * as M from "@/components/Intro/MetroStye"
import { useNavigate } from 'react-router-dom';

const MetroMap = () => {
    const teamNumber = [];
    const teamPath = [];

    const navigate = useNavigate();

    const handleClick = (teamPath) => {
        // teamPath에 따라 이동하고자 하는 페이지로 네비게이션
        navigate(`/team/${teamPath}`);
    }

    for (let i = 1; i <= 20; i++) {
        teamNumber.push(i);
        teamPath.push(`a${i}`);
    }

    return (
        <M.MetroMap>
            <div>
                asdfsdfsdfwsefa
            </div>
            <M.RightBox>
                <M.MetroLine>
                    {teamNumber.map((team, index) => (
                        <M.StationBtn onClick={() => handleClick(teamPath[index])}>
                            {teamNumber[index]}
                        </M.StationBtn>
                    ))}
                </M.MetroLine>
            </M.RightBox>
        </M.MetroMap >
    );
}

export default MetroMap;