import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

function EmailRow({ title, subject, description, time, id }) {
  return <div className="emailRow">
      <div className="emailRow__options">
          <Checkbox />
          <IconButton>
              <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
              <LabelImportantOutlinedIcon />
          </IconButton>
      </div>
      <div className="emailRow__title"></div>
      <div className="emailRow__message"></div>
      <div className="emailRow__description"></div>
  </div>;
}

export default EmailRow;
