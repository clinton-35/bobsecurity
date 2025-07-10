import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CCTV } from "../pages/cctv";
import { ConstructionSecurity } from "../pages/constructionsecurity";
import { CyberSecurity } from "../pages/cybersecurity";
import { Consultancy } from "../pages/consultancy";
import { EventsSecurity } from "../pages/eventssecurity";
import { HomeSecurity } from "../pages/homesecurity";
import {Kservices} from "../pages/kservices";
import { Patrol } from "../pages/patrols";
import { Pi } from "../pages/pi";
import { Response } from "../pages/responseteam";
import { Vip } from "../pages/vipsecurity";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
        <Route path ="/cctv" element={<CCTV />}/>
        <Route path ="/constructionsec" element={<ConstructionSecurity />}/>
        <Route path ="/cybersecurity" element={<CyberSecurity />}/>
        <Route path ="/consultancy" element={<Consultancy />}/>
        <Route path ="/events" element={<EventsSecurity />}/>
        <Route path ="/home&officesecurity" element={<HomeSecurity />}/>
        <Route path ="/kservices" element={<Kservices />}/>
        <Route path ="/patrol" element={<Patrol />}/>
        <Route path ="/pi" element={<Pi />}/>
        <Route path ="/response" element={<Response />}/>
        <Route path ="/vip" element={<Vip />}/>
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;