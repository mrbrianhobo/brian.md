import toast from 'react-hot-toast';
import LinkButton from './LinkButton';

type Props = {
  text: string
}

const ClipboardButton = ({ text }: Props) => {
  const copyToClipboardAndNotify = async () => {
    await navigator.clipboard.writeText(text);
    toast.success('COPIED TO CLIPBOARD', {
      position: 'bottom-center',
      className: "dark:shadow-toast font-code font-normal",
      style: {
        backgroundColor: 'rgb(var(--toast))',
        color: 'rgb(var(--body))',
      },
      iconTheme: {
        primary: 'rgb(var(--color-accent))',
        secondary: 'rgb(255, 255, 255)',
      },
    });
  }

  return (
    <LinkButton
      onClick={copyToClipboardAndNotify}
      text={text.toUpperCase()}
    />
  )
}

export default ClipboardButton;
