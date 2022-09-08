// module.exports = {
//   themeConfig: {
//     sidebar: [
//       {
//         tite: "Assessment Information",
//         collapsable: true, 
//         children: ["/assessment/scenario.md"],
//       },
//       {
//         title: "Module Overview",
//         collapsable: true,
//         children: ["/"],
//       },
//       {
//         title: "What is DevOps ",
//         collapsable: true,
//         children: ["/week-1.md"],
//       },

//       {
//         title: "Conventions Used",
//         collapsable: true,
//         children: ["/conventions.md"],
//       },
//     ],
//   },
// };

module.exports = {
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
          '/assessment/project_report_brief.md'
        ]
      },
    ]
  }
}