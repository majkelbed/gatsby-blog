import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => {
    const { title, author, slug } = post.frontmatter;
    const excerpt = post.excerpt;
    return {
      title,
      author,
      slug,
      excerpt,
    };
  });
};

export default usePosts;
