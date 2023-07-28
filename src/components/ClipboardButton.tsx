import toast, { Toaster } from 'react-hot-toast';

const ClipboardButton: React.FC<{
  text: string;
}> = ({ text }) => {
  const copyToClipboardAndNotify = async () => {
    await navigator.clipboard.writeText(text);
    toast.success('COPIED TO CLIPBOARD', {
      duration: 100000,
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
    <span>
      <button onClick={copyToClipboardAndNotify}>{text.toUpperCase()}</button>
      <Toaster />
    </span>
  )
}

export default ClipboardButton;
