const user = {
  name: "Moses Oyelade",
  city: "New York",
  bio: "Welcome!",
  color: "firebrick",
  links: {
            github: "https://github.com/Moses-Oyelade/",
            linkedin: "https://www.linkedin.com/in/moses-oyelade-710685162/",
            facebook: "https://www.facebook.com/mosesoladimeji.oyelade/"
          },


  projects: [
    {
      id: 1,
      name: "Reciplease",
      about: "A recipe tracking app",
      technologies: ["Rails", "Bootstrap CSS"],
    },
    {
      id: 2,
      name: "Kibbles N Bitz",
      about: "Tinder for dogs",
      technologies: ["React", "Redux"],
    },
    {
      id: 3,
      name: "Alienwares",
      about: "Etsy for aliens",
      technologies: ["React", "Redux", "Rails"],
    },
  ],
};

export default user;
