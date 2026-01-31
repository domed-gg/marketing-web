import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import { Frame } from '@/app/components/frame';

export default function TermsPage() {
  return (
    <Frame activeUrl='/terms'>
      <section className='pt-32 pb-24'>
        <div className='layout'>
          <div className='max-w-3xl mx-auto'>
            <p className='mb-4 text-sm font-medium uppercase tracking-widest text-gray-500'>
              Legal
            </p>
            <h1 className='text-4xl font-bold text-white md:text-5xl'>
              Terms & Conditions
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
                <h2 className='text-2xl font-bold text-white'>
                  1. Introduction
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  Welcome to domed. These Terms and Conditions ("Terms") govern
                  your access to and use of our server-side anti-cheat services
                  ("Services"). By accessing or using our Services, you agree to
                  be bound by these Terms.
                </p>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  Please read these Terms carefully before using our Services.
                  If you do not agree to these Terms, you may not access or use
                  the Services.
                </p>
              </section>

              {/* Definitions */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  2. Definitions
                </h2>
                <ul className='mt-4 space-y-3 text-gray-400'>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    <span>
                      <strong className='text-gray-300'>
                        "domed," "we," "us," "our"
                      </strong>{' '}
                      refers to domed and its operators.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    <span>
                      <strong className='text-gray-300'>
                        "Organization" or "Organizer"
                      </strong>{' '}
                      refers to tournament organizers, event hosts, or entities
                      that subscribe to our Services.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    <span>
                      <strong className='text-gray-300'>
                        "End User" or "Player"
                      </strong>{' '}
                      refers to individuals participating in games monitored by
                      our Services.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    <span>
                      <strong className='text-gray-300'>
                        "Confidence Score"
                      </strong>{' '}
                      refers to our system's assessment of potential cheating
                      behavior.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    <span>
                      <strong className='text-gray-300'>"Services"</strong>{' '}
                      refers to our server-side anti-cheat detection,
                      monitoring, and analysis tools.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Terms for Organizations */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  3. Terms for Organizations & Organizers
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  By subscribing to and using our Services as an Organization,
                  you acknowledge and agree to the following:
                </p>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    3.1 Detection & Reporting Only
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    You understand and agree that domed does not ban users. Our
                    Services raise confidence scores and communicate findings
                    via webhooks and our applications. The decision to take
                    action based on these scores remains solely with you, the
                    Organization.
                  </p>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    3.2 Limitation of Liability
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    You acknowledge that domed holds no responsibility for the
                    end result or any actions taken after we raise confidence
                    scores. This includes, but is not limited to, any bans,
                    suspensions, or other penalties you may impose on players.
                    We will, however, work with you to refine detection tuning
                    and provide support where needed.
                  </p>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    3.3 Customer Verification
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    We reserve the right to investigate and verify potential
                    customers before granting access to our Services. This
                    verification process is designed to limit potential
                    exploitation of our software and ensure our Services are
                    used for legitimate competitive integrity purposes.
                  </p>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    3.4 Responsible Use
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    You agree to use confidence scores responsibly and in good
                    faith. You shall not use our Services to unfairly target
                    specific players or for any purpose other than maintaining
                    competitive integrity.
                  </p>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    3.5 Player Communication
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    You are responsible for informing players that anti-cheat
                    monitoring is in place for your events. We recommend
                    including this information in your tournament rules or terms
                    of participation.
                  </p>
                </div>
              </section>

              {/* Terms for End Users */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  4. Terms for End Users & Players
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  By participating in games or tournaments that utilize our
                  Services, you acknowledge and agree to the following:
                </p>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    4.1 Server-Side Monitoring
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    You understand and agree that our software monitors ongoing
                    games from a separate server. No code runs on your device or
                    computer, and no code runs on the game server you are
                    playing on. Our monitoring is entirely server-side and
                    non-intrusive to your system.
                  </p>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    4.2 Competitive Integrity
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    You agree to uphold competitive integrity while
                    participating in any games or tournaments monitored by our
                    Services. This includes refraining from using any cheats,
                    hacks, exploits, or other unfair advantages.
                  </p>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    4.3 Privacy-First Approach
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    Our Services are designed with your privacy in mind. We do
                    not install software on your device, access your personal
                    files, or collect data beyond what is necessary for cheat
                    detection. For more information, please review our{' '}
                    <UnstyledLink
                      href='/privacy'
                      className='text-primary-400 hover:text-primary-300'
                    >
                      Privacy Policy
                    </UnstyledLink>
                    .
                  </p>
                </div>
              </section>

              {/* Service Terms */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  5. Service Terms
                </h2>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    5.1 Service Availability
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    We strive to maintain high availability of our Services but
                    do not guarantee uninterrupted access. We may perform
                    maintenance, updates, or experience downtime. We will
                    endeavor to provide notice of planned maintenance where
                    possible.
                  </p>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    5.2 Service Modifications
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    We reserve the right to modify, suspend, or discontinue any
                    aspect of our Services at any time. We will provide
                    reasonable notice of significant changes that may affect
                    your use of the Services.
                  </p>
                </div>

                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <h3 className='text-lg font-semibold text-white'>
                    5.3 Accuracy of Detection
                  </h3>
                  <p className='mt-2 text-gray-400'>
                    While we strive for high accuracy in our detection systems,
                    no anti-cheat solution is perfect. Confidence scores are
                    indicators, not definitive proof. Organizations are
                    responsible for their own verification processes before
                    taking action.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  6. Intellectual Property
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  All intellectual property rights in and to the Services,
                  including but not limited to software, algorithms, designs,
                  and documentation, remain the exclusive property of domed. You
                  are granted a limited, non-exclusive, non-transferable license
                  to use the Services in accordance with these Terms.
                </p>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  You may not reverse engineer, decompile, disassemble, or
                  attempt to derive the source code of our software. You may not
                  copy, modify, or create derivative works based on our
                  Services.
                </p>
              </section>

              {/* Payment Terms */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  7. Payment Terms
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  For Organizations on paid plans:
                </p>
                <ul className='mt-4 space-y-2 text-gray-400'>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    Fees are billed in advance on a monthly or annual basis,
                    depending on your chosen plan.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    All fees are non-refundable except as required by law or as
                    explicitly stated.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    We reserve the right to modify pricing with reasonable
                    notice.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    Failure to pay may result in suspension or termination of
                    Services.
                  </li>
                </ul>
              </section>

              {/* Termination */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  8. Termination
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  Either party may terminate this agreement with written notice.
                  We may terminate or suspend your access immediately, without
                  prior notice, if:
                </p>
                <ul className='mt-4 space-y-2 text-gray-400'>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    You breach any provision of these Terms.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    We reasonably believe you are using the Services for
                    illegitimate purposes.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    Required by law or legal process.
                  </li>
                </ul>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  Upon termination, your right to use the Services will
                  immediately cease. We will delete your data in accordance with
                  our Privacy Policy.
                </p>
              </section>

              {/* Disclaimer of Warranties */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  9. Disclaimer of Warranties
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                  BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  We do not warrant that the Services will be uninterrupted,
                  error-free, or completely secure. We do not warrant the
                  accuracy of confidence scores or detection results.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  10. Limitation of Liability
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DOMED SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                  PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR
                  USE OF THE SERVICES.
                </p>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  Our total liability for any claims arising under these Terms
                  shall not exceed the amount you paid us in the twelve (12)
                  months preceding the claim.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  11. Indemnification
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  You agree to indemnify, defend, and hold harmless domed and
                  its officers, directors, employees, and agents from any
                  claims, damages, losses, or expenses (including reasonable
                  legal fees) arising out of or related to:
                </p>
                <ul className='mt-4 space-y-2 text-gray-400'>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    Your use of the Services.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    Your violation of these Terms.
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-3 text-gray-600'>•</span>
                    Any actions you take based on confidence scores or detection
                    results.
                  </li>
                </ul>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  12. Governing Law & Disputes
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  These Terms shall be governed by and construed in accordance
                  with applicable laws. Any disputes arising from these Terms or
                  your use of the Services shall be resolved through good-faith
                  negotiation. If negotiation fails, disputes shall be submitted
                  to binding arbitration or the appropriate courts of
                  jurisdiction.
                </p>
              </section>

              {/* General Provisions */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  13. General Provisions
                </h2>
                <ul className='mt-4 space-y-4 text-gray-400'>
                  <li>
                    <strong className='text-gray-300'>Entire Agreement:</strong>{' '}
                    These Terms constitute the entire agreement between you and
                    domed regarding the Services and supersede any prior
                    agreements.
                  </li>
                  <li>
                    <strong className='text-gray-300'>Severability:</strong> If
                    any provision of these Terms is found to be unenforceable,
                    the remaining provisions will continue in full force and
                    effect.
                  </li>
                  <li>
                    <strong className='text-gray-300'>Waiver:</strong> Our
                    failure to enforce any right or provision of these Terms
                    shall not be deemed a waiver of such right or provision.
                  </li>
                  <li>
                    <strong className='text-gray-300'>Assignment:</strong> You
                    may not assign or transfer these Terms without our prior
                    written consent. We may assign these Terms without
                    restriction.
                  </li>
                </ul>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  14. Changes to These Terms
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  We reserve the right to modify these Terms at any time. We
                  will provide notice of material changes by posting the updated
                  Terms on our website and updating the "Last updated" date.
                  Your continued use of the Services after such changes
                  constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className='text-2xl font-bold text-white'>
                  15. Contact Us
                </h2>
                <p className='mt-4 text-gray-400 leading-relaxed'>
                  If you have any questions about these Terms, please contact
                  us:
                </p>
                <div className='mt-6 rounded-lg border border-gray-800 bg-gray-900 p-6'>
                  <p className='text-gray-400'>
                    <strong className='text-white'>Email:</strong>{' '}
                    <UnstyledLink
                      href='mailto:legal@domed.ac'
                      className='text-primary-400 hover:text-primary-300'
                    >
                      legal@domed.ac
                    </UnstyledLink>
                  </p>
                  <p className='mt-2 text-gray-400'>
                    <strong className='text-white'>General Inquiries:</strong>{' '}
                    <UnstyledLink
                      href='mailto:contact@domed.ac'
                      className='text-primary-400 hover:text-primary-300'
                    >
                      contact@domed.ac
                    </UnstyledLink>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Frame>
  );
}
