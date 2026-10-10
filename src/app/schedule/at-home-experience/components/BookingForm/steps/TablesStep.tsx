import type { BookingPhoto } from "@/lib/booking/draft";

import { SectionTitle } from "../controls";
import TableDetailsFields from "../fields/TableDetailsFields";
import PhotoUploader from "../PhotoUploader";
import type { StepProps } from "../types";

type Props = StepProps & {
  photos: BookingPhoto[];
  onAddPhotos: (files: File[]) => void;
  onRemovePhoto: (id: string) => void;
};

/** Only shown when the client provides their own tables and chairs. */
const TablesStep = ({
  draft,
  update,
  photos,
  onAddPhotos,
  onRemovePhoto,
}: Props) => (
  <>
    <SectionTitle
      title="Your tables"
      description="Tell us about the tables and chairs we'll be styling."
    />
    <TableDetailsFields
      value={draft.table}
      onChange={(value) => update("table", value)}
    />
    <PhotoUploader
      label="Photos of Your Tables, Chairs & Setup Space"
      helper="Please include wide photos of the room along with clear photos of the tables and chairs we'll be styling."
      photos={photos}
      onAdd={onAddPhotos}
      onRemove={onRemovePhoto}
    />
  </>
);

export default TablesStep;
