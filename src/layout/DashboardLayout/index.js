import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { GraphOverview } from "../../components";
import { Line, Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "../../variables";

function ContactHome() {
  const { t } = useTranslation();

  return (
    <>
      <section id="Dashboard" className="">
        <div className="w-full min-h-screen flex flex-col ">
          <div className="w-full md:w-11/12 mx-auto md:py-20 px-2 sm:px-6 mt-10 md:mt-0 ">
<GraphOverview/>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactHome;
