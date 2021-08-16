/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Icon, Button, Dropdown } from "react-materialize";
import DeleteConfirmModal from "../confirmation/DeleteConfirmModal";
import * as actions from "../../actions";
import { connect } from "react-redux";

class Menu extends Component {

  constructor(props){
    super(props)
    this.setState({type: this.props.itemType , 
                    itemId: this.props.itemId,
    })
  }

  deleteItem(id) {
    this.props.deleteList(id);
  }

  render() {
    return (
      <Dropdown
        id={this.props.itemId}
        options={{
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        }}
        trigger={
          <Button node="button">
            <Icon tiny>more_vert</Icon>
          </Button>
        }
        
      >
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
         <a
         onClick={async() =>{
           if (this.props.itemType === 'Products'){
          await this.props.getItem(this.props.itemId);
         this.props.handler();
           }
           else if (this.props.itemType === 'Shopping'){
            await this.props.getShopItem(this.props.itemId);
            this.props.handler();
           }
           else if (this.props.itemType === 'Supermarkets') {
            await this.props.getStoreItem(this.props.itemId);
            this.props.handler();
           }
          }}
        >
          <Icon>more</Icon>
          Ditails
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a>
          <Icon>edit</Icon>
          Edit
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a
          onClick={() => {
            this.deleteItem(this.props.itemId);
          }}
        >
          <Icon>delete</Icon>
          Delete
        </a>
        
      </Dropdown>
    );
  }
}

const mapStateToProps = (state => {
  return {
  
  item:state.product.item,
  shoppingList: state.shoppingList,
  }

})

const mapDispatchToProps = (dispatch) => ({
  deleteList: (id) => dispatch(actions.deleteShoppingList(id)),
  getItem:(id)=> dispatch(actions.getProductInstance(id)),
  getShopItem:(id)=> dispatch(actions.getShoppingList(id)),
  getStoreItem:(id) => dispatch(actions.getSupermarket(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
