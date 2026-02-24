declare global {
  interface Window {
    PaystackPop: any;
  }
}

interface PaystackOptions {
  email: string;
  amount: number; 
  reference: string;
  onSuccess: () => void;
  onClose: () => void;
}

export const payWithPaystack = ({
  email,
  amount,
  reference,
  onSuccess,
  onClose,
}: PaystackOptions) => {
  const handler = window.PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount,
    currency: "NGN",
    ref: reference,
    callback: function () {
      onSuccess();
    },
    onClose: function () {
      onClose();
    },
  });

  handler.openIframe();
};