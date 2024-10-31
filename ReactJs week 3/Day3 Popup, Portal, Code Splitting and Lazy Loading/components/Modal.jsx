import { createPortal } from "react-dom";

export default function Modal({header, footer,children, isOpen, setIsOpen}) {
  return (
      createPortal(
        <div onClick={() => setIsOpen(false)} className= {`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${isOpen ? '' : 'hidden'}`} >
          <div className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
            {header}
            {children}
            {footer}
          </div>
        </div>,
        document.getElementById('portal')
      )
  )
}