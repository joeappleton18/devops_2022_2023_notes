(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{291:function(e,t,a){e.exports=a.p+"assets/img/git-flow.f3ecc3cf.png"},292:function(e,t,a){e.exports=a.p+"assets/img/staging.e4507fed.png"},293:function(e,t,a){e.exports=a.p+"assets/img/deployment.af4f7c70.png"},333:function(e,t,a){"use strict";a.r(t);var o=a(13),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"week-8-closing-the-ci-cd-loop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#week-8-closing-the-ci-cd-loop"}},[e._v("#")]),e._v(" Week 8: Closing the CI/CD Loop")]),e._v(" "),t("p",[e._v("This week, we are going to address the following question:")]),e._v(" "),t("ul",[t("li",[e._v("How can teams manage and deploy new software features using Git?")])]),e._v(" "),t("p",[e._v('Unfortunately, the answer to the above question is "it depends". To answer it, we will explore two  branching strategies: based on gitflow.')]),e._v(" "),t("h2",{attrs:{id:"lesson-dependencies-🔨"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lesson-dependencies-🔨"}},[e._v("#")]),e._v(" Lesson Dependencies 🔨")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"}},[e._v("You will need to ensure you have the version control tool Git installed"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("You'll need to know the basic Git Commands (e.g., "),t("code",[e._v("checkout -b")]),e._v(", "),t("code",[e._v("push")]),e._v(", and "),t("code",[e._v("commit")]),e._v(")")])])]),e._v(" "),t("li",[e._v("While you can use any text editor for this session, I recommend that you install "),t("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("You will need access to a MongDB database.\n"),t("ul",[t("li",[e._v("You can install your own locally")]),e._v(" "),t("li",[e._v("Use "),t("a",{attrs:{href:"https://www.mongodb.com/atlas/database",target:"_blank",rel:"noopener noreferrer"}},[e._v("AtlasDB"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cloudinary.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("You need a Cloudinary account"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("You need a GitHub account"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/week-7/#task-2-deploying-our-application"}},[e._v("You will need to have signed up to https://vercel.com/ and deployed a version of the solent room finder")])],1)]),e._v(" "),t("h2",{attrs:{id:"task-0-getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task-0-getting-started"}},[e._v("#")]),e._v(" Task 0: Getting Started")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("TASK")]),e._v(" "),t("p",[e._v("This week, we are going to work in small groups to set up a CI/CD solution. For this task:")]),e._v(" "),t("ol",[t("li",[e._v("Form a group")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/week-7/#task-2-deploying-our-application"}},[e._v("Ensure that one of your team members has a deployed version of the Room Finder application. If not, complete the final task from last week.")])],1),e._v(" "),t("li",[e._v("The group member that has deployed a version of the project should add their team members as contributors to the GitHub project of the deployed application.")]),e._v(" "),t("li",[e._v("All team members should clone the repo and set up a development version of the Room Finder application")])])]),e._v(" "),t("h2",{attrs:{id:"feature-branching-is-controversial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feature-branching-is-controversial"}},[e._v("#")]),e._v(" Feature branching is controversial")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("DEFINITION")]),e._v(" "),t("p",[e._v("📖 "),t("strong",[e._v("Feature Branch")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the main branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the main branch will never contain broken code, which is a huge advantage for continuous integration environments."),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("img",{attrs:{src:a(291),alt:""}})]),e._v(" "),t("blockquote",[t("blockquote",[t("p",[e._v("An example of the git flow branching strategy ("),t("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),t("OutboundLink")],1),e._v("). As you can see, it's some what complex.")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feature branching, unfortunately has a bad reputation. This is mostly due to, historically, teams using a technique called GitFlow, popularised by Vincent Driessen"),t("OutboundLink")],1),e._v('.  However, in recent times, this technique has come under some criticism. The root of these critiques is its complexity and the worry of old, unmerged feature branches. Old branches are particularly troublesome as they are prone to merge into conflict hell! This has led to Vincent Driessen suggesting that teams should "adopt a much simpler workflow (like GitHub flow) instead of trying to shoehorn git-flow into your team".')]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/github-flow",target:"_blank",rel:"noopener noreferrer"}},[e._v('According to GitHub, "GitHub flow is a lightweight, branch-based workflow.  GitHub flow is useful for everyone, not just developers". Therefore, it seems like a good choice for our Room Finder application.'),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"task-1-discussing-the-pros-and-cons-of-branching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task-1-discussing-the-pros-and-cons-of-branching"}},[e._v("#")]),e._v(" Task 1: Discussing the Pros and Cons of Branching")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Task 1: Discussing the Pros and Cons of Branching")]),e._v(" "),t("p",[e._v("Before we start the practical portion of this week's session. In your groups,  research and discuss different Git team branching strategies.")])]),e._v(" "),t("h2",{attrs:{id:"task-2-setting-up-gitflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task-2-setting-up-gitflow"}},[e._v("#")]),e._v(" Task 2: Setting up GitFlow")]),e._v(" "),t("p",[e._v("For this task, we are going to work our small groups to set up two different team workflows: a feature branch workflow, and a simplified direct push to the staging branch.  Using Vercel, we can automatically deploy a staging version of of project each time we commit to the staging branch.")]),e._v(" "),t("h2",{attrs:{id:"_2-1-creating-a-staging-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-creating-a-staging-branch"}},[e._v("#")]),e._v(" 2.1: Creating a Staging Branch")]),e._v(" "),t("p",[e._v("For both of these strategies, you are going to need a staging branch. One team member should:")]),e._v(" "),t("ul",[t("li",[e._v("Locally, check out a new staging branch: git checkout -b staging")]),e._v(" "),t("li",[e._v("Push this branch upstream: git push origin staging")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches",target:"_blank",rel:"noopener noreferrer"}},[e._v("Work out how to protect the staging and main branch so no one can push to these branches."),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"_2-3-staging-branches-auto-deploys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-staging-branches-auto-deploys"}},[e._v("#")]),e._v(" 2.3: Staging Branches Auto Deploys")]),e._v(" "),t("p",[e._v("If you check your https://vercel.com/ project dash, you should see that Vercel attempted to deploy your staging branch. However, this deployment probably failed. In fact, for every branch, you create Vercel will create a custom deployment for you!")]),e._v(" "),t("p",[e._v("Currently, our application deploys on a random URL. This is a problem in staging, as we need to test authentication. For OAuth to work, we need a stable redirect URL.  This is a very easy challenge to solve:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(292),alt:""}})]),e._v(" "),t("blockquote",[t("blockquote",[t("p",[e._v("My staging branch")])])]),e._v(" "),t("ol",[t("li",[e._v('To create a staging environment, you\'ll first need to add a custom domain to your project. In Vercel, You can add a domain by clicking the "Settings" tab from a Project and selecting the Domains section. From the Domains section, you can assign a domain to the appropriate Git branch. The domain will need to be '),t("code",[e._v("<staging-name>")]),e._v(".vercel.app: mine is "),t("a",{attrs:{href:"solent-room-finder-staging.vercel.app"}},[e._v("solent-room-finder-staging.vercel.app")]),e._v(".")])]),e._v(" "),t("iframe",{attrs:{src:"https://app.tango.us/app/embed/aa7f903b-5671-4505-ba79-3efe9551eca5?iframe",sandbox:"allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin",security:"restricted",title:"Tango Workflow",width:"100%",height:"600px",referrerpolicy:"strict-origin-when-cross-origin",frameborder:"0",webkitallowfullscreen:"webkitallowfullscreen",mozallowfullscreen:"mozallowfullscreen",allowfullscreen:"allowfullscreen"}}),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("Now you have a stable domain, you can set up a new Github OAuth application.")])]),e._v(" "),t("li",[t("p",[e._v("You can now begin to set up the staging environment:")]),e._v(" "),t("ol",[t("li",[e._v("In your Vercel project setting, set the following environment vars for your staging branch):\n"),t("ol",[t("li",[e._v("NEXTAUTH_URL=your staging URL")]),e._v(" "),t("li",[e._v("NEXT_PUBLIC_TESTING= have no value in it")]),e._v(" "),t("li",[e._v("MONGODB_URI= a staging database url (use AtlasDB)")]),e._v(" "),t("li",[e._v("GITHUB_SECRET= a generated secret from your OAuth application")]),e._v(" "),t("li",[e._v("GITHUB_ID= your OAuth Applications ID")])])])])])]),e._v(" "),t("p",[e._v("Finally, we want any further preview branch to not have auth. To achieve this add a "),t("code",[e._v("NEXT_PUBLIC_TESTING = true")]),e._v('  environment variable for your preview environment. Since we have set this environment variable = "" (no value) in staging already, this won\'t impact our staging environment. In the same vein: set a '),t("code",[e._v("MONGODB_URI")]),e._v(" environment variable up for preview branches.")]),e._v(" "),t("h2",{attrs:{id:"_2-4-first-feature-branch-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-first-feature-branch-flow"}},[e._v("#")]),e._v(" 2.4: First Feature Branch Flow")]),e._v(" "),t("p",[e._v("One or more team members should check out (locally) a new feature branch: "),t("code",[e._v("git checkout -b")]),e._v("myGreateFeature`.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Make some token changes to the application and a few commits.")])]),e._v(" "),t("li",[t("p",[e._v("Push this branch to the origin: "),t("code",[e._v("git push origin")]),e._v("myGreateFeature`.")])])]),e._v(" "),t("p",[t("img",{attrs:{src:a(293),alt:""}})]),e._v(" "),t("blockquote",[t("blockquote",[t("p",[e._v("this is what your pull request should look like")])])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Figure out how to raise a pull request into the staging branch. If all has gone well, you should see your GitHub workflows running.  You'll also get a sample deployment of your application.")])]),e._v(" "),t("li",[t("p",[e._v("If all the tests pass and the preview deployment looks good, then merge and close the pull request.")])]),e._v(" "),t("li",[t("p",[e._v("Your application should now be in staging. To deploy to production, you need to raise a further pull request from staging into master.")])])]),e._v(" "),t("h2",{attrs:{id:"_2-5-try-a-simplified-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-try-a-simplified-flow"}},[e._v("#")]),e._v(" 2.5 Try a simplified flow")]),e._v(" "),t("p",[e._v("I don't mind the above flow; it provides a stable branch you can share with the product owner. However, you may want to simplify it more. As a final task, set up a workflow where all team members push directly to staging. When the release is ready, raise a pull request directly into the main branch.")])])}),[],!1,null,null,null);t.default=r.exports}}]);