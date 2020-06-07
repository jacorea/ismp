import React from 'react';
import { Container, Grid, Segment, Embed, List } from 'semantic-ui-react';
import Section from '../../layout/Section';
import BlogCardList from '../../components/BlogCardList';
import Styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';
import BlogSearch from 'components/BlogSearch/BlogSearch';

// const categories = ["Transition to America", "Tips for College", "Career Building"]

// const blogCards = categories.map((category, id)=>{
//   return (
//     <Grid.Row>
//       <Grid.Column>
//         <BlogCardList blogHeader={category} key={id} />
//       </Grid.Column>
//     </Grid.Row>
//   )
// })

const topics = [
  'Adjusting to the U.S.',
  'American Culture',
  'American Social Norms',
  'Career & Job Advice',
  'Housing Tips',
  'Mastering English',
  'Places to Visit',
  'Productivity Tips',
  'Writing Tips'
];

const StyledLink = Styled(Link)`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: ${theme.colors.black};
  
  :hover {
    color: ${theme.colors.lightPurple};
  }

  :active {
    color: #341A93;
    text-decoration: underline;
  }
`;

const topicList = topics.map((topic, id) => {
  return (
    <Grid.Column key={id} width={16}>
      <StyledLink>{topic}</StyledLink>
    </Grid.Column>
  );
});

const StyledButton = Styled.button`
  background: #341A93;
  border-radius: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 118.5%;
  text-align: center;
  color: #FFFFFF;
  width: 330px;
height: 76px;
`;

const StyledBlogSearch = Styled(BlogSearch)`
  margin: -30px -30px 0px -30px;
`;

const Blog = () => {
  return (
    <Container>
      <Section>
        <h1 style={{ textAlign: 'center' }}>Blog</h1>
        <Grid columns={2} doubling stackable>
          <Grid.Column width={8}>
            <Segment>
              <Grid doubling stackable>
                <Grid.Column>
                  <h3>Featured</h3>
                  <Embed
                    id="O6Xo21L0ybE"
                    placeholder="/images/image-16by9.png"
                    source="youtube"
                  />
                  <h4>Tips for College</h4>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <p>
                    <span style={{ fontStyle: 'italic' }}>
                      May 15, 2020 by Alex Lee -
                    </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fermentum pellentesque efficitur. Aliquam id lectus a libero
                    egestas tristique vitae ac diam. Lorem ipsum dolor....
                  </p>
                  <StyledLink>Watch Webinar Highlights</StyledLink>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            {/* <Grid doubling stackable>
            <Grid.Column>
             <StyledBlogSearch />
            </Grid.Column>
          </Grid> */}

            <StyledBlogSearch />
            <Segment>
              <Grid columns={2} doubling stackable>
                <Grid.Row>
                  <Grid.Column width={7}>
                    <h2>Topics</h2>
                  </Grid.Column>
                  <Grid.Column>
                    <StyledLink width={5}>view all</StyledLink>
                  </Grid.Column>
                  {topicList}
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
        <BlogCardList blogHeader="Transition to America" />
        <BlogCardList blogHeader="Tips for College" />
        <BlogCardList blogHeader="Career Building" />
        <Grid centered>
          <Section>
            <StyledButton>VIEW ALL BLOG ARTICLES</StyledButton>
          </Section>
        </Grid>
      </Section>
    </Container>
  );
};

export default Blog;
