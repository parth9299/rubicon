import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Slider from "react-slick";
import { Button, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import Interior from "../../assets/images/Interior.jpg";
import PdfCad from "../../assets/images/Pdftocad.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const tabsData = [
    {
        id: 0,
        title: "Step1: floor plan",
        mess: "Explore our options for 2D and 3D floor plans.",
        webm: "//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/step1.webm",
        mp4: "//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/step1.mp4",
        poster:
            "//qhstatic-sg-s3.coohom.com/image/png/1670499238192/step1.png?x-oss-process=image/resize,/format,webp",
    },
    {
        id: 1,
        title: "Step2: Furnish the room",
        mess: "More than 750,000 exquisite homes with outstanding 3D models.",
        webm: "//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/step2.webm",
        mp4: "//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/step2.mp4",
        poster:
            "//qhstatic-sg-s3.coohom.com/image/png/1670499238491/step2.png?x-oss-process=image/resize,/format,webp",
    },
    {
        id: 2,
        title: "Step3: 3D rendering",
        mess: "Enjoy photo-realistic rendering and immersive panoramic experiences.",
        webm: "//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/step3.webm",
        mp4: "//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/step3.mp4",
        poster:
            "//qhstatic-sg-s3.coohom.com/image/png/1670499238192/step3.png?x-oss-process=image/resize,/format,webp",
    },
];
export default function Homepage() {
    const sliderRef = useRef();
    const [currentTab, setCurrentTab] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const workSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const handleTabChange = (tabId) => {
        setCurrentTab(tabId);
        sliderRef.current.slickGoTo(tabId);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTab((prevTab) => (prevTab === 2 ? 0 : prevTab + 1));
            sliderRef.current.slickGoTo(currentTab);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [currentTab]);
    const serviceData = [
        {
            icon: "building-o",
            title: "Construction",
            description: "Lorem ipsum dolor sit adipiscing sed diam nonummy end.",
        },
        {
            icon: "user",
            title: "Architecture",
            description: "Lorem ipsum dolor sit adipiscing sed diam nonummy end.",
        },
        {
            icon: "truck",
            title: "Consulting",
            description: "Lorem ipsum dolor sit adipiscing sed diam nonummy end.",
        },
        {
            icon: "book",
            title: "Mechanical",
            description: "Lorem ipsum dolor sit adipiscing sed diam nonummy end.",
        },
    ];
    const ourServiceData = [
        {
            title: "3D Floor Plan Services",
            excerpt: "Rubicon Solutions Services is an Architectural and Engineering Outsourcing Company offering high-quality 3D Floor Plan Services to clients in the USA, UK, Canada, Europe, Australia, New Zealand, Russia, UAE and other countries.",
            imgSrc: "https://builderpress.b-cdn.net/wp-content/uploads/2017/04/3d-visualization-750x440.jpg",
            dataAos: "fade-right",
            link: "/services/3dplans",
        },
        {
            title: "Architectural BIM Services",
            excerpt: "Architectural BIM is the need of time. It has been in high demand since modern architectural growth. And that is why we bring forth the                most excellent Architecture BIM Services to our clients. Our comprehensive BIM services let our clients work smoothly through all stages of their architectural projects.",
            imgSrc: PdfCad,
            dataAos: "fade-right",
            link: "/services/3dplans",
        },
        {
            title: "PDF to CAD Services",
            excerpt:
                "CAD Drafting services and AutoCAD Drawings services are essential to the success of an architectural plan. It is vital to have CAD drawings that are accurately drafted in order to obtain the desired output. This will enable architects and contractors to work more efficiently.",
            imgSrc:
                "https://builderpress.b-cdn.net/wp-content/uploads/2017/04/project-management-750x440.jpg",
            dataAos: "fade-right",
            link: "/services/3dplans",

        },
        {
            title: "Architecture",
            excerpt:
                "The design processes in which we sketch, build physical models...",
            imgSrc:
                "https://builderpress.b-cdn.net/wp-content/uploads/2017/04/architecture-750x440.jpg",
            dataAos: "fade-right",
        },
        {
            title: "Project Management",
            excerpt:
                "We provide full project management solution to help you get your dream project completed within your budget...",
            imgSrc:
                "https://builderpress.b-cdn.net/wp-content/uploads/2017/04/architecture-750x440.jpg",
            dataAos: "fade-right",
        },
        {
            title: "Interior Design",
            excerpt:
                "Interior design is the art and science of enhancing the interiors...",
            imgSrc:
                "https://builderpress.b-cdn.net/wp-content/uploads/2017/04/architecture-750x440.jpg",
            dataAos: "fade-right",
        },
        // {
        //     title: "3d Visualization",
        //     excerpt:
        //         "It is the 3D computer graphics process of automatically converting...",
        //     imgSrc:
        //         "https://builderpress.b-cdn.net/wp-content/uploads/2017/04/architecture-750x440.jpg",
        //     dataAos: "fade-left",
        // },
        // {
        //     title: "Landscaping",
        //     excerpt:
        //         "Landscaping is an activity that improves the visible features of an area of land...",
        //     imgSrc:
        //         "https://builderpress.b-cdn.net/wp-content/uploads/2017/04/architecture-750x440.jpg",
        //     dataAos: "fade-left",
        // },
        // {
        //     title: "Maintenance",
        //     excerpt:
        //         "We provide building maintenance services after project completion. Lorem Ipsum is simply dummy text...",
        //     imgSrc:
        //         "https://builderpress.b-cdn.net/wp-content/uploads/2017/04/architecture-750x440.jpg",
        //     dataAos: "fade-left",
        // },
    ];

    return (
        <>
            <div
                className="slider-container"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
            >
                <Slider {...settings}>
                    <div className="slider_inner">
                        <video
                            className="w-100"
                            autoplay=""
                            preload=""
                            loop=""
                            muted
                            playsinline=""
                            poster="//qhstatic-sg-s3.coohom.com/image/jpeg/1694598696890/6C7C452F49289108A458F9B47245F6B3.jpg?x-oss-process=image/resize,/format,webp"
                        >
                            <source
                                type="video/webm"
                                src="//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/02_2.webm"
                            />
                            <source
                                type="video/mp4"
                                src="//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/02_2.mp4"
                            />
                        </video>
                        <div className="slider_content">
                            <h1
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600"
                            >
                                We Build Your Dream
                            </h1>
                            <p
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600"
                            >
                                Welcome Rubicone Solution
                            </p>
                        </div>
                        {/* <img src className='slider_img' /> */}
                    </div>{" "}
                    <div className="slider_inner">
                        <video
                            className="w-100"
                            autoplay=""
                            preload=""
                            loop=""
                            muted
                            playsinline=""
                            poster="//qhstatic-sg-s3.coohom.com/image/png/1670220926051/panoramas.png?x-oss-process=image/resize,/format,webp"
                        >
                            <source
                                type="video/webm"
                                src="//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/panoramas.webm"
                            />
                            <source
                                type="video/mp4"
                                src="//coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/panoramas.mp4"
                            />
                        </video>
                        <div className="slider_content">
                            <h1
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600"
                            >
                                Story Telling App For Your Children
                            </h1>
                            <p
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600"
                            >
                                Unlock Imagination with KidLitKatalyst AI-Personalized Stories
                                for Kids
                            </p>
                        </div>{" "}
                    </div>
                </Slider>
            </div>
            <div className="py-5">
                <Container className="py-5">
                    <Row className="about_us">
                        <Col
                            lg={4}
                            data-aos="fade-right"
                            data-aos-offset="400"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="600"
                        >
                            <img src={Interior} className="w-100" />
                        </Col>
                        <Col lg={1}></Col>
                        <Col
                            className={"laptop_layout"}
                            data-aos="fade-left"
                            data-aos-offset="400"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="600"
                        >
                            <p className="sub_head">About Company</p>
                            <h3>Awesome services from industrial company</h3>
                            <p>
                                CAD Drafting services and AutoCAD Drawings services are essential to the success of an architectural plan. It is vital to
                                have CAD drawings that are accurately drafted in order to obtain the desired output. This will enable architects and
                                contractors to work more efficiently. We have completed many complex Architectural, Structural & HVAC/MEP drawings
                                and provided 100% satisfaction for our customers. We are committed to providing high-quality service. We have a highly skilled team that can understand your requirements. They will provide CAD Drafting Services
                                customized to your specifications at a reasonable cost and within a short turnaround time. Rubicon Servicesconfirm to
                                client specifications. We make sure all drawings follow the guidelines. This ensures consistency and integrity. We place
                                importance on customer satisfaction and accuracy in all we do. With high-quality, cost-effective services, we assist our
                                clients in achieving cost and quality advantage over the market.
                            </p>

                            <p>

                                We offer AutoCAD Drawings and Drafting services such as structural, mechanical, MEPF and architectural CAD Drafting
                                services. AutoCAD and Revit are both well-equipped to create accurate CAD drawings. With this software, drafting is
                                much more efficient and quicker. It also provides accurate drawings for various engineering areas such as structural,
                                mechanical, architectural, and others. This software produces CAD files in any format, including .dwg, .dws, .dwt, .dxf.
                                The layouts and protocols are also included with legends, title blocks, and detailed notes. Our 2D CAD Drafting Services
                                are reliable, accurate, and error-free for Architecture, Civil, Engineering, Construction, HVAC, Electrical, as well as
                                Mechanical.           </p>
                            {/* <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. .
                            </p> */}
                            <Row>
                                {serviceData.map((item, index) => (
                                    <Col md={6} lg={6} sm={6} key={index}>
                                        <div className={`icon-bx-wraper`}>
                                            <div className={`icon-bx-xs`}>
                                                <span className="icon-cell">
                                                    <Icon icon={`fa:${item.icon}`} size={19} />
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 our_services" data-aos="fade-up">
                <Container>
                    <p className="sub_head text-center">Our Services</p>
                    <h1
                        data-aos="fade-right "
                        className="text-center mb-5"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="600"
                    >
                        We Work to Craft
                    </h1>
                    <Row>
                        {ourServiceData.map((service, index) => (
                            <Col
                                lg={4}
                                key={index}
                                data-aos={service.dataAos}
                                data-aos-offset="400"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600"
                            >
                                <div className="our_service_inner" >
                                    <img src={service.imgSrc} className="w-100" />
                                    <div className={`service-excerpt ${service.link ? 'link' : ''}`}>
                                        <h3>{service.title}</h3>
                                        <div className="services-content-wrapper">
                                            {service.excerpt}
                                        </div>
                                    </div>
                                    {service.link && <Link to={service.link}>VIEW DETAIL</Link>}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <div className="py-5" data-aos="fade-up">
                <Container>
                    <Row>
                        <Col
                            lg={4}
                            className="we_work"
                            data-aos="fade-up-right"
                            data-aos-offset="400"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="600"
                        >
                            <p className="sub_head">How We Work</p>
                            <h1>Our Master Design</h1>
                            <p className="fs-5">
                                We've crafted it using a 3-step process to achieve remarkable
                                outcomes
                            </p>
                            <Nav vertical tabs className="border-0 ">
                                {tabsData.map((tab) => (
                                    <NavItem key={tab.id}>
                                        <NavLink
                                            className={currentTab === tab.id ? "active" : ""}
                                            onClick={() => handleTabChange(tab.id)}
                                        >
                                            <h3>{tab.title}</h3>
                                            {currentTab === tab.id && <p>{tab.mess}</p>}
                                        </NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col
                            className={"laptop_layout"}
                            data-aos="fade-up-left"
                            data-aos-offset="400"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="600"
                        >
                            <div className="laptop">
                                <div className="shadow"></div>
                                <div className="lid"></div>
                                <div className="screen">
                                    <Slider {...workSettings} ref={sliderRef}>
                                        {tabsData.map((tab, index) => (
                                            <div key={tab.id}>
                                                <video
                                                    className="w-100 h-100"
                                                    style={{ objectFit: "fill" }}
                                                    autoPlay
                                                    preload=""
                                                    loop
                                                    muted
                                                    playsInline=""
                                                    poster={tab?.poster}
                                                >
                                                    {/* <source type="video/webm" src={tab?.webm !== undefined ? tab.webm : null} /> */}
                                                    <source type="video/mp4" src={tab?.mp4} />
                                                </video>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="bottom">
                                    <div className="keyboard"></div>
                                    <div className="trackpad"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="p-5 get_in_toch">
                <div className="d-flex">
                    <div>

                        <h2 class="m-0 text-white ">The best theme for Construction</h2>
                        <p class="m-0 text-white ">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                    </div>
                    <Button color="white" className="rounded-0 fw-bold ">
                        Let's Talk
                    </Button>
                </div>
            </div>
        </>
    );
}
