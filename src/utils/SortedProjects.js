class SortedProjects {
  constructor(allMarkdownRemark) {
    allMarkdownRemark.edges.forEach(({ node }) => {
      const project = node.fields.project
      if (!this[project.status]) {
        this[project.status] = []
      }
      this[project.status].push(project);
    });
  }
}

export default SortedProjects;
