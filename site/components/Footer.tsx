import React from 'react'
import Icon from '@components/Icon'
import DribbbleIcon from '@components/Icons/Dribbble'
import GithubIcon from '@components/Icons/Github'
import LinkedinIcon from '@components/Icons/Linkedin'
import MessageIcon from '@components/Icons/Message'
import TwitterIcon from '@components/Icons/Twitter'
import Logo from '@components/Logo'
import Text from '@components/Text'
import { social as socialLinks } from '@constants/links'

const Footer: React.FC = (): React.ReactElement => (
  <footer className="tw-bg-blue-500 tw-text-white">
    <div className="tw-text-center lg:tw-w-1/2 tw-p-5 lg:tw-p-32 tw-mx-auto">
      <div className="tw-mb-5 tw-inline-block">
        <Logo variant="white" />
      </div>

      <Text variant="h6" className="tw-mb-10 tw-text-gray-400">
        Anything is possible, Don&apos;t limit yourself on the things that you
        can do.
      </Text>

      <div className="tw-mb-10">
        <a
          href={socialLinks.github}
          title="My Github profile"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-mx-4 lg:tw-mx-5"
        >
          <Icon variant="custom">
            <GithubIcon className="tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-rounded-full tw-p-2" />
          </Icon>
        </a>

        <a
          href={socialLinks.dribbble}
          title="My Dribbble profile"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-mx-4 lg:tw-mx-5"
        >
          <Icon variant="custom">
            <DribbbleIcon className="tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-rounded-full tw-p-2" />
          </Icon>
        </a>

        <a
          href={socialLinks.linkedin}
          title="My Linkedin profile"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-mx-4 lg:tw-mx-5"
        >
          <Icon variant="custom">
            <LinkedinIcon className="tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-rounded-full tw-p-2" />
          </Icon>
        </a>

        <a
          href={socialLinks.twitter}
          title="My Twitter profile"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-mx-4 lg:tw-mx-5"
        >
          <Icon variant="custom">
            <TwitterIcon className="tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-rounded-full tw-p-2" />
          </Icon>
        </a>

        <a
          href={`mailto:${socialLinks.email}`}
          title="Send me an Email"
          className="tw-mx-4 lg:tw-mx-5"
        >
          <Icon variant="custom">
            <MessageIcon className="tw-border-2 tw-border-blue-400 hover:tw-border-white hover:tw-border-none hover:tw-text-blue-500 hover:tw-bg-white tw-rounded-full tw-p-2" />
          </Icon>
        </a>
      </div>

      <Text variant="sub" className="tw-mb-5 tw-text-gray-400">
        Handcrafted with
        <svg
          className="tw-fill-current tw-text-red-500 tw-inline-block tw-mx-1 tw-h-5 tw-w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0  c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z" />
        </svg>
        by me &copy; {new Date().getFullYear()}
      </Text>

      <span className="tw-w-full tw-flex tw-justify-center tw-items-center">
        <Text variant="sub" className="tw-text-gray-400 tw-mr-1">
          Made with
        </Text>

        <a
          href="https://tailwindcss.com"
          title="Tailwind CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="tw-fill-current tw-text-gray-400 tw-h-10"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Tailwind CSS</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"
            ></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
)

export default Footer
