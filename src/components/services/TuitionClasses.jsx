import React, { useContext, useState, useRef } from "react";
import "../css/TuitionClasses.scss";
import cardImg1 from "../../assets/images/classes_category_1.jpg";
import cardImg2 from "../../assets/images/classes_category_2.jpg";
import cardImg3 from "../../assets/images/classes_category_3.jpg";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { ThemeContext } from "../../context/context";

import tutor1 from "../../assets/images/mishan.jpg";
import tutor5 from "../../assets/images/prithvi.jpg";
import tutor4 from "../../assets/images/patel.jpg";
import tutor3 from "../../assets/images/founder_1.jpg";
import tutor2 from "../../assets/images/founder_2.jpg";
import tutor6 from '../../assets/images/sanjay.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/TuitionClasses.scss";
import "../css/DrivingLicense.scss";

import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  const {dark} = useContext(ThemeContext)

  return (
    <div className={`card dflex dflex-column ${dark? 'dark' : 'light'}`}>
      <figure>
        <img src={props.img} alt="a random online class " />
      </figure>

      <h3>{props.title}</h3>

      <h4>{props.caption}</h4>
      <p>{props.description}</p>
    </div>
  );
};

const cardInfo = [
  {
    id: 1,
    title: "Private Classes",
    caption: "Looking for one-to-one classes?",
    description:
      "Register Yourself & then Enroll to a course, by choosing the Course & then the Teacher.",
    img: cardImg1,
  },

  {
    id: 2,
    title: "Offline Classes",
    caption: "Are you left with any doubts?",
    description:
      "Yes, we will record your live classes for you. Just subscribe to the videos.",
    img: cardImg2,
  },

  {
    id: 3,
    title: "Group Classes",
    caption: "Need the classroom experience?",
    description:
      "Enroll to our group classes right now & study with your peers.",
    img: cardImg3,
  },
];

const Carousel = () => {
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 2000,
    initialSlide: 0,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teachers = [
    {
      name: "Avinash Patel",
      qualification: "Bachelor of Science",
      university: "T.U.",
      experience: "2 years",
      img: tutor4,
      fb: "https://www.facebook.com/abhinash.patel.58323",
    },
    {
      name: "Mishan Acharya",
      qualification: "+2 Technical",
      university: "K.M.G.S.S",
      experience: "1 year",
      img: tutor1,
      fb: "https://www.facebook.com/seesan.sharma.7",
    },
    {
      name: "Prakash Banjade",
      qualification: "Bsc. CSIT",
      university: "T.U.",
      experience: "3 Years",
      img: tutor2,
      fb: "https://www.facebook.com/prakash.banjade.5832",
    },
    {
      name: "Prithvi Pandey",
      qualification: "Bsc. CSIT",
      university: "T.U.",
      experience: "1 year",
      img: tutor5,
      fb: "https://www.facebook.com/prithvi.panday.7",
    },
    {
      name: "Arjun Paudel",
      qualification: "Bachelor of Science",
      university: "T.U.",
      experience: "3 year",
      img: tutor3,
      fb: "https://www.facebook.com/profile.php?id=100009343787975",
    },
    {
      name: "Sanjay Bishwakarma",
      qualification: "Bsc. CSIT",
      university: "T.U.",
      experience: "1 year",
      img: tutor6,
      fb: "https://www.facebook.com/sanjay.bishwakarma.92351",
    },
  ];

  const CarouselCard = (props) => {
    const {dark} = useContext(ThemeContext)

    AOS.init();
    return (
      <div className={`carousel-card dflex-center dflex-column gap-1 ${dark? 'dark' : 'light'}`} >
        <img src={props.img} alt="famous teacher" />
        <h3 className="text-center">{props.name}</h3>
        <p className="dflex-center gap-1" style={{ fontWeight: "bold" }}>
          <LibraryBooksIcon /> {props.qualification}
        </p>
        <p className="dflex-center gap-1">
          <SchoolIcon /> {props.university}
        </p>
        <p className="dflex-center gap-1">
          <DriveFileRenameOutlineIcon /> {props.experience}
        </p>
        <a
          href={props.fb}
          className="fb-btn dflex-center gap-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FacebookOutlinedIcon /> Connect
        </a>
      </div>
    );
  };

  const {dark} = useContext(ThemeContext)

  return (
    <div style={{ padding: "20px" }} className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {teachers.map((teacher) => (
          <CarouselCard
            img={teacher.img}
            name={teacher.name}
            qualification={teacher.qualification}
            university={teacher.university}
            experience={teacher.experience}
            fb={teacher.fb}
            key={teacher.fb}
          />
        ))}
      </Slider>
      <button style={{display: dark? 'none' : 'block'}} className="btn-left" onClick={previous}>
        <ArrowCircleLeftIcon
          sx={{
            fontSize: "3rem",
            opacity: ".8",
            color: "var(--purple)",
            "&:hover": { opacity: "1" },
          }}
        />
      </button>
      <button style={{display: dark? 'none' : 'block'}} className="btn-right" onClick={next}>
        <ArrowCircleRightIcon
          sx={{
            fontSize: "3rem",
            opacity: ".8",
            color: "var(--purple)",
            "&:hover": { opacity: "1" },
          }}
        />
      </button>
    </div>
  );
};

