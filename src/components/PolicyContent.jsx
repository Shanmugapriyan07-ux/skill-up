import Section from "./Section";
import { InfoList, InfoCard, AlertBox, Tag } from "./InfoCard";

const icons = {
  intro: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  collect: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  use: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  chat: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  share: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  storage: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  cookies: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>,
  rights: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  third: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  children: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  changes: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  contact: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
};

export default function PolicyContent() {
  return (
    <div className="flex-1 min-w-0 space-y-2">

      {/* Introduction */}
      <Section id="introduction" icon={icons.intro} title="Introduction">
        <p>
          Welcome to <strong className="text-gray-900 dark:text-white font-semibold">MindMates</strong> — a social networking and chat application built to help people connect authentically. Your privacy matters deeply to us, and we want to be completely transparent about how we handle your personal information.
        </p>
        <p>
          This Privacy Policy applies to the MindMates mobile application and any related services we operate. By creating an account or using our app, you agree to the practices described here.
        </p>
        <AlertBox type="purple">
          <strong>Plain language promise:</strong> We've written this policy to be understood by real people, not just lawyers. If something isn't clear, reach out and we'll explain it.
        </AlertBox>
        <p>
          MindMates is powered by <strong className="text-gray-900 dark:text-white font-semibold">Supabase</strong> for our backend infrastructure — including our database, authentication system, and real-time features. All data handling through Supabase is governed by their enterprise-grade security standards.
        </p>
      </Section>

      {/* Information We Collect */}
      <Section id="information-collected" icon={icons.collect} title="Information We Collect" tinted>
        <p>We collect information to provide you with a great social experience. Here's exactly what we collect and why:</p>

        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          <InfoCard title="Account Information">
            When you sign up, we collect your name, email address, profile photo, bio, listed interests, and optional location details.
          </InfoCard>
          <InfoCard title="Authentication Data">
            If you sign in with Google, we receive your Google account's name, email, and profile picture. We never see your Google password.
          </InfoCard>
          <InfoCard title="Messages & Media">
            Your chat messages, photos, videos, and files shared within MindMates are stored to deliver them to recipients.
          </InfoCard>
          <InfoCard title="Usage & Activity">
            We log app interactions such as friend requests sent, posts viewed, features used, and session durations to improve the app.
          </InfoCard>
          <InfoCard title="Device Information">
            We collect your device type, operating system version, push notification token, and IP address for security and debugging.
          </InfoCard>
          <InfoCard title="Location (Optional)">
            If you choose to add a location to your profile or enable nearby discovery, we use location data only with your explicit permission.
          </InfoCard>
        </div>
      </Section>

      {/* How We Use Data */}
      <Section id="how-we-use" icon={icons.use} title="How We Use Your Data">
        <p>Your data is used to power and improve MindMates. We never use it for purposes you wouldn't expect.</p>
        <InfoList items={[
          "Creating and managing your MindMates profile and account",
          "Delivering real-time messages and media to your connections",
          "Sending push notifications about new messages, friend requests, and activity",
          "Powering friend discovery and connection recommendations based on shared interests",
          "Maintaining account security and detecting suspicious activity",
          "Analysing aggregate usage patterns to improve app performance and design",
          "Responding to your support requests and resolving disputes",
          "Complying with legal obligations under applicable law (Indian IT Act, DPDPA 2023)",
        ]} />
        <AlertBox type="info">
          We do <strong>not</strong> use your personal data for targeted advertising. MindMates is ad-free by design.
        </AlertBox>
      </Section>

      {/* Chat & Messaging Privacy */}
      <Section id="chat-privacy" icon={icons.chat} title="Chat & Messaging Privacy" tinted>
        <p>
          Your conversations are personal. Here's how we handle your messages on MindMates:
        </p>
        <InfoList items={[
          "Messages are transmitted over encrypted connections (TLS 1.3) between your device and our servers",
          "Messages are stored in our Supabase database to support features like message history and multi-device access",
          "Media files (images, videos) are stored in Supabase Storage with access restricted to conversation participants only",
          "We do not read your private messages for advertising or profiling purposes",
          "Deleted messages are removed from our active database within 30 days",
          "Group chats and direct messages are both protected under the same privacy standards",
        ]} />
        <AlertBox type="warning">
          <strong>Note on content moderation:</strong> Our systems may automatically scan messages for illegal content (such as CSAM) as required by law. Human review only occurs when a message is formally reported by another user.
        </AlertBox>
        <p>
          Real-time message delivery is powered by Supabase Realtime — a websocket-based system that routes messages without storing them in intermediate servers.
        </p>
      </Section>

      {/* Data Sharing */}
      <Section id="data-sharing" icon={icons.share} title="Data Sharing Policy">
        <p>
          We do <strong className="text-gray-900 dark:text-white font-semibold">not</strong> sell your personal data — ever. Here is a precise breakdown of when your data may be shared:
        </p>

        <div className="space-y-3 mt-2">
          <InfoCard title="With other users (by your choice)">
            Your public profile information (name, bio, interests, profile photo) is visible to other MindMates users. You control what appears in your profile settings.
          </InfoCard>
          <InfoCard title="With service providers">
            We work with Supabase (database and auth), Google (authentication), and potentially analytics providers. All are bound by data processing agreements and strict confidentiality obligations.
          </InfoCard>
          <InfoCard title="For legal compliance">
            We may disclose data if required by a valid court order, government request, or to protect the safety of our users or the public.
          </InfoCard>
          <InfoCard title="In a business transfer">
            If MindMates is acquired or merged, your data may transfer to the new entity. We will notify you before this happens and explain your options.
          </InfoCard>
        </div>

        <AlertBox type="success">
          We will always notify you when legally possible before sharing your data with authorities.
        </AlertBox>
      </Section>

      {/* Storage & Security */}
      <Section id="storage-security" icon={icons.storage} title="Data Storage & Security" tinted>
        <p>
          MindMates uses <strong className="text-gray-900 dark:text-white font-semibold">Supabase</strong> as our primary infrastructure provider. Your data is stored on secure, encrypted servers with enterprise-grade protection.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          <InfoCard title="Encryption at rest">
            All database records and stored files are encrypted using AES-256 encryption at the storage layer.
          </InfoCard>
          <InfoCard title="Encryption in transit">
            All data transfers between our app and servers use TLS 1.3, the latest and most secure transport protocol.
          </InfoCard>
          <InfoCard title="Access controls">
            Supabase Row Level Security (RLS) ensures users can only access their own data. No user can access another's private information.
          </InfoCard>
          <InfoCard title="Backup & recovery">
            Supabase performs daily automated backups. Data is recoverable in the event of accidental loss.
          </InfoCard>
        </div>

        <p className="mt-4">
          We retain your account data for as long as your account remains active. Inactive accounts are flagged after 24 months and you are notified before any data deletion occurs.
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          <Tag>AES-256 Encryption</Tag>
          <Tag>TLS 1.3</Tag>
          <Tag>Row Level Security</Tag>
          <Tag>Daily Backups</Tag>
          <Tag>SOC 2 Compliant Infrastructure</Tag>
        </div>
      </Section>

      {/* Cookies */}
      <Section id="cookies" icon={icons.cookies} title="Cookies & Tracking">
        <p>
          As a mobile application, MindMates does not use browser cookies. However, we use similar technologies for core app functionality:
        </p>
        <InfoList items={[
          "Secure session tokens stored locally on your device to keep you logged in",
          "App preferences saved locally (e.g., dark mode, notification settings)",
          "Analytics SDKs that collect anonymised, aggregated usage data to improve features",
          "Crash reporting tools that automatically capture error logs when the app fails",
          "Push notification tokens registered with Apple (APNs) or Google (FCM) to deliver alerts",
        ]} />
        <AlertBox type="info">
          We do not use cross-app tracking, advertising identifiers (IDFA/GAID), or third-party tracking pixels. Your activity on MindMates stays within MindMates.
        </AlertBox>
      </Section>

      {/* User Rights */}
      <Section id="user-rights" icon={icons.rights} title="Your Rights & Controls" tinted>
        <p>
          Under India's Digital Personal Data Protection Act (DPDPA) 2023, you have the following rights over your personal data:
        </p>
        <div className="space-y-3">
          <InfoCard title="Right to Access">
            Request a full export of all personal data we hold about you. Submit a request via Settings → Privacy → Export My Data.
          </InfoCard>
          <InfoCard title="Right to Correct">
            Update your profile information, interests, bio, and location at any time directly from your profile settings.
          </InfoCard>
          <InfoCard title="Right to Delete">
            Permanently delete your account and all associated data from Settings → Account → Delete Account. Deletion is processed within 30 days.
          </InfoCard>
          <InfoCard title="Right to Withdraw Consent">
            Opt out of non-essential data processing at any time, including analytics and optional features, via your privacy settings.
          </InfoCard>
          <InfoCard title="Right to Nominate">
            Under the DPDPA, you may nominate a trusted person to exercise your data rights on your behalf in certain circumstances.
          </InfoCard>
          <InfoCard title="Right to Grievance Redressal">
            If you believe your rights have been violated, you can contact our Data Protection Officer (details in the Contact section below).
          </InfoCard>
        </div>
        <AlertBox type="purple">
          We respond to all valid data rights requests within <strong>30 days</strong> as required by applicable law.
        </AlertBox>
      </Section>

      {/* Third-party */}
      <Section id="third-party" icon={icons.third} title="Third-Party Services">
        <p>
          MindMates integrates with trusted third-party services. Each has its own privacy policy that governs how they handle data:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Google Sign-In</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Used for authentication. We receive your name, email, and profile photo from Google. We never access your Google Drive, contacts, or other Google services. Governed by Google's Privacy Policy.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#3ECF8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Supabase</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Our backend provider handling database, authentication, file storage, and real-time messaging. Supabase is SOC 2 Type II certified and GDPR compliant. Data is stored on AWS infrastructure.</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm">
          We evaluate all third-party integrations for security and privacy compliance before adding them to MindMates.
        </p>
      </Section>

      {/* Children */}
      <Section id="children" icon={icons.children} title="Children's Privacy" tinted>
        <p>
          MindMates is designed for users aged <strong className="text-gray-900 dark:text-white font-semibold">18 and above</strong>. We do not knowingly collect personal data from anyone under 18 years of age.
        </p>
        <p>
          If we discover that an account belongs to a minor, we will immediately suspend the account and delete all associated data without notice. We rely on honest age representation during signup.
        </p>
        <AlertBox type="warning">
          If you are a parent or guardian and believe your child has created an account on MindMates, please contact us immediately at <strong>shanmugapriyancse582@gmail.com</strong> and we will take swift action.
        </AlertBox>
      </Section>

      {/* Changes */}
      <Section id="policy-changes" icon={icons.changes} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time as MindMates grows and as laws evolve. Here's our commitment to you when changes happen:
        </p>
        <InfoList items={[
          "We will notify you of material changes via an in-app notification and/or email at least 14 days before they take effect",
          "The 'Last Updated' date at the top of this page will always reflect the most recent revision",
          "For minor changes (like clarifications), we will update the page without a separate notification",
          "Continued use of MindMates after changes take effect constitutes your acceptance of the revised policy",
          "You can always contact us if you have questions about any specific change",
        ]} />
      </Section>

      {/* Contact */}
      <Section id="contact" icon={icons.contact} title="Contact Us">
        <p>
          We take privacy concerns seriously. If you have any questions, requests, or concerns about this policy or your data, please reach out:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          <div className="p-5 rounded-xl border border-[#6D4AFF]/20 bg-[#6D4AFF]/5 dark:bg-[#6D4AFF]/10">
            <p className="text-xs font-semibold text-[#6D4AFF] uppercase tracking-wider mb-2">General Privacy</p>
            <a href="mailto:privacy@mindmates.app" className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#6D4AFF] transition-colors">
             shanmugapriyancse582@gmail.com
            </a>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">For data requests, questions, and concerns</p>
          </div>
          <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-800">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Support</p>
            <a href="mailto:support@mindmates.app" className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#6D4AFF] transition-colors">
              shanmugapriyancse582@gmail.com
            </a>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">For general app-related help</p>
          </div>
        </div>
        <div className="mt-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Registered Address</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            MindMates Technologies Pvt. Ltd.<br />
            Tamil Nadu, India<br />
            <span className="text-gray-400 dark:text-gray-500 text-xs">CIN: U72900TN2026PTC000000</span>
          </p>
        </div>
        <AlertBox type="purple">
          We aim to respond to all privacy inquiries within <strong>72 hours</strong> on working days.
        </AlertBox>
      </Section>

    </div>
  );
}
