import { useEffect, useRef, useState } from "react";
import {
  ModalWrapper,
  ModalContent,
  ModalText,
  ModalButton,
} from "./Modal.styles";

interface IModalProps {
  activeModal: boolean;
}

export default function Modal({ activeModal }: Readonly<IModalProps>) {
  const [active, setActive] = useState(false);

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeModal === true) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("aria-hidden", "true");
      closeBtnRef.current?.focus();
      modalRef.current?.setAttribute("aria-hidden", "false");
      setActive(true);
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [activeModal]);

  const disableModal = () => {
    document.body.style.overflow = "visible";
    document.body.setAttribute("aria-hidden", "false");
    modalRef.current?.setAttribute("aria-hidden", "true");
    setActive(false);
  };

  return (
    <ModalWrapper ref={modalRef} $active={active}>
      <ModalContent>
        <ModalText>Employee created.</ModalText>
        <ModalButton ref={closeBtnRef} onClick={disableModal}>
          Close
        </ModalButton>
      </ModalContent>
    </ModalWrapper>
  );
}
