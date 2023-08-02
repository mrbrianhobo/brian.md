import { motion } from 'framer-motion';

type Props = {
  children?: React.ReactNode
  text?: string
}

const LinkButton = ({ children, text }: Props) => {
  return (
    <motion.button
      layout
      className="test"
      style={{
        padding: "2px 4px 0px 6px",
        margin: "1px 0px 0px 1px",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(var(--button-shadow)) 2px 2px 0px 0px inset",
      }}
      whileHover={{
        position: "relative",
        left: "0px",
        top: "1px",
        padding: "3px 4px 0px 7px",
        margin: "0px -1px 0px 1px",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(var(--button-shadow)) 3px 3px 0px 0px inset",
      }}
      whileTap={{
        position: "relative",
        left: "2px",
        top: "-2px",
        padding: "0px 4px 0px 4px",
        margin: "3px 3px 0px 0px",
        boxShadow: "none",
      }}
      transition={{ duration: 0 }}
    >
      {children != undefined ? children : text}
    </motion.button>
  )
}

export default LinkButton;
