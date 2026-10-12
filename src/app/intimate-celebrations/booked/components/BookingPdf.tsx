import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import type { BookingConfirmation } from "@/lib/ase-admin/booking";
import {
  BOOKING_CONTACT_EMAIL,
  BOOKING_POLICIES,
  bookingDetailRows,
} from "@/lib/booking/confirmation";

import { NEXT_STEPS } from "./nextSteps";

const CORAL = "#CE6B69";
const BROWN_800 = "#5e5045";
const BROWN_700 = "#766659";
const BROWN_500 = "#a89583";
const BROWN_100 = "#f0eae4";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: BROWN_700,
    lineHeight: 1.4,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 24 },
  logo: { width: 56, height: 56, marginRight: 16 },
  title: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    lineHeight: 1.2,
    color: CORAL,
  },
  subtitle: { marginTop: 4, color: BROWN_500 },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    color: BROWN_800,
    marginTop: 20,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: BROWN_100,
  },
  label: { width: 130, color: BROWN_500 },
  value: { flex: 1, color: BROWN_800 },
  bullet: { flexDirection: "row", marginBottom: 4 },
  bulletDot: { width: 12 },
  bulletText: { flex: 1 },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 48,
    right: 48,
    fontSize: 9,
    color: BROWN_500,
    textAlign: "center",
  },
});

const BulletList = ({ items }: { items: string[] }) => (
  <View>
    {items.map((item) => (
      <View key={item} style={styles.bullet}>
        <Text style={styles.bulletDot}>•</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </View>
);

type Props = { booking: BookingConfirmation; logoUrl: string };

const BookingPdf = ({ booking, logoUrl }: Props) => (
  <Document
    title={`Aniah Social Events booking ${booking.reference}`}
    author="Aniah Social Events"
  >
    <Page size="LETTER" style={styles.page}>
      <View style={styles.header}>
        {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf Image has no alt */}
        <Image src={logoUrl} style={styles.logo} />
        <View>
          <Text style={styles.title}>Your celebration is booked</Text>
          <Text style={styles.subtitle}>
            {booking.firstName ? `Thank you, ${booking.firstName}. ` : "Thank you. "}
            {booking.paid
              ? "Your payment was received."
              : "We're confirming your payment."}
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Booking details</Text>
      {bookingDetailRows(booking).map((row) => (
        <View key={row.label} style={styles.row} wrap={false}>
          <Text style={styles.label}>{row.label}</Text>
          <Text style={styles.value}>{row.value}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>What happens next</Text>
      <BulletList items={NEXT_STEPS} />

      <Text style={styles.sectionTitle}>Policies</Text>
      <BulletList items={BOOKING_POLICIES} />

      <Text style={styles.footer} fixed>
        Aniah Social Events · {BOOKING_CONTACT_EMAIL} · Booking reference{" "}
        {booking.reference}
      </Text>
    </Page>
  </Document>
);

export default BookingPdf;
