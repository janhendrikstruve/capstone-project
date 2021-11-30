import React from 'react'
import { IconArray } from '../../Icons/IconArray'

export default function RandomIcon(
  props?: React.SVGProps<SVGSVGElement>,
  id: number
): JSX.Element {
  const randomNumber = Math.floor(Math.random() * IconArray.length)
  const iconIndex = Array(6).fill(null)

  // return IconArray.map((Icon, index) => {
  //   if (index === randomNumber) {
  //     iconIndex[id] = index
  //     return <Icon {...props}></Icon>
  //   } else return <div></div>
  // })

  return IconArray.filter((_, index) => index === randomNumber).map((Icon) => (
    <Icon {...props} />
  ))
}
