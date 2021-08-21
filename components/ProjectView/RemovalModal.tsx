import { ProjectLink, ProjectMember } from "../../types";
import Modal from "../Modal/Modal";
import style from "./ProjectView.module.scss";

interface Props {
  isOpen: boolean;
  onDismiss: () => void;
  onFormSubmit: () => void;
  removalItem: ProjectLink | ProjectMember;
}

const RemovalModal = ({
  isOpen,
  onDismiss,
  onFormSubmit,
  removalItem,
}: Props): React.ReactElement => {
  //const title = if (removalItem) {'member_id' in removalItem ? "You are about to remove this team member" : "You are about to remove this link"}
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} title={"title"}>
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
