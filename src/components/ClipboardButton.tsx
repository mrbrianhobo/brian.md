import toast, { Toaster } from 'react-hot-toast';

const ClipboardButton: React.FC<{
  text: string;
}> = ({ text }) => {
  const copyToClipboardAndNotify = async () => {
    await navigator.clipboard.writeText(text);
    toast.success('COPIED TO CLIPBOARD', {
      position: 'bottom-center',
      // className: "bg-toast dark:shadow-toast text-body font-code font-normal",
      iconTheme: {
        primary: 'rgb(var(--color-accent))',
        secondary: 'rgb(255, 255, 255)',
      },
    });
  }

  return (
    <span>
      <button onClick={copyToClipboardAndNotify}>{text.toUpperCase()}</button>
      <Toaster toastOptions={{
        className: "bg-toast dark:shadow-toast text-body font-code font-normal",
      }} />
    </span>
  )
}

export default ClipboardButton;
