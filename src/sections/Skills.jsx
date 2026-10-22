import styled from "styled-components";
import { skills } from "../constants/constants.js";
import Tilt from "react-parallax-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  text-align: left;  
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
/*const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
    color: white;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;*/
/*const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;*/

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgb(0, 0, 7);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.20) 1px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;
const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;
const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <div>

        <div className="flex xl:justify-start max-xl:flex-col md:flex-row items-center c-space md:space-x-4 mb-10 space-y-2 md:space-y-0">
            <p className={"head-text"}>Skills </p>
            <span className={"text-3xl"}>🧨</span>
        </div>

        <Container id="Skills">
          <Wrapper>

            <SkillsContainer>
              {skills.map((skill, index) => (
                <Tilt key={`skill-${index}`} tiltMaxAngleX={25} tiltMaxAngleY={25}>
                  <Skill key={`skill-${index}`}>
                    <SkillTitle className={"text-gray_gradient"}>{skill.title}</SkillTitle>
                    <SkillList>
                      {skill.skills.map((item, index_x) => (
                        <SkillItem className={"text-gray_gradient"} key={`skill-x-${index_x}`}>
                          <SkillImage src={item.image} />
                          {item.name}
                        </SkillItem>
                      ))}
                    </SkillList>
                  </Skill>
                </Tilt>
              ))}
            </SkillsContainer>
          </Wrapper>
        </Container>
    </div>
  );
};

export default Skills;
