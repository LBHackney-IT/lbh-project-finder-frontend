import Button from "../../components/Button/Button";
import ConfirmationPanel from "../../components/ConfirmationPanel/ConfirmationPanel";

const ConfirmationPage = (): React.ReactElement => {
  return (
    <>
      <ConfirmationPanel successMessage="User Successfully added to the system" />
      <Button label="Return to all projects" route={"/"} />
    </>
  );
};

export default ConfirmationPage;
