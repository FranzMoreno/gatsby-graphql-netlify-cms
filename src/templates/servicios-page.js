import React from 'react';
import graphql from 'graphql';
import Servicios from '../components/Servicios';

export const ServiciosPageTemplate = ({ title, servicios }) => (
  <section>
    <div className="container">
      <p>{title}</p>
      <Servicios servicios={servicios} />
    </div>
  </section>
)

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(data)
  return (
    <ServiciosPageTemplate 
      title={frontmatter.title}
      servicios= {frontmatter.servicios}
    />
  )
};

export const serviciosPageQuery = graphql`
  query ServicioPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        servicios {
          titulo
          descripcion
        }
      }
    }
  }
`;