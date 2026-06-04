import { useState } from 'react';

interface UseModalReturn<T> {
  isOpen: boolean;
  data: T | null;
  open: (item: T) => void;
  close: () => void;
}

export function useModal<T>(): UseModalReturn<T> {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const open = (item: T) => {
    setData(item);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setIsOpen(false);
    setData(null);
    document.body.style.overflow = '';
  };

  return { isOpen, data, open, close };
}

export function useToast() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const show = (msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  };

  return { message, visible, show };
}