const TuitionClasses = () => {
  const {dark} = useContext(ThemeContext)



  return (
    <div className="tuitionClasses-container">

      <section className={`tuition_herosection ${dark? 'dark' : 'light'}`}>
        <h2>Want The Best Tuition Classes?</h2>
        <h3>You have come to the right place</h3>
        <button onClick={()=>{
          document.getElementById('tutors-section').scrollIntoView()
        }}>
            Hire Our Best Tutors
        </button>
      </section>

      <div className={`small-box dflex dflex-column gap-2 ${dark? 'dark' : 'light'}`}>
        <h3 className="text-center">Best Tutors For Online/Offline Tuitions</h3>
        <ol className="dflex wrap gap-1">
          <li className="dflex gap-1">
            <input type="checkbox" id="check1" defaultChecked readOnly />
            <label htmlFor="check1">Online School For Every Student</label>
          </li>
          <li className="dflex gap-1">
            <input type="checkbox" id="check2" defaultChecked readOnly />
            <label htmlFor="check2">All Subjects And Board</label>
          </li>
          <li className="dflex gap-1">
            <input type="checkbox" id="check3" defaultChecked readOnly />
            <label htmlFor="check2">Online Classes For Class 5 to 12</label>
          </li>
        </ol>

        <h4 className="text-center">
          District Level Examination Preparation | SEE Preparation | SLC
          Preparation | Any Board Exam Preparation Up To Grade 12
        </h4>
      </div>

      <section className="categories">
        <h2 className="text-center">Categories Of Online Classes</h2>
        <div className="sub-heading grid-center">
          <SchoolIcon sx={{ color: "var(--purple)", fontSize: "3rem" }} />
        </div>
        <div className="cards-container dflex gap-1 wrap">
          {cardInfo.map((card) => {
            return (
              <Card
                key={card.id}
                img={card.img}
                title={card.title}
                caption={card.caption}
                description={card.description}
              />
            );
          })}
        </div>
      </section>

      <section className="teachers-container" id="tutors-section">
        <h2 className="heading">Meet Our Best Tutors</h2>
        <Carousel />
      </section>

      <section className="teaching-features license-features">
        <ol>
          <li className="feature1" data-aos="fade-down" data-aos-offset="300">
            <h2>Expert instructors</h2>
            <p>
              Our instructors are highly qualified and experienced in their
              fields, with a track record of helping students achieve their
              goals.
            </p>
          </li>

          <span
            className="firstSpan"
            data-aos="fade-down"
            data-aos-offset="302"
          >
            &lt;&gt;
          </span>

          <li className="feature2" data-aos="fade-down" data-aos-offset="300">
            <h2>Flexible scheduling</h2>
            <p>
              We offer classes at a variety of times to accommodate busy
              schedules, and we're happy to work with students to find a
              schedule that works for them.
            </p>
          </li>

          <span
            className="secondSpan"
            data-aos="fade-down"
            data-aos-offset="302"
          >
            &lt;&gt;
          </span>

          <li className="feature3" data-aos="fade-down" data-aos-offset="300">
            <h2>Convenient location</h2>
            <p>
              Our classes are held at a central and easily accessible location,
              with plenty of parking and public transit options.
            </p>
          </li>

          <span
            className="thirdSpan"
            data-aos="fade-down"
            data-aos-offset="302"
          >
            &lt;&gt;
          </span>

          <li className="feature4" data-aos="fade-down" data-aos-offset="300">
            <h2>Personalized attention</h2>
            <p>
              We strive to create a supportive and collaborative learning
              environment, and our small class sizes allow us to give students
              the individual attention they need to succeed.
            </p>
          </li>

          <span
            className="forthSpan"
            data-aos="fade-down"
            data-aos-offset="302"
          >
            &lt;&gt;
          </span>

          <li className="feature5" data-aos="fade-down" data-aos-offset="280">
            <h2>State-of-the-art facilities</h2>
            <p>
              Our classrooms are equipped with the latest technologies and
              resources to enhance the learning experience.
            </p>
          </li>

          <span
            className="fifthSpan"
            data-aos="fade-down"
            data-aos-offset="302"
          >
            &lt;&gt;
          </span>

          <li className="feature6" data-aos="fade-down" data-aos-offset="280">
            <h2>Affordable pricing</h2>
            <p>
              We offer competitive pricing and flexible payment options to make
              our classes accessible to as many students as possible.
            </p>
          </li>

          <span
            className="sixthSpan"
            data-aos="fade-down"
            data-aos-offset="302"
          >
            &lt;&gt;
          </span>

          <li className="feature7" data-aos="fade-down" data-aos-offset="280">
            <h2>High success rates</h2>
            <p>
              Our classes have a proven track record of helping students achieve
              their academic and career goals.
            </p>
          </li>

          <span
            className="seventhSpan"
            data-aos="fade-down"
            data-aos-offset="302"
          >
            &lt;&gt;
          </span>

          <li className="feature8" data-aos="fade-down" data-aos-offset="280">
            <h2>Customized curriculum</h2>
            <p>
              We design our classes to meet the specific needs and goals of our
              students, and we're always willing to make adjustments as needed
              to ensure that our students are getting the most out of their
              learning experience.{" "}
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default TuitionClasses;
