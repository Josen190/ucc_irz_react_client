import React from "react";
import Button from "../../../Button/Button";
import Textarea from "../../../InputField/Textarea/Textarea";
import SvgPaperPlaneOutline from "../../../../Constants/icons/PaperPlaneOutline";

export default function InputMessage() {
  return (
    <div className="row glue-bottom">
      <Textarea rows={1} isresize="true" />
      <Button type="submit" color="mini">
        <SvgPaperPlaneOutline />
      </Button>
    </div>
  );
}
