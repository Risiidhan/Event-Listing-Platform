import { Modal } from '@mui/material'
import React from 'react'
import FallBackImgComponent from './FallBackImgComponent';
import { FaCalendarDays, FaCircleXmark, FaLocationDot } from 'react-icons/fa6';
import TimerComponent from './TimerComponent';

type Props = {
    open: boolean;
    handleClose: () => void;
    event: any
};
const ModalComponent = ({ open, handleClose, event }: Props) => {
    function setIsModalOpen(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ border: "none" }}
        >
            <div className="bg-white outline-0 p-4 border-none rounded-md m-auto mt-40 w-[90%] sm:w-1/2 xl:w-[30%] text-center">
                <div className=" flex flex-col relative rounded-sm overflow-hidden transition ">
                    <FallBackImgComponent
                        width={800}
                        height={800}
                        src={event?.image_url}
                        alt={event?.title}
                        className="w-full h-auto rounded-lg aspect-[6/4] object-cover object-center"
                    />
                    <div className="py-[12px] flex flex-col gap-[6px] flex-1">
                        <h2 className="text-[18px] text-left font-semibold text-gray-600">{event?.title}</h2>
                        <p className="text-[14px] flex gap-1 items-center text-gray-600">
                            <FaLocationDot />
                            {event?.location}
                        </p>

                        <p className="text-sm flex gap-1 items-center text-gray-600">
                            <FaCalendarDays />
                            {new Date(event?.starts_at).toLocaleDateString()} -{" "}
                            {new Date(event?.expires_at).toLocaleDateString()}
                        </p>

                        <p className="text-gray-700 text-left text-[14px] flex-1">{event?.description}</p>
                        <div className="text-gray-700"><TimerComponent event={event} /></div>
                        <div className="text-sm absolute top-[12px] left-[12px] bg-white text-gray-700 border-1 rounded-full w-fit px-2 py-[2px] font-medium">
                            {event?.type}
                        </div>
                          <div onClick={handleClose} className="text-[22px] cursor-pointer absolute top-[12px] right-[3px]  text-gray-700  w-fit px-2 py-[2px] font-medium">
                            <FaCircleXmark />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalComponent