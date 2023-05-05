import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import SvgPaperPlaneOutline from "Assets/icons/PaperPlaneOutline";


export default function InputMessage() {
  return (
    <div className="row glue-bottom">
      <InputField type='textarea' rows={1}/>
      <Button type="submit" color="mini">
        <SvgPaperPlaneOutline />
      </Button>
    </div>
  );
}
