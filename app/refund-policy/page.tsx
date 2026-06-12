import PolicyLayout from '@/components/PolicyLayout'

export const metadata = {
  title: 'Refund Policy | Priority Moving Group',
}

export default function RefundPolicy() {
  return (
    <PolicyLayout
      title="Refund Policy"
      subtitle="Please read our cancellation and refund terms carefully before booking."
      effectiveDate="Effective Date: May 24, 2025"
    >
      <p>
        At Priority Moving Group, we understand that plans can change. The following policy outlines
        your rights and obligations regarding cancellations and refunds.
      </p>

      <h2>Cancellation Window</h2>
      <p>
        Estimates may be canceled and deposits are <strong>refundable</strong> if the customer cancels
        within <strong>72 hours</strong> of placing their reservation, minus a <strong>10% merchant
        processing fee</strong>.
      </p>

      <h2>Cancellations After 72 Hours</h2>
      <p>
        Cancellations made after the 72-hour window result in <strong>forfeiture of the down payment</strong>.
        No refund will be issued for cancellations received after this period.
      </p>

      <h2>Short-Notice Reservations</h2>
      <p>
        Reservations placed within <strong>10 business days</strong> of the first available pickup date
        are considered short-notice bookings. For these reservations:
      </p>
      <ul>
        <li>The deposit is <strong>non-refundable</strong> at the time of booking.</li>
        <li>
          The non-refundable deposit may be applied as a credit toward a future booking made within
          a <strong>12-month window</strong> from the original reservation date.
        </li>
      </ul>

      <h2>Once Moving Has Commenced</h2>
      <p>
        Customers <strong>cannot receive a refund</strong> once the assigned moving crew has arrived
        at the pickup address and the move has begun. At that point, the full agreed amount becomes due.
      </p>

      <h2>How to Cancel</h2>
      <p>
        To cancel your reservation, please contact us as soon as possible through one of the
        following channels:
      </p>
      <ul>
        <li><strong>Phone:</strong> <a href="tel:8557025478">855-702-5478</a></li>
        <li><strong>Email:</strong> <a href="mailto:dispatch@prioritymovinggroup.com">dispatch@prioritymovinggroup.com</a></li>
      </ul>
      <p>
        All cancellation requests must be confirmed in writing (email) to be considered valid.
      </p>

      <h2>Payment Processing</h2>
      <p>
        Payments are processed by Priority Moving Group. We operate as a licensed moving company
        providing residential and commercial moving services in Florida and for interstate relocations.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions regarding our refund policy, please reach out:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:dispatch@prioritymovinggroup.com">dispatch@prioritymovinggroup.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:8557025478">855-702-5478</a></li>
        <li><strong>Address:</strong> 3437 NW 55th St, Fort Lauderdale, FL 33309</li>
      </ul>
    </PolicyLayout>
  )
}
