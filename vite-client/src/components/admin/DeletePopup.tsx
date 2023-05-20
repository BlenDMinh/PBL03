import { X } from "lucide-react";
import Popup from "reactjs-popup";

function DeletePopup(props: { onYes: () => void; onNo: () => void }) {
  return (
    <Popup
      trigger={
        <button className="bg-white shadow rounded justify-center items-center flex w-12 h-12 hover:bg-red-500 hover:text-white">
          <X />
        </button>
      }
      modal
      nested
    >
      {(close) => {
        return (
          <div className="w-screen h-screen bg-slate-900 bg-opacity-50 flex items-center justify-center">
            <div className="modal rounded bg-white w-2/4 h-1/4 p-5">
              <button
                className="bg-white shadow rounded justify-center items-center flex w-12 h-12 hover:bg-red-500 hover:text-white"
                onClick={close}
              >
                <X />
              </button>
              <div className="flex justify-center text-3xl">
                <span>Bạn thật sự muốn xoá không?</span>
              </div>
              <div className="actions flex justify-between m-10 mx-32">
                <button
                  className="bg-white shadow rounded justify-center items-center flex w-24 h-12 hover:bg-green-500 hover:text-white"
                  onClick={() => {
                    props.onYes();
                    close();
                  }}
                >
                  Có
                </button>
                <button
                  className="bg-white shadow rounded justify-center items-center flex w-24 h-12 hover:bg-red-500 hover:text-white"
                  onClick={() => {
                    props.onNo();
                    close();
                  }}
                >
                  Không
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}

export default DeletePopup;
