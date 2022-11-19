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
          "/side-tutorials/4.mutating-a-database.md",
          "/side-tutorials/5.authentication-and-wider-services"

        ]
      },

      {
        title: 'Week 1: Introduction to DevOps',
        children: ["/week-1/lecture", "/week-1/"]
      },
      {
        title: 'Week 2: Static Code Analysis (1)',
        children: ["/week-2/lecture", "/week-2/"]
      },
      {
        title: 'Week 3: Static Code Analysis (2)',
        children: ["/week-3/lecture", "/week-3/"]
      },
      {

        title: 'Week 4: Component Driven Development',
        children: ["/week-4/lecture", "/week-4/"]
      },
      {

        title: 'Week 5: Testing',
        children: ["/week-5/lecture", "/week-5/"]
      },
      {

        title: 'Week 6: Database Testing',
        children: ["/week-6/lecture", "/week-6/"]
      },

      {
        collapsable: false,
        title: 'Week 7: Authentication Testing Strategies and Deployment',
        children: ["/week-7/lecture", "/week-7/"]

      },
      {

        title: 'Week 8: CD Strategies',
        children: ["/week-8/lecture","/week-8/"]
      },
      {

        title: 'Week 9: Unit Testing',

      },
      {

        title: 'Week 10: Monitoring and Logging',

      },
      {

        title: 'Week 10: Module Wrap Up (assessment support)',

      },
      {

        title: 'Week 10: Module Wrap Up (assessment support)',

      }

    ]
  }
}