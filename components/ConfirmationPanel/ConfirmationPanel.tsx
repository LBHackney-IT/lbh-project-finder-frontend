interface Props {
  successMessage?: string;
}

const ConfirmationPanel = ({ successMessage }: Props): React.ReactElement => {
  return (
    <div>
      <div className="govuk-panel govuk-panel--confirmation lbh-panel">
        <h1 className="govuk-panel__title">
          {successMessage || "Action complete"}
        </h1>
      </div>
    </div>
  );
};

export default ConfirmationPanel;
