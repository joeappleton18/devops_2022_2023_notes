module.exports = {
  base: "/devops_2022_2023_notes/",
  dest: "docs",
  themeConfig: {
    sidebar: [
      {
        title: "Overview",
        collapsable: false,
        children: ["/"],
      },
      {
        title: 'Assessments',   // required
        collapsable: true,
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/assessment/scenario',
          
        ]
      },
    ]
  }
}