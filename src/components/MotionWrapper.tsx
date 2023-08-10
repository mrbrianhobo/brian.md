import { forwardRef } from 'react'
import { motion } from 'framer-motion'

type Props = {
  className?: string
  children?: React.ReactNode
};

const Div = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div className={props.className} ref={ref}>
      {props.children}
    </div>
  )
})

const Span = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  return (
    <span className={props.className} ref={ref}>
      {props.children}
    </span>
  )
})

export const MotionDiv = motion(Div);
export const MotionSpan = motion(Span);
