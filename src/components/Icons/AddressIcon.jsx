import React from 'react'

function AddressIcon(props) {
  return (
    <svg
      {...props}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        d="M448,64h-48V16c0-8.832-7.168-16-16-16H96C69.536,0,48,21.536,48,48v400c0,35.296,28.704,64,64,64h336c8.832,0,16-7.168,16-16V80C464,71.168,456.832,64,448,64z M267.904,442.688c-3.04,3.36-7.36,5.312-11.904,5.312s-8.864-1.952-11.904-5.312C233.856,431.264,144,329.472,144,272c0-61.76,50.24-112,112-112s112,50.24,112,112C368,329.472,278.144,431.264,267.904,442.688z M368,64H96c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h272V64z"
        fill="currentColor"
      />
      <circle cx="256" cy="272" r="48" fill="currentColor" />
    </svg>
  )
}

export default AddressIcon
