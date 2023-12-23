import { Icon } from "@iconify/react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import Logo from "../../assets/images/logo.svg";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {

    return (
        <>
            <header className="site-header">
                <div className="top-header">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="dez-topbar-left">
                                <ul class="social-line text-center float-right">
                                    <li>
                                        <a href="javascript:void(0);">
                                            <Icon icon="fa:phone" height={"14"} />
                                            <span>+149 75 23 222 35</span>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <Icon icon="fa:envelope-o" height={"14"} />
                                            <span>renovate@mail.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <Icon icon="fa:clock-o" height={"14"} />
                                            <span>Mon - Fri: 08.00 - 17.00</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="dez-topbar-right">
                                <ul class="social-line text-center pull-right">
                                    <li>
                                        <a>
                                            <Icon icon="fa:facebook" height={"14"} />
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <Icon icon="fa:twitter" height={"14"} />
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fa fa-linkedin">
                                            <Icon icon="fa:linkedin" height={"14"} />
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fa fa-google-plus">
                                            <Icon icon="fa:google-plus" height={"14"} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header">
                    <div className="main-bar">
                        <Container>
                            <div class="logo-header mostion">
                                <Link to={"#"}>
                                    <img src={Logo} height="70" alt="" />
                                </Link>
                            </div>
                            <div className="header-nav navbar-collapse justify-content-end">
                                <Nav className="me-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/components/" spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/">Services</NavLink>
                                    </NavItem>{" "}
                                    <NavItem>
                                        <NavLink href="/components/">Projects</NavLink>
                                    </NavItem>{" "}
                                    <NavItem>
                                        <NavLink href="/components/">Contact</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Container>
                    </div>
                </div>
            </header>
        </>
    );
}
