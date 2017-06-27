var config = {
  port: 80,
  ports: 443,
  font_end: {
    title: "Limon Studio 一个爱好前端甚至全栈的程序猿的工作室",
    description: "前端 全栈",
    menu: [
      {
        name: "主页", 
        url: 'page-top',
      }, 
      { 
        name: "关于", 
        url: 'about',
      }, 
      {
        name: "技术", 
        url: 'skills', 
      }, //homePage
      {
        name: "项目", 
        url: 'projects'
      }, 
      {
        name: "团队", 
        url: 'team'
      },
      {
        name: "联系我们", 
        url: 'contact'
      },
    ],
    welcome: "很高兴能见到你~",
    about: {
      name: "关于",
      long_name: "关于",
      desc: "美妙的特效与动人的画面是我们一直所追求的，我们一直希望能将遇到的灵感或者想法用自己的代码写出来，不仅锻炼自己的能力，也为开源做出一份贡献。",
      sub_about: [{
        name: "网站开发",
        icon: "fa-briefcase",
        desc: "普通的网站搭建还是静态的广告页宣传都适合我们的工作。",
      },
      {
        name: "视觉",
        icon: "fa-photo",
        desc: "我们精力打造美好的浏览体验，用绝妙的色调搭配来是任何程序的界面都十分好看。",
      },
      {
        name: "图片",
        icon: "fa-camera-retro",
        desc: "图片的适当处理，能让你整个项目的层次提升很多。",
      },
      {
        name: "UI/UX 设计",
        icon: "fa-cube",
        desc: "UI的设计与创新是最难的，我们力求在此领域中有很好的突破。",
      }]
    },
    skills: {
      name: "技术",
      long_name: "我们的技能",
      desc: "我们渴望一直学习最新的知识与技能，这些酷炫的开发框架能让我们整个技术栈得到快速地提升，并对整个项目的开发更加快速。我们希望更快的迭代更新速度，并拥有更好的技术沉淀。",
      sub_skills: [{
        name: "HTML,CSS,JS",
        progress: "90",
      },{
        name: "PHP",
        progress: "80",
      },{
        name: "Node.js",
        progress: "85",
      },{
        name: "其他",
        progress: "70",
      }]
    },
    projects: {
      name: "项目",
      long_name: "部分项目展示",
      desc: "项目的展示是体现整个团队能力的具体表现，所以尽可能去展示更多的项目，以对自己问题的反馈，希望回馈任何问题有关于其中的bug，在这里我将由衷的感谢。",
      sub_projects: [{
        name: "exam-sys",
        long_name: "Examination_System — 考试系统",
        desc: "此项目是由老师委托，并由个人完成的一个复杂项目，可以做到选择题的判题，填空简答题的人工评分等功能。",
        tags: ["PHP", "ThinkPHP3.2"],
        img: "/images/demo/portfolio-1.jpg",
      }]
    },
    team: {
      name: "团队",
      long_name: "我们团队",
      desc: "整个团队的合作精神是重要的，它可以促使我们在项目中更精明的去开发各种项目。",
      persons: [{
        name: "张超",
        img: "",
        place: "浙江舟山",
        position: "– CEO & Web Design –",
        desc: "喜欢拍照，喜欢摄影，爱与有技术的人在一块讨论问题。"
      }]
    }
  },
  back_end: {
    title: " Studio 后台 "
  }
};

module.exports = config;