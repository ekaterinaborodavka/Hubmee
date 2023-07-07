import { Box, Modal, Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #f3f3f3",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface IDeleteModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => void;
}

export const DeleteModal = ({ open, setOpen, onDelete }: IDeleteModal) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={{ ...style, width: 300 }}>
          <p id='child-modal-description'>Are you sure you want to delete it?</p>
          <Button sx={{ color: "#5dcb42" }} onClick={onDelete}>
            Yes
          </Button>
          <Button sx={{ color: "#F33A3D" }} onClick={handleClose}>
            No
          </Button>
        </Box>
      </Modal>
    </>
  );
};
