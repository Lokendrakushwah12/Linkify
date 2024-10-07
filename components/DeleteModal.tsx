import React from "react";
import { Button } from "./ui/button";
import AnimationContainer from "./animation-container";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full inset-0 top-0 flex items-center justify-center z-50">
      <div
        className="bg-black opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
      <AnimationContainer>
        <div className="bg-primary rounded-lg shadow-lg p-4 z-10">
          <h3 className="text-lg font-semibold">Confirm Deletion</h3>
          <p>Are you sure you want to delete this URL?</p>
          <div className="flex justify-end mt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="mr-2 text-primary"
            >
              Cancel
            </Button>
            <Button onClick={onConfirm} variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default DeleteModal;
