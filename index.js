// Import stylesheets
//	import './style.css';

const homeRender = () => {
  console.log("in Home");
  const content = document.getElementById("content");
  content.setAttribute("class","center");

  content.innerHTML = "<img class = \"profileImage\" src=\"https://ik.imagekit.io/shivam/120203668_1851628074977604_3664318634659103000_n_R8HRmCJVC.jpg\" alt=\"Shivam Verma\"><p> Shivam Verma </p><p> Software Design Engineer </p><p> Newgen Software </p><a href=\"mailto:vermashivam2510@gmail.com\" target = \"_blank\" style = \"text-decoration : none \"> <img class = \"iconImage\" src=\"https://ik.imagekit.io/shivam/mail_ZqJgtq2Is.jpg \" alt=\"Email\">  vermashivam2510@gmail.com </a> <div><a href = \"https://www.linkedin.com/in/vermashivam2510/\" target = \"_blank\" ><img class = \"iconImage\" src=\"https://ik.imagekit.io/shivam/linkedin_8LSGyUDSCS8P.png\" alt=\"linkedin\"></a><a href =\"https://www.codechef.com/users/shivamv\" target = \"_blank\" ><img class = \"iconImage\" src=\"https://ik.imagekit.io/shivam/codechef_cG5o_bLArJw.jpg \" alt = \"Codechef\"></a><a href =\"https://www.hackerrank.com/vermashivam2510\" target = \"_blank\" ><img class = \"iconImage\" src=\"https://ik.imagekit.io/shivam/hackerrank_logo-300x32_xt45nFBriIZ.png \" alt = \"Hackerrank\"></a><a href =\"https://github.com/vermashivam\" target = \"_blank\" ><img class = \"iconImage\" src=\"https://ik.imagekit.io/shivam/GitHub_jsZS1ya50.png \" alt=\"Github\"></a></div>";

  resumeRender(content);

}

const educationRender = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.setAttribute("class","center");

  var edu1 = () => {
    var div1 = document.createElement("div");
    div1.setAttribute("class","flexDiv");
    var divLeft1 = document.createElement("div");
    var divRight1 = document.createElement("div");
    divLeft1.setAttribute("class","leftDiv");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    divLeft1.append(p1);
    divLeft1.append(p2);
    divLeft1.append(p3);
    divRight1.append(p4);
    div1.append(divLeft1);
    div1.append(divRight1);
    p1.innerHTML = " Bachelor Of Technology , Information Technology ";
    p2.innerHTML = " Harcourt Butler Technical University ";
    p3.innerHTML = " Grade : 71.78% ";
    p4.innerHTML = " 2016 - 2020 ";

    content.append(div1);
  }
  var edu2 = () => {
    var div1 = document.createElement("div");
    div1.setAttribute("class","flexDiv");
    var divLeft1 = document.createElement("div");
    var divRight1 = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    divLeft1.append(p1);
    divLeft1.append(p2);
    divLeft1.append(p3);
    divRight1.append(p4);
    div1.append(divLeft1);
    div1.append(divRight1);
    p1.innerHTML = " Senior Secondary School Examination ( 12<sup>th</sup> Board ) ";
    p2.innerHTML = " Chinmaya Vidyalaya ( CBSE Board ) ";
    p3.innerHTML = " Grade : 91.40% ";
    p4.innerHTML = " 2013 - 2015";
    
    content.append(div1);
  }
  var edu3 = () => {
    var div1 = document.createElement("div");
    div1.setAttribute("class","flexDiv");
    var divLeft1 = document.createElement("div");
    var divRight1 = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    divLeft1.append(p1);
    divLeft1.append(p2);
    divLeft1.append(p3);
    divRight1.append(p4);
    div1.append(divLeft1);
    div1.append(divRight1);
    p1.innerHTML = " Secondary School Examination ( 10<sup>th</sup> Board ) ";
    p2.innerHTML = " Chinmaya Vidyalaya ( CBSE Board ) ";
    p3.innerHTML = " Grade : 9.8 CGPA ( <i>equivalent 93.10%</i> ) ";
    p4.innerHTML = " 2011 - 1013 ";
    
    content.append(div1);
  }
  edu1();
  edu2();
  edu3();

  resumeRender(content);
}

const experienceRender = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.setAttribute("class","center");

  var exp1 = () => {
    var div1 = document.createElement("div");
    div1.setAttribute("class","flexDiv");
    var divLeft1 = document.createElement("div");
    var divRight1 = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    divLeft1.append(p1);
    divLeft1.append(p2);
    divLeft1.append(p3);
    divRight1.append(p4);
    div1.append(divLeft1);
    div1.append(divRight1);
    p1.innerHTML = " Software Design Engineer ";
    p2.innerHTML = " Newgen Software Technologies Limited ";
    p3.innerHTML = " <!-- A little description to be added later --> ";
    p4.innerHTML = " September 2020 - Present ";
    
    content.append(div1);
  }

  exp1();

  resumeRender(content);
}

const projectsRender = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.setAttribute("class","center");

  var pro1 = () => {
    var div1 = document.createElement("div");
    div1.setAttribute("class","flexDiv");
    var divLeft1 = document.createElement("div");
    //var divRight1 = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    //var p4 = document.createElement("p");
    divLeft1.append(p1);
    divLeft1.append(p2);
    divLeft1.append(p3);
    //divRight1.append(p4);
    div1.append(divLeft1);
    //div1.append(divRight1);
    p1.innerHTML = " Weather App  ( <a href =\"https://fsdi-mini-project-shivam-verma.stackblitz.io\" target = \"_blank\" style=\"text-decoration:none\"> Click to open App </a> )";
    p2.innerHTML = " It calls  weather api to get current weather and forcasts for next two days of the city seached by the user. IIt sends GET requaest and receive a JSON file which is then rendered on single page web application.";
    p3.innerHTML = " Technologies : HTML , CSS , JavaScript ";
    //p4.innerHTML = "";
    
    content.append(div1);
  }

  pro1();

  resumeRender(content);
}

var resumeRender = (content) => {
  var resume = document.createElement("p");
  resume.innerHTML = "<a href = \"https://drive.google.com/file/d/1KlkNJD9aDGXg6YxVH9Mv8OO8Q_La58BU/view?usp=sharing\" target = \"_blank\" > <img class = \"iconImage\" src = \"https://ik.imagekit.io/shivam/resume_SjVmyJp60pB3.jpg \" > Open Resume </a> ";
  content.append(resume);
}

const home = document.getElementById("home");
var education = document.querySelector("#education");
const experience = document.getElementById("experience");
const projects = document.getElementById("projects");

homeRender();

home.onclick = () => {
  homeRender();
};

education.onclick = () => {
  console.log("education clicked");
  educationRender();
};

experience.onclick = () => {
  experienceRender();
};

projects.onclick = () => {
  projectsRender();
};


