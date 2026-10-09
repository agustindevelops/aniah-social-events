import {
  type BookingPhoto,
  usesClientFurniture,
} from "@/lib/booking/draft";

import { SectionTitle } from "../controls";
import FurnitureChoice from "../fields/FurnitureChoice";
import GuestCountPicker from "../fields/GuestCountPicker";
import TableDetailsFields from "../fields/TableDetailsFields";
import PhotoUploader from "../PhotoUploader";
import type { StepProps } from "../types";

type Props = StepProps & {
  photos: BookingPhoto[];
  onAddPhotos: (files: File[]) => void;
  onRemovePhoto: (id: string) => void;
};

const PHOTO_COPY = {
  client: {
    label: "Photos of Your Tables, Chairs & Setup Space",
    helper:
      "Please include wide photos of the room along with clear photos of the tables and chairs we'll be styling.",
  },
  ours: {
    label: "Photos of Your Setup Space",
    helper:
      "Please upload a few photos showing the room and where you'd like the dinner setup placed.",
  },
};

const ExperienceStep = ({
  draft,
  update,
  photos,
  onAddPhotos,
  onRemovePhoto,
}: Props) => {
  const clientFurniture = usesClientFurniture(draft);
  const photoCopy = clientFurniture ? PHOTO_COPY.client : PHOTO_COPY.ours;

  return (
    <>
      <SectionTitle
        title="Your experience"
        description="Choose how you'd like your dinner styled. Your price updates as you go."
      />
      <FurnitureChoice
        value={draft.furniture}
        onChange={(value) => update("furniture", value)}
      />
      {clientFurniture ? (
        <TableDetailsFields
          value={draft.table}
          onChange={(value) => update("table", value)}
        />
      ) : null}
      <GuestCountPicker
        value={draft.guestCount}
        onChange={(value) => update("guestCount", value)}
      />
      <PhotoUploader
        label={photoCopy.label}
        helper={photoCopy.helper}
        photos={photos}
        onAdd={onAddPhotos}
        onRemove={onRemovePhoto}
      />
    </>
  );
};

export default ExperienceStep;
