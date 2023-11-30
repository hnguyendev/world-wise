import { FC, useCallback, useEffect, useState } from "react";
import { MdOutlineClear } from "react-icons/md";

import useModal from "../hooks/useModal";
import useCity from "../hooks/useCity";
import useDeleteCity from "../hooks/useDeleteCity";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

interface ModalProps {
  visible?: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);

  const { cityId } = useModal();
  const { data: city } = useCity(cityId as string);
  const { isPending, deleteCity } = useDeleteCity();

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleDelete = useCallback(() => {
    deleteCity(city?.id);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, deleteCity, city?.id]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black bg-opacity-80 transition duration-300 flex items-center justify-center overflow-x-hidden">
      <div className="bg-zinc-800 w-full max-w-xl mx-auto rounded-md relative">
        <div
          className={`
          ${isVisible ? "scale-100" : "scale-0"} 
          transform duration-300 relative flex-auto bg-zinc-800 drop-shadow-lg`}
        >
          <div className="relative h-80 px-4 p-5">
            <div className="space-y-8">
              <p className="text-xl">
                Are you sure you want to delete this travel ?
              </p>
              <div className="flex items-center justify-center gap-4">
                <h6 className="uppercase text-xs font-medium text-neutral-300">
                  City name
                </h6>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-3xl">{city?.emoji}</span>{" "}
                  {city?.cityName}
                </h3>
              </div>
              <div className="flex items-center justify-center gap-4">
                <h6 className="uppercase text-xs font-medium text-neutral-300">
                  You went to {city?.cityName} on
                </h6>
                <p>{formatDate(city?.date || null)}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-black h-6 w-6 rounded-full flex items-center justify-center"
            >
              <MdOutlineClear size={20} />
            </button>
          </div>
          <div className="absolute bottom-3 w-full flex items-center justify-center gap-4">
            <button
              disabled={isPending}
              onClick={handleDelete}
              className="bg-red-500 w-20 px-4 py-2 rounded-md border-white border-2 flex items-center justify-center"
            >
              DELETE
            </button>
            <button
              onClick={handleClose}
              className="w-20 px-4 py-2 rounded-md border-white border-2 flex items-center justify-center"
            >
              CANCLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
