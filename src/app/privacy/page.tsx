import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import { Frame } from '@/app/components/frame';

export default function PrivacyPage() {
  return (
    <Frame activeUrl='/privacy'>
      <section className='pt-32 pb-24'>
        <div className='layout'>
          <div className='max-w-3xl mx-auto'>
            <p className='mb-4 text-sm font-medium uppercase tracking-widest text-gray-500'>
              Legal
            </p>
            <h1 className='text-4xl font-bold text-white md:text-5xl'>
              Privacy Policy
            </h1>
            <p className='mt-4 text-gray-400'>
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>

            <div className='mt-12 space-y-12'>
              {/* Introduction */}
              <section>
                <h2 className='text-2xl font-bold text-white'>Introduction</h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  At domed, we are committed to protecting your privacy and
                  ensuring the security of your personal data. This Privacy
                  Policy explains how we collect, use, store, and protect
                  information when you use our anti-cheat services.
                </p>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  We take extra care to try and remove any personal information
                  from our data wherever possible. Our server-side approach to
                  anti-cheat is designed with privacy in mind, minimizing the
                  data we need to collect while maintaining effective cheat
                  detection.
                </p>
              </section>

              {/* Data We Collect */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  Data We Collect
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  We collect and process only the minimum data necessary to
                  provide our services:
                </p>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    Organization & Organizer Information
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    We collect personally identifiable information (PII) from
                    organizations and tournament organizers for the following
                    purposes:
                  </p>
                  <ul className='mt-4 space-y-2 text-gray-400'>
                    <li className='flex items-start'>
                      <span className='mr-3 text-gray-600'>•</span>
                      Billing and payment processing
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-3 text-gray-600'>•</span>
                      Identity verification of anti-cheat service users
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-3 text-gray-600'>•</span>
                      Account management and support
                    </li>
                  </ul>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    Demo Files & Game Data
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    Demo files are processed for cheat detection purposes. These
                    files may contain:
                  </p>
                  <ul className='mt-4 space-y-2 text-gray-400'>
                    <li className='flex items-start'>
                      <span className='mr-3 text-gray-600'>•</span>
                      Steam ID
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-3 text-gray-600'>•</span>
                      Steam username
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-3 text-gray-600'>•</span>
                      In-game chat messages
                    </li>
                  </ul>
                  <p className='mt-4 text-gray-500 text-sm'>
                    <strong className='text-gray-400'>Important:</strong> Demo
                    files are only stored when there is a high suspicion of
                    cheating or a confirmed cheater is detected. In all other
                    cases, demo files are processed and then discarded.
                  </p>
                </div>
              </section>

              {/* Legal Basis for Processing */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  Legal Basis for Processing (GDPR)
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  Under the General Data Protection Regulation (GDPR), we
                  process your personal data based on the following legal
                  grounds:
                </p>
                <ul className='mt-4 space-y-4 text-gray-400'>
                  <li className='flex items-start'>
                    <span className='mr-3 text-white font-semibold'>
                      Contract Performance:
                    </span>
                    Processing necessary to fulfill our service agreement with
                    tournament organizers.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-white font-semibold'>
                      Legitimate Interest:
                    </span>
                    Processing game data to detect and prevent cheating,
                    maintaining fair play in competitive gaming.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-white font-semibold'>
                      Legal Obligation:
                    </span>
                    Processing required to comply with applicable laws and
                    regulations.
                  </li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  Your Rights Under GDPR
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  If you are located in the European Economic Area (EEA), you
                  have the following rights regarding your personal data:
                </p>
                <div className='mt-6 grid gap-4 md:grid-cols-2'>
                  <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                    <h3 className='font-semibold text-white'>
                      Right of Access
                    </h3>
                    <p className='mt-2 text-sm text-gray-400'>
                      Request a copy of your personal data we hold.
                    </p>
                  </div>
                  <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                    <h3 className='font-semibold text-white'>
                      Right to Rectification
                    </h3>
                    <p className='mt-2 text-sm text-gray-400'>
                      Request correction of inaccurate personal data.
                    </p>
                  </div>
                  <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                    <h3 className='font-semibold text-white'>
                      Right to Erasure
                    </h3>
                    <p className='mt-2 text-sm text-gray-400'>
                      Request deletion of your personal data ("right to be
                      forgotten").
                    </p>
                  </div>
                  <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                    <h3 className='font-semibold text-white'>
                      Right to Restriction
                    </h3>
                    <p className='mt-2 text-sm text-gray-400'>
                      Request limitation of processing your personal data.
                    </p>
                  </div>
                  <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                    <h3 className='font-semibold text-white'>
                      Right to Data Portability
                    </h3>
                    <p className='mt-2 text-sm text-gray-400'>
                      Receive your data in a structured, machine-readable
                      format.
                    </p>
                  </div>
                  <div className='rounded-lg border border-gray-800 bg-gray-900 p-4'>
                    <h3 className='font-semibold text-white'>
                      Right to Object
                    </h3>
                    <p className='mt-2 text-sm text-gray-400'>
                      Object to processing based on legitimate interests.
                    </p>
                  </div>
                </div>
                <p className='mt-6 text-gray-400'>
                  To exercise any of these rights, please contact us at{' '}
                  <UnstyledLink
                    href='mailto:privacy@domed.gg'
                    className='text-primary-400 hover:text-primary-300'
                  >
                    privacy@domed.gg
                  </UnstyledLink>
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  Data Retention
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  We retain personal data only for as long as necessary to
                  fulfill the purposes for which it was collected:
                </p>
                <ul className='mt-4 space-y-2 text-gray-400'>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    <span>
                      <strong className='text-gray-300'>
                        Organization data:
                      </strong>{' '}
                      Retained for the duration of the business relationship
                      plus any legally required retention period.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    <span>
                      <strong className='text-gray-300'>
                        Demo files (suspected cheaters):
                      </strong>{' '}
                      Retained for investigation purposes and potential appeals,
                      then deleted.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    <span>
                      <strong className='text-gray-300'>
                        Demo files (no suspicion):
                      </strong>{' '}
                      Processed and immediately discarded.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className='text-2xl font-bold text-white'>Data Security</h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction. This includes
                  encryption, access controls, and regular security assessments.
                </p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  International Data Transfers
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  If we transfer personal data outside the EEA, we ensure
                  appropriate safeguards are in place, such as Standard
                  Contractual Clauses approved by the European Commission, to
                  protect your data in accordance with GDPR requirements.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className='text-2xl font-bold text-white'>Contact Us</h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  If you have any questions about this Privacy Policy or wish to
                  exercise your rights, please contact us:
                </p>
                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <p className='text-gray-400'>
                    <strong className='text-white'>Email:</strong>{' '}
                    <UnstyledLink
                      href='mailto:privacy@domed.gg'
                      className='text-primary-400 hover:text-primary-300'
                    >
                      privacy@domed.gg
                    </UnstyledLink>
                  </p>
                  <p className='mt-2 text-gray-400'>
                    <strong className='text-white'>General Inquiries:</strong>{' '}
                    <UnstyledLink
                      href='mailto:contact@domed.gg'
                      className='text-primary-400 hover:text-primary-300'
                    >
                      contact@domed.gg
                    </UnstyledLink>
                  </p>
                </div>
                <p className='mt-6 text-gray-500 text-sm'>
                  You also have the right to lodge a complaint with a
                  supervisory authority if you believe your data protection
                  rights have been violated.
                </p>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  Changes to This Policy
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any significant changes by posting the new
                  Privacy Policy on this page and updating the "Last updated"
                  date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Frame>
  );
}
