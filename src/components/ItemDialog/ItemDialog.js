import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { Select, Container, StyledButton } from './styled';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useInput from '../../hooks/useInput';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="subtitle2" align="center">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ItemDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { states, setters } = useContext(GlobalStateContext);
  const [select, setSelect] = useInput(1)

  const selectItem = states.cart.filter((item) => { return item.id === props.id })
  const product = selectItem[0]

  const sum = () => {
    const sum = props.price * (select ? select : 1)
    setters.setTotalValue(states.totalValue + sum)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    product.quantity = select
    sum()
  };

  return (
    <Container>
      <StyledButton onClick={handleClickOpen}>
        {product && product.quantity ? product.quantity : 1}
      </StyledButton>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Selecione a quantidade desejada
        </DialogTitle>
        <DialogContent dividers>
          <Select onChange={setSelect}  >
            <option value={0}> 0 </option>
            <option value={1}> 1 </option>
            <option value={2}> 2 </option>
            <option value={3}> 3 </option>
            <option value={4}> 4 </option>
            <option value={5}> 5 </option>
            <option value={6}> 6 </option>
            <option value={7}> 7 </option>
            <option value={8}> 8 </option>
            <option value={9}> 9 </option>
            <option value={10}> 10 </option>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Adicionar ao carrinho
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
