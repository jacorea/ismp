import React from 'react';
import Styled from 'styled-components';
import theme from '../../styles/theme';
import { Card, Image } from 'semantic-ui-react';

const StyledImage = Styled(Image)`
    height: 248px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 8px 8px 0px 0px;
`;

const StyledSecH3 = Styled.h3`
    font-family: ${theme.fonts.PTSerif};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: ${theme.colors.black};
`;

const StyledBodyText = Styled.p`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    background-color: #FBFBFB;
    border-radius: 8px;
`;

const StyledCard = Styled(Card)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const BlogCard = ({ blogImgurl, blogTitle, blogDescription }) => {
  return (
    <StyledCard>
      <StyledImage src={blogImgurl} alt="blog category image" />
      <Card.Content>
        <StyledSecH3>{blogTitle}</StyledSecH3>
        <StyledBodyText>{blogDescription}</StyledBodyText>
      </Card.Content>
    </StyledCard>
  );
};

export default BlogCard;
