import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./SendMail.css";
import { Button } from "@material-ui/core";

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>

        <div className="sendMail__options">
          <Button className="sendMail__send" >Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
