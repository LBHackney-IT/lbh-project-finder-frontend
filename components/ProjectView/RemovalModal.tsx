import { Project, ProjectLink, ProjectMember } from "../../types";
import Modal from "../Modal/Modal";
import style from "./ProjectView.module.scss";

interface Props {
  title: string;
  isOpen: boolean;
  onDismiss: () => void;
  onFormSubmit: () => void;
}

const RemovalModal = ({
  title,
  isOpen,
  onDismiss,
  onFormSubmit,
}: Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} title={title}>
      <p className="lbh-body">Are you sure you want to do this?</p>
      <div className={style.modalActions}>
        <button onClick={onFormSubmit} className="govuk-button lbh-button">
          Yes, remove
        </button>
        <a
          className="lbh-link lbh-link--no-visited-state"
          href="#"
          onClick={onDismiss}
        >
          Cancel
        </a>
      </div>
    </Modal>
  );
};

export default RemovalModal;
