import PolicyLayout from '@/components/PolicyLayout'

export const metadata = {
  title: 'Terms and Conditions | Priority Moving Group',
}

export default function TermsAndConditions() {
  return (
    <PolicyLayout
      title="Terms and Conditions"
      effectiveDate="Effective Date: May 24, 2025 · Last Updated: May 24, 2025"
    >
      <p>
        Welcome to <strong>prioritymovinggroup.com</strong>. These Terms govern your access to and use of the
        website, mobile applications, SMS communications, and services provided by Priority Moving Group.
        By using our Services, you acknowledge your agreement to these Terms and our Privacy Policy.
      </p>

      <h2>1. Overview of Services</h2>
      <p>
        Priority Moving Group operates as a moving services company connecting customers with our
        licensed moving teams. We facilitate communication, quotes, and coordination for residential and
        commercial moving services across Florida and long-distance routes.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        Users must be at least 18 years old and represent that they are of legal age and are using our
        Services lawfully. By submitting a request, you confirm that you meet these requirements.
      </p>

      <h2>3. Quotes and Booking</h2>
      <p>
        By submitting quote forms or providing your information on our website, you authorize Priority
        Moving Group to contact you via phone, email, and SMS for quotes, scheduling, and follow-up
        communications. Quotes are estimates and may vary based on the final scope of services.
      </p>
      <ul>
        <li>All quotes are non-binding estimates unless confirmed in writing.</li>
        <li>Pricing is subject to change based on actual move conditions.</li>
        <li>A deposit is required to secure your moving date.</li>
      </ul>

      <h2>4. SMS and Call Consent</h2>
      <p>
        By providing your phone number, you consent to receive automated text messages, pre-recorded
        calls, and live calls from Priority Moving Group regarding quotes, confirmations, scheduling,
        support, and surveys. Message and data rates may apply.
      </p>
      <ul>
        <li>Text <strong>STOP</strong> at any time to opt out of SMS communications.</li>
        <li>Text <strong>HELP</strong> for support information.</li>
        <li>Consent is not required as a condition of purchase.</li>
      </ul>

      <h2>5. Use of Services</h2>
      <p>
        When using our Services, you agree not to:
      </p>
      <ul>
        <li>Submit false or misleading information.</li>
        <li>Use the Services for any unlawful purpose.</li>
        <li>Attempt to gain unauthorized access to our systems or data.</li>
        <li>Resell or redistribute information obtained through our Services.</li>
      </ul>
      <p>
        Priority Moving Group reserves the right to terminate access to Services for violations of these terms.
      </p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        Our Services are provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied.
        Priority Moving Group does not guarantee specific outcomes, timelines, or pricing beyond what
        is confirmed in your written agreement.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Priority Moving Group&apos;s total liability to you for any
        claim arising out of or related to these Terms or our Services shall not exceed the greater of
        $100 or the amounts actually paid by you to Priority Moving Group in the 12 months preceding
        the claim.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        Priority Moving Group may update these Terms at any time. Updates will be posted on this page
        with a revised effective date. Continued use of our Services after changes are posted
        constitutes your acceptance of the updated Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the State of Florida,
        without regard to its conflict of law provisions. Any disputes shall be resolved in the courts
        of Broward County, Florida.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about these Terms and Conditions, please contact us:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:dispatch@prioritymovinggroup.com">dispatch@prioritymovinggroup.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:8557025478">855-702-5478</a></li>
        <li><strong>Address:</strong> 3437 NW 55th St, Fort Lauderdale, FL 33309</li>
      </ul>
    </PolicyLayout>
  )
}
