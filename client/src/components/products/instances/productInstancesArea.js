import React, { Component } from "react";
import { Button, Container, Row } from "react-materialize";
import NewProductModal from "./modal/NewShoppingListItem";
// import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     paper: {
//         marginRight: theme.spacing(2),
//     },
// }));

// function ProductInstance(props) {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const anchorRef = React.useRef(null);
//     const handleToggle = () => {
//         setOpen((prevOpen) => !prevOpen);
//     };

//     const handleClose = (event) => {
//         if (anchorRef.current && anchorRef.current.contains(event.target)) {
//             return;
//         }

//         setOpen(false);
//     };
//     function handleListKeyDown(event) {
//         if (event.key === 'Tab') {
//             event.preventDefault();
//             setOpen(false);
//         }
//     }

//     const prevOpen = React.useRef(open);
//     React.useEffect(() => {
//         if (prevOpen.current === true && open === false) {
//             anchorRef.current.focus();
//         }

//         prevOpen.current = open;
//     }, [open]);

//     return (
//         <div>

//             <Row>
//                 <Button onClick={() =>
//                     props.handler()
//                 }>
//                     close
//                 </Button>

//                 <Button
//                     ref={anchorRef}
//                     aria-controls={open ? 'menu-list-grow' : undefined}
//                     aria-haspopup="true"
//                     onClick={handleToggle}
//                 >
//                     Add to shopping list
//                 </Button>

//                 <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//                     {({ TransitionProps, placement }) => (
//                         <Grow
//                             {...TransitionProps}
//                             style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                         >
//                             <Paper>
//                                 <ClickAwayListener onClickAway={handleClose}>
//                                     <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//                                         <MenuItem onClick={handleClose}>Profile</MenuItem>
//                                         <MenuItem onClick={handleClose}>My account</MenuItem>
//                                         <MenuItem onClick={handleClose}>Logout</MenuItem>
//                                     </MenuList>
//                                 </ClickAwayListener>
//                             </Paper>
//                         </Grow>
//                     )}
//                 </Popper>


//             </Row>

//             <Row>
//                 <Container className="content-area">
//                     {
//                         props.item.map(instance => {
//                             return (
//                                 <div>
//                                     <p>priceBeforeTax {instance.priceBeforeTax}</p>
//                                     <p>priceAfterTax {instance.priceAfterTax}</p>
//                                     <p>unitOfMeasure {instance.unitOfMeasure}</p>
//                                     <p>measurement {instance.measurement}</p>
//                                 </div>
//                             )

//                         })
//                     }
//                 </Container>
//             </Row>
//         </div>
//     )
// }

class ProductInstance extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <Row>
                    <Button onClick={() =>
                        this.props.handler()
                    }>
                        close
                    </Button>

                    <Button
                        className="modal-trigger"
                        href="#newProductModal"
                        node="button"
                    >
                        Add to shopping list
                    </Button>
                    {/* in this step we will send only one item then we can open the modal based on each instance */}
                    <NewProductModal item={this.props.item[0]} />

                </Row>

                <Row>
                    <Container className="content-area">
                        {
                            this.props.item.map(instance => {
                                return (
                                    <div>
                                        <p>priceBeforeTax {instance.priceBeforeTax}</p>
                                        <p>priceAfterTax {instance.priceAfterTax}</p>
                                        <p>unitOfMeasure {instance.unitOfMeasure}</p>
                                        <p>measurement {instance.measurement}</p>
                                    </div>
                                )

                            })
                        }
                    </Container>
                </Row>
            </div>
        )
    }
}

export default ProductInstance;
