import * as React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { Backdrop, DisabledBtn, PrimaryBtnOutline, SuccessBtn } from "../../styles/global";
import { ModalFrame, ModalTitle } from "./style";

import "../../styles/global.css";

export interface ModalPropsModel {
  content: React.ReactElement;
  setState(state: boolean): void;
  state: boolean;
  title: string;
  cancelText: string;
  okText: string;
  canProceed?: boolean | false;
}

export const Modal = (props: ModalPropsModel) => {
  const { title, content, setState, state, cancelText, okText, canProceed } = props;
  return (
    <Backdrop className="d-flex align-items-center justify-content-center">
      <ModalFrame className="d-flex flex-column justify-content-between">
        <ModalTitle className="d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <button
            className="btn rounded-circle m-0 p-0 d-32"
            onClick={() => {
              setState(!state);
            }}
          >
            <RiCloseCircleFill className="d-32" style={{ color: "white" }} />
          </button>
        </ModalTitle>
        {content}
        <div className="d-flex justify-content-end col-12">
          <PrimaryBtnOutline
            onClick={() => {
              setState(!state);
            }}
          >
            {cancelText}
          </PrimaryBtnOutline>
          {canProceed ? (<SuccessBtn className="ms-3">{okText}</SuccessBtn>) :(<DisabledBtn disabled={true}>{okText}</DisabledBtn>)}
        </div>
      </ModalFrame>
    </Backdrop>
  );
};

Modal.defaultProps = {
  title: "Modal title",
  cancelText: "Cancelar",
  okText: "Ok",
};
