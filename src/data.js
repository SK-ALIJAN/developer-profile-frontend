export function list(category) {
  let data = [
    {
      category: "javascript",
      company: "Company A",
      company_url: "https://www.companya.com",
      location: "New York, NY",
      title: "JavaScript Developer",
      description: "Description of the JavaScript Developer job.",
      how_to_apply:
        "Please apply via our careers site: <a href='https://www.companya.com/careers'>Apply Here</a>",
    },
    {
      category: "javascript",
      company: "Company B",
      company_url: "https://www.companyb.com",
      location: "San Francisco, CA",
      title: "Front-end Developer",
      description: "Description of the Front-end Developer job.",
      how_to_apply: "Please send your resume to hr@companyb.com.",
    },
    {
      category: "javascript",
      company: "Company C",
      company_url: "https://www.companyc.com",
      location: "Los Angeles, CA",
      title: "Web Developer",
      description: "Description of the Web Developer job.",
      how_to_apply:
        "Apply on our website: <a href='https://www.companyc.com/jobs'>Apply Here</a>",
    },
    {
      category: "javascript",
      company: "Company D",
      company_url: "https://www.companyd.com",
      location: "Chicago, IL",
      title: "Front-end Engineer",
      description: "Description of the Front-end Engineer job.",
      how_to_apply: "Email your resume to careers@companyd.com.",
    },
    {
      category: "javascript",
      company: "Company E",
      company_url: "https://www.companye.com",
      location: "Austin, TX",
      title: "UI Developer",
      description: "Description of the UI Developer job.",
      how_to_apply:
        "Apply through our job portal: <a href='https://www.companye.com/jobs'>Apply Here</a>",
    },
    {
      category: "react",
      company: "Company F",
      company_url: "https://www.companyf.com",
      location: "Seattle, WA",
      title: "React Developer",
      description: "Description of the React Developer job.",
      how_to_apply:
        "Please apply via our careers site: <a href='https://www.companyf.com/careers'>Apply Here</a>",
    },
    {
      category: "react",
      company: "Company G",
      company_url: "https://www.companyg.com",
      location: "Boston, MA",
      title: "Front-end Engineer (React)",
      description: "Description of the Front-end Engineer (React) job.",
      how_to_apply:
        "Apply on our website: <a href='https://www.companyg.com/jobs'>Apply Here</a>",
    },
    {
      category: "react",
      company: "Company H",
      company_url: "https://www.companyh.com",
      location: "Denver, CO",
      title: "React.js Developer",
      description: "Description of the React.js Developer job.",
      how_to_apply: "Email your resume to hr@companyh.com.",
    },
    {
      category: "react",
      company: "Company I",
      company_url: "https://www.companyi.com",
      location: "San Diego, CA",
      title: "UI/UX Developer (React)",
      description: "Description of the UI/UX Developer (React) job.",
      how_to_apply:
        "Apply through our job portal: <a href='https://www.companyi.com/jobs'>Apply Here</a>",
    },
    {
      category: "react",
      company: "Company J",
      company_url: "https://www.companyj.com",
      location: "Dallas, TX",
      title: "Front-end Developer (React)",
      description: "Description of the Front-end Developer (React) job.",
      how_to_apply:
        "Please apply via our careers site: <a href='https://www.companyj.com/careers'>Apply Here</a>",
    },
    {
      category: "angular",
      company: "Company K",
      company_url: "https://www.companyk.com",
      location: "Phoenix, AZ",
      title: "Angular Developer",
      description: "Description of the Angular Developer job.",
      how_to_apply:
        "Apply on our website: <a href='https://www.companyk.com/jobs'>Apply Here</a>",
    },
    {
      category: "angular",
      company: "Company L",
      company_url: "https://www.companyl.com",
      location: "Houston, TX",
      title: "Front-end Engineer (Angular)",
      description: "Description of the Front-end Engineer (Angular) job.",
      how_to_apply: "Email your resume to hr@companyl.com.",
    },
    {
      category: "angular",
      company: "Company M",
      company_url: "https://www.companym.com",
      location: "Philadelphia, PA",
      title: "Angular.js Developer",
      description: "Description of the Angular.js Developer job.",
      how_to_apply:
        "Apply through our job portal: <a href='https://www.companym.com/jobs'>Apply Here</a>",
    },
    {
      category: "angular",
      company: "Company N",
      company_url: "https://www.companyn.com",
      location: "Miami, FL",
      title: "UI/UX Developer (Angular)",
      description: "Description of the UI/UX Developer (Angular) job.",
      how_to_apply:
        "Please apply via our careers site: <a href='https://www.companyn.com/careers'>Apply Here</a>",
    },
    {
      category: "angular",
      company: "Company O",
      company_url: "https://www.companyo.com",
      location: "Atlanta, GA",
      title: "Front-end Developer (Angular)",
      description: "Description of the Front-end Developer (Angular) job.",
      how_to_apply:
        "Apply on our website: <a href='https://www.companyo.com/jobs'>Apply Here</a>",
    },
    {
      category: "node",
      company: "Company P",
      company_url: "https://www.companyp.com",
      location: "San Jose, CA",
      title: "Node.js Developer",
      description: "Description of the Node.js Developer job.",
      how_to_apply:
        "Apply on our website: <a href='https://www.companyp.com/jobs'>Apply Here</a>",
    },
    {
      category: "node",
      company: "Company Q",
      company_url: "https://www.companyq.com",
      location: "Austin, TX",
      title: "Node.js Engineer",
      description: "Description of the Node.js Engineer job.",
      how_to_apply: "Please send your resume to careers@companyq.com.",
    },
    {
      category: "node",
      company: "Company R",
      company_url: "https://www.companyr.com",
      location: "Chicago, IL",
      title: "Backend Developer (Node.js)",
      description: "Description of the Backend Developer (Node.js) job.",
      how_to_apply:
        "Apply through our job portal: <a href='https://www.companyr.com/jobs'>Apply Here</a>",
    },
    {
      category: "node",
      company: "Company S",
      company_url: "https://www.companys.com",
      location: "Denver, CO",
      title: "Node.js Software Engineer",
      description: "Description of the Node.js Software Engineer job.",
      how_to_apply:
        "Apply on our website: <a href='https://www.companys.com/jobs'>Apply Here</a>",
    },
    {
      category: "node",
      company: "Company T",
      company_url: "https://www.companyt.com",
      location: "Seattle, WA",
      title: "Full Stack Developer (Node.js)",
      description: "Description of the Full Stack Developer (Node.js) job.",
      how_to_apply:
        "Please apply via our careers site: <a href='https://www.companyt.com/careers'>Apply Here</a>",
    },
    {
      category: "php",
      company: "Company U",
      company_url: "https://www.companyu.com",
      location: "Phoenix, AZ",
      title: "PHP Developer",
      description: "Description of the PHP Developer job.",
      how_to_apply:
        "Apply on our website: <a href='https://www.companyu.com/jobs'>Apply Here</a>",
    },
    {
      category: "php",
      company: "Company V",
      company_url: "https://www.companyv.com",
      location: "Houston, TX",
      title: "Backend Engineer (PHP)",
      description: "Description of the Backend Engineer (PHP) job.",
      how_to_apply: "Email your resume to hr@companyv.com.",
    },
    {
      category: "php",
      company: "Company W",
      company_url: "https://www.companyw.com",
      location: "Philadelphia, PA",
      title: "PHP Developer (Laravel)",
      description: "Description of the PHP Developer (Laravel) job.",
      how_to_apply:
        "Apply through our job portal: <a href='https://www.companyw.com/jobs'>Apply Here</a>",
    },
    {
      category: "php",
      company: "Company X",
      company_url: "https://www.companyx.com",
      location: "Miami, FL",
      title: "Full Stack PHP Developer",
      description: "Description of the Full Stack PHP Developer job.",
      how_to_apply:
        "Please apply via our careers site: <a href='https://www.companyx.com/careers'>Apply Here</a>",
    },
    {
      category: "php",
      company: "Company Y",
      company_url: "https://www.companyy.com",
      location: "Atlanta, GA",
      title: "PHP Web Developer",
      description: "Description of the PHP Web Developer job.",
      how_to_apply:
        "Apply on our website: <a href='https://www.companyy.com/jobs'>Apply Here</a>",
    },
  ];

  let filteresData = data.filter((ele) => {
    return ele.category === category;
  });

  return filteresData;
}
