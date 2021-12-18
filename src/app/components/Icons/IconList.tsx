import React from 'react'
export const IconArray = [
  FingerprintIcon,
  HeartIcon,
  LightningBoltIcon,
  MusicNoteIcon,
  StarIcon,
  CodeIcon,
]

export function FingerprintIcon(
  props?: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function HeartIcon(props?: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function LightningBoltIcon(
  props?: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function MusicNoteIcon(
  props?: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
    </svg>
  )
}

export function StarIcon(props?: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  )
}

export function CodeIcon(props?: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function PlusIcon(props?: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function ArrowDownIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function TrashIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  )
}

export function ChordFolderIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.6592 0.447876C13.1333 0.154907 13.6797 -0.000182944 14.237 1.61948e-07H14.2375H19C19.7957 1.61948e-07 20.5587 0.316071 21.1213 0.878693C21.6839 1.44128 22 2.20435 22 3V17C22 17.7957 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7957 20 19 20H3C2.20435 20 1.44128 19.6839 0.878677 19.1213C0.316071 18.5587 0 17.7957 0 17V7C0 6.20435 0.316071 5.44128 0.878677 4.87869C1.44128 4.31607 2.20435 4 3 4H9.76396C9.94974 4 10.1318 3.94824 10.2898 3.85059C10.4478 3.7529 10.5754 3.61316 10.6585 3.44699L10.6586 3.44678L11.5525 1.659L11.5526 1.65878C11.8018 1.16019 12.185 0.740875 12.6592 0.447876ZM14.2365 2C14.0507 1.99991 13.8685 2.05161 13.7104 2.14929C13.5523 2.24698 13.4246 2.38678 13.3415 2.55301L13.3414 2.55322L12.4475 4.341C12.1984 4.83948 11.8154 5.25873 11.3415 5.55173C10.8675 5.84476 10.3213 5.99997 9.76401 6H3C2.73479 6 2.48044 6.10535 2.29289 6.29291C2.10536 6.48044 2 6.73477 2 7V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48044 17.8947 2.73479 18 3 18H19C19.2652 18 19.5196 17.8947 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V3C20 2.73477 19.8946 2.48044 19.7071 2.29291C19.5196 2.10535 19.2652 2 19 2H14.237H14.2365ZM9.25105 7.22501C8.69725 7.35999 8.18959 7.58499 7.77423 7.94501C6.85121 8.75501 6.85121 10.015 7.26657 11.05C7.72807 12.175 8.23573 13.21 8.92799 14.155C9.03453 14.2908 9.14107 14.4366 9.24915 14.5845C9.74976 15.2695 10.2836 16 11.0048 16C11.7557 16 12.3036 15.208 12.7933 14.5C12.8754 14.3812 12.9559 14.2649 13.0354 14.155C13.7277 13.165 14.2354 12.175 14.6969 11.05C15.1584 10.015 15.1584 8.75501 14.2354 7.94501C13.82 7.58499 13.3123 7.35999 12.8047 7.22501C12.6662 7.17999 11.7432 7 11.0971 7H11.0048H10.9125C10.2664 7 9.38951 7.17999 9.25105 7.22501Z"
      />
    </svg>
  )
}


