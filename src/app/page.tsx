import { Shield } from 'lucide-react';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { Frame } from '@/app/components/frame';

const features = [
  {
    title: 'Server-Side Detection',
    description:
      'Non-intrusive server-side anti-cheat that protects game integrity & user privacy.',
  },
  {
    title: 'Real-Time or Post-Game',
    description:
      'Can run on live games via GOTV or analyze recorded demos for post-game detection (or both!).',
  },
  {
    title: 'Configurable Rules',
    description:
      'Can be tuned to be more aggressive in detection (but more false positives).',
  },
  {
    title: 'No Overhead',
    description:
      'Because this runs on our servers, there is no impact on your server performance.',
  },
  {
    title: 'Easy Integration',
    description:
      "It's as simple as putting the IP/Port into the settings & then optionally, hook into our webhooks.",
  },
  {
    title: 'Real-Time Admin Dashboard',
    description:
      'Get real time confidence reports as games are being played to monitor for cheaters.',
  },
];

const stats = [
  { value: '99.7%', label: 'Detection Rate' },
  { value: '<1ms', label: 'Response Time' },
  { value: '50M+', label: 'Players Protected' },
  { value: '24/7', label: 'Monitoring' },
];

export default function HomePage() {
  return (
    <Frame
      navItems={
        <>
          <UnstyledLink
            href='#features'
            className='text-sm text-gray-400 transition-colors hover:text-white'
          >
            Features
          </UnstyledLink>
          <UnstyledLink
            href='#stats'
            className='text-sm text-gray-400 transition-colors hover:text-white'
          >
            Stats
          </UnstyledLink>
          <UnstyledLink
            href='#pricing'
            className='text-sm text-gray-400 transition-colors hover:text-white'
          >
            Pricing
          </UnstyledLink>
        </>
      }
    >
      {/* Hero Section */}
      <section className='relative flex min-h-screen items-center justify-center pt-16'>
        <div className='layout py-24 text-center'>
          <p className='mb-4 text-sm font-medium uppercase tracking-widest text-gray-500'>
            Server Side Anti-Cheat
          </p>
          <h1 className='mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl'>
            Protect your game,
            <br />
            <span className='text-primary-300 opacity-30'>
              and user privacy.
            </span>
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-400'>
            Server-side anti cheat solution designed for CS2 tournaments. <br />
            Low latency, high detection rates, and seamless integration.
          </p>
          <div className='mt-10 flex items-center justify-center gap-4'>
            <ButtonLink href='#contact' variant='primary'>
              Contact us
            </ButtonLink>
            <ButtonLink
              href='#features'
              variant='ghost'
              className='text-gray-300 hover:text-white hover:bg-gray-800'
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id='stats' className='border-y border-gray-800 bg-gray-900'>
        <div className='layout py-16'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className='text-center flex justify-center flex-col items-center gap-4'
              >
                <p className='text-4xl font-bold text-white md:text-5xl'>
                  {stat.value}
                </p>
                <p className='text-sm text-gray-500'>{stat.label}</p>
                <Shield
                  color='white'
                  className='text-center'
                  height='48px'
                  width='48px'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-24'>
        <div className='layout'>
          <div className='text-center'>
            <p className='text-sm font-medium uppercase tracking-widest text-gray-500'>
              Features
            </p>
            <h2 className='mt-2 font-bold text-white md:text-4xl max-md:text-3xl'>
              Built for Privacy & Security
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-gray-400 md:text-base max-md:text-sm'>
              Anti-cheat that respects player privacy & provides maximum
              convenience.
            </p>
          </div>
          <div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='rounded-lg border border-gray-800 bg-gray-900 p-8 transition-all hover:border-gray-700 hover:bg-gray-800/50'
              >
                <h3 className='text-lg font-semibold text-white'>
                  {feature.title}
                </h3>
                <p className='mt-2 text-gray-400'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='border-y border-gray-800 bg-gray-900 py-24'>
        <div className='layout'>
          <div className='text-center'>
            <p className='text-sm font-medium uppercase tracking-widest text-gray-500'>
              Integration
            </p>
            <h2 className='mt-2 text-3xl font-bold text-white md:text-4xl'>
              Simple to Implement
            </h2>
          </div>
          <div className='mt-16 grid gap-12 md:grid-cols-3'>
            <div className='text-center'>
              <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-900'>
                1
              </div>
              <h3 className='mt-6 text-lg font-semibold text-white'>
                Configure your server settings
              </h3>
              <p className='mt-2 text-gray-400'>
                Configure an instance to watch your live game (Or how to feed
                the demos).
              </p>
            </div>
            <div className='text-center'>
              <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-900'>
                2
              </div>
              <h3 className='mt-6 text-lg font-semibold text-white'>
                Configure Rules
              </h3>
              <p className='mt-2 text-gray-400'>
                Set up detection rules and thresholds through our dashboard.
              </p>
            </div>
            <div className='text-center'>
              <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-900'>
                3
              </div>
              <h3 className='mt-6 text-lg font-semibold text-white'>
                Detect & Monitor
              </h3>
              <p className='mt-2 text-gray-400'>
                Start detecting cheaters and monitor game integrity in real-time
                or via post-game analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-24'>
        <div className='layout'>
          <div className='text-center'>
            <p className='text-sm font-medium uppercase tracking-widest text-gray-500'>
              Pricing
            </p>
            <h2 className='mt-2 text-3xl font-bold text-white md:text-4xl'>
              Plans for Every Scale
            </h2>
          </div>
          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            {/* Starter Plan */}
            <div className='rounded-lg border border-gray-800 bg-gray-900 p-8'>
              <h3 className='text-lg font-semibold text-white'>Starter</h3>
              <p className='mt-2 text-gray-400'>Community Organizers</p>
              <p className='mt-6'>
                <span className='text-4xl font-bold text-white'>Free</span>
              </p>
              <ul className='mt-8 space-y-4'>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Up to 2 live games at a time
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Post-game analysis (~10/hr)
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Core detection features
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Community support
                </li>
              </ul>
              <ButtonLink
                href='#contact'
                variant='ghost'
                className='mt-8 w-full justify-center border border-gray-700 text-white hover:bg-gray-800'
              >
                Contact Us
              </ButtonLink>
            </div>

            {/* Pro Plan */}
            <div className='relative rounded-lg border-2 border-white bg-gray-900 p-8'>
              <div className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-medium text-gray-900'>
                Popular
              </div>
              <h3 className='text-lg font-semibold text-white'>Pro</h3>
              <p className='mt-2 text-gray-400'>For small-medium organizers</p>
              <p className='mt-6'>
                <span className='text-4xl font-bold text-white'>$20</span>
                <span className='text-gray-500'>/month</span>
              </p>
              <ul className='mt-8 space-y-4'>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  All community features
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Monitor up to 3 live games at a time
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Up to 20 post-game analyses per hour
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Priority support
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Custom rules
                </li>
              </ul>
              <ButtonLink
                href='#contact'
                variant='light'
                className='mt-8 w-full justify-center'
              >
                Get Started
              </ButtonLink>
            </div>

            {/* Enterprise Plan */}
            <div className='rounded-lg border border-gray-800 bg-gray-900 p-8'>
              <h3 className='text-lg font-semibold text-white'>Enterprise</h3>
              <p className='mt-2 text-gray-400'>
                For large tournament organizers
              </p>
              <p className='mt-6'>
                <span className='text-4xl font-bold text-white'>Custom</span>
              </p>
              <ul className='mt-8 space-y-4'>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Unlimited live games
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Unlimited post-game analyses
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  On-Premise options
                </li>
                <li className='flex items-center text-gray-400'>
                  <span className='mr-3 text-gray-600'>✓</span>
                  Optional dedicated infrastructure
                </li>
              </ul>
              <ButtonLink
                href='#contact'
                variant='ghost'
                className='mt-8 w-full justify-center border border-gray-700 text-white hover:bg-gray-800'
              >
                Contact Us
              </ButtonLink>
            </div>

            {/* Ala Carte Plan */}
            <div className='rounded-lg border border-gray-800 bg-gray-900 p-8 col-span-3 text-center'>
              <h3 className='text-lg font-semibold text-white'>Ala Carte</h3>
              <p className='mt-2 text-gray-400'>
                Want some flexibility? Customize your plan to fit your needs.
              </p>
              <p className='mt-6'>
                <span className='text-4xl font-bold text-white opacity-50'>
                  Coming Soon
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='contact' className='border-t border-gray-800 bg-gray-900'>
        <div className='layout py-24 text-center'>
          <h2 className='text-3xl font-bold text-white md:text-4xl'>
            Ready to protect your game & your players?
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-gray-400'>
            Join the many tournament organizers who trust domed. <br />
            Contact our sales team to get started today.
          </p>
          <div className='mt-10 flex items-center justify-center gap-4'>
            <ButtonLink href='mailto:contact@domed.ac' variant='light'>
              Contact Sales
            </ButtonLink>
          </div>
        </div>
      </section>
    </Frame>
  );
}
