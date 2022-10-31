module.exports = {
  base: "/devops_2022_2023_notes/",
  dest: "docs",
  markdown: {
    lineNumbers: true
  },
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
        children: ["/side-tutorials/",
          "/side-tutorials/1.creating-a-next-and-tail-wind-application.md",
          "/side-tutorials/2.react-state.md",
          "/side-tutorials/3.connecting-to-a-database.md",
          "/side-tutorials/4.mutating-a-database.md"]
      },

      {
        title: 'Week 1',
        children: ["/week-1/lecture", "/week-1/"]
      },
      {
        title: 'Week 2',
        children: ["/week-2/lecture", "/week-2/"]
      },
      {
        title: 'Week 3',
        children: ["/week-3/lecture", "/week-3/"]
      },
      {

        title: 'Week 4',
        children: ["/week-4/lecture", "/week-4/"]
      },
      {

        title: 'Week 5',
        children: ["/week-5/lecture", "/week-5/"]
      },
      // {

      //   title: 'Week 6',
      //   children: ["/week-6/lecture", "/week-6/"]
      // }
    ]
  }
}