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
        children: ["/assessment/"]
      },
    ]
  }
}