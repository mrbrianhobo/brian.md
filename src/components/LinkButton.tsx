import { motion } from 'framer-motion';

type Props = {
  onClick?: () => void
  text: string
}

const LinkButton = ({ onClick, text }: Props) => {
  return (
    <motion.button
      layout
      className="relative rounded bg-button font-code font-medium text-accent no-underline whitespace-nowrap select-none"
      onClick={onClick}
      style={{
        left: "0px",
        top: "0px",
        padding: "2px 4px 0px 6px",
        margin: "1px 0px 0px 1px",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(var(--button-shadow)) 2px 2px 0px 0px inset",
      }}
      whileHover={{
        left: "0px",
        top: "1px",
        padding: "3px 4px 0px 7px",
        margin: "0px -1px 0px 1px",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(var(--button-shadow)) 3px 3px 0px 0px inset",
      }}
      whileTap={{
        left: "1px",
        top: "-2px",
        padding: "0px 4px 0px 4px",
        margin: "3px 3px 0px 0px",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(var(--button-shadow)) 0px 0px 0px 0px inset",
      }}
      transition={{ duration: 0 }}
    >
      {text}
    </motion.button>
  )
}

export default LinkButton;
