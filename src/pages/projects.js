import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import ProjectCard from '../components/projectCard'
import projectStyles from './projects.module.scss';
const ProjectsPage = () => (
  <div>
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <div className={projectStyles.projectsContainer}>
        <ProjectCard
          title="c0d3"
          paragraph="Platform Creating Great Software Engineers"
          imgUrl="https://i.ibb.co/m8DXBDR/c0d3-nobg.png"
          codeUrl="https://github.com/garageScript/c0d3-app"
          demoUrl="https://www.c0d3.com/"
        />
        <ProjectCard
          title="Front End Apps"
          paragraph="Collection of Apps Created Using Vanilla JS"
          imgUrl="https://i.ibb.co/svJSZ6X/htmlcssjs.png"
          codeUrl="https://github.com/aortizoj15/frontend-apps"
          demoUrl="https://frontend-apps.a0d3.com/"
        />
      </div>
    </Layout>
  </div>
);

export default ProjectsPage;
