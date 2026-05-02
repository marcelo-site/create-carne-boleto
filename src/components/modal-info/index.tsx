import { BsInfoCircle } from "react-icons/bs";

export interface IModalInfo {
    message: string;
    show: boolean
    handleModal: () => void
}
export const ModalInfo = ({ message, show, handleModal }: IModalInfo) => {
    return (
        <div
            onClick={handleModal}
            style={{ display: show ? "flex" : "none" }}
            className="modal flex-center"
        >
            <div style={{ position: "relative" }}>
                <div className="flex-center exit">
                    X
                </div>
                <div className="modal-content flex flex-center"><BsInfoCircle /> {message}</div>
            </div>
        </div>
    )
}