const Logo = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <g clip-path="url(#clip0)">
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 32C28.8 32 32 28.8 32 16C32 3.2 28.8 0 16 0C3.2 0 0 3.2 0 16C0 28.8 3.2 32 16 32Z"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect width="32" height="32" rx="2" fill="url(#paint0_radial)" />
        <path
          d="M14.3879 6L10 6.74003V26H14.3879V18.7135C14.3879 16.5693 15.5326 15.241 16.4865 15.241C17.345 15.241 17.593 16.0949 17.593 17.3852V26H22V16.759C22 13.8368 20.8935 11.9582 18.0127 11.9582C16.6582 11.9582 15.3418 12.3378 14.3879 13.1916V6Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <radialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(58.515) scale(30.6352)"
      >
        <stop stop-color="#FF8C37" />
        <stop offset="1" stop-color="#EC3750" />
      </radialGradient>
      <clipPath id="clip0">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(32) rotate(90)"
        />
      </clipPath>
    </defs>
  </svg>
)

export default Logo
