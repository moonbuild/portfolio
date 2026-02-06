import { X } from 'lucide-react';
import styles from './Modal.module.css';
import { useEffect } from 'react';
import Portal from '../Portal/Portal';
import { useOverlay } from '@/context/OverlayContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const { showOverlay, hideOverlay } = useOverlay();

  useEffect(() => {
    if (isOpen) {
      showOverlay();
    } else {
      hideOverlay();
    }
    return () => hideOverlay();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <span className={styles.title}>{title}</span>
          <button onClick={onClose} className={styles.headerCloseBtn}>
            <X fontSize={'8px'} />
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
