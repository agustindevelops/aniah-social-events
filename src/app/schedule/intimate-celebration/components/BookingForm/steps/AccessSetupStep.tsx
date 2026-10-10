import { Acknowledgment, Notice, Question, SectionTitle, YesNo } from "../controls";
import AccessOptions from "../fields/AccessOptions";
import type { StepProps } from "../types";

const AccessSetupStep = ({ draft, update }: StepProps) => (
  <>
    <SectionTitle title="Access & setup" />
    <Acknowledgment
      checked={draft.areaCleared}
      onChange={(value) => update("areaCleared", value)}
      helper="Existing furniture and personal belongings must be moved before our arrival. We are not responsible for moving existing furniture."
    >
      I understand the setup area must be completely cleared before
      installation.
    </Acknowledgment>

    <Question label="Are working electrical outlets available near the setup area for uplighting?">
      <YesNo
        value={draft.outletsAvailable}
        onChange={(value) => update("outletsAvailable", value)}
      />
      {draft.outletsAvailable === false ? (
        <Notice>
          <p className="font-semibold">
            Uplighting will be removed from your design.
          </p>
          <p className="text-brown-600">Your package price will remain the same.</p>
        </Notice>
      ) : null}
    </Question>

    <AccessOptions
      accessType={draft.accessType}
      accessNotes={draft.accessNotes}
      onAccessTypeChange={(value) => update("accessType", value)}
      onAccessNotesChange={(value) => update("accessNotes", value)}
    />
  </>
);

export default AccessSetupStep;
