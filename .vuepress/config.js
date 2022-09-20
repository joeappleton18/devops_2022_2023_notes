module.exports = {
  base: "/devops_2022_2023_notes/",
  dest: "docs",
  themeConfig: {
    sidebar: [

      {
        title: "Module Overview",
        collapsable: false,
        children: ["/"],
      },
      {
        title: 'Assessments',   // required
        collapsable: false,
        children: ["/assessment/", "/assessment/scenario"]
      },
      {
        title: 'Side Tutorials',
        children: ["/side-tutorials/", "/side-tutorials/1.creating-a-next-and-tail-wind-application.md"],
      }
    ]
  }
}