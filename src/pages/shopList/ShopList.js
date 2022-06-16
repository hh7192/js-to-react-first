import React, {Component} from "react";
import "./ShopList.css";
import Navbar from "../../generalComponents/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";

class ShopList extends Component {
  constructor() {
    document.title = "HamidreZa | Shop List";
    super();
    this.state = {
      appName: "Shop List",
      itemName: "",
      itemPrice: "",
      itemQuantity: "",
      itemUnit: "Number",
      errorMessage: "",
      shoplist: [
        // {
        //   name: "Meat",
        //   price: 200,
        //   quantity: 2,
        //   unit: "Kilogram",
        //   isBought: false,
        // },
        // {
        //   name: "Ciggrette",
        //   price: 25,
        //   quantity: 2,
        //   unit: "Box",
        //   isBought: false,
        // },
        // {
        //   name: "Bread",
        //   price: 2,
        //   quantity: 20,
        //   unit: "Number",
        //   isBought: true,
        // },
      ],
    };
  }

  addItem = (e) => {
    e.preventDefault();
    const shoplistClone = [...this.state.shoplist];
    let errorMessageClone = this.state.errorMessage;
    if (
      this.state.itemName !== "" &&
      this.state.itemName !== "" &&
      this.state.itemPrice !== "" &&
      this.state.itemUnit !== "Number"
    ) {
      shoplistClone.push({
        name: this.state.itemName,
        price: this.state.itemPrice,
        quantity: this.state.itemQuantity,
        unit: this.state.itemUnit,
        isBought: false,
      });
    } else {
      errorMessageClone = "PLEASE ENTER ALL VALUES";
      setTimeout(() => this.setState({errorMessage: ""}), 3000);
    }
    this.setState({
      shoplist: shoplistClone,
      errorMessage: errorMessageClone,
      itemName: "",
      itemPrice: "",
      itemQuantity: "",
      itemUnit: "Number",
    });
  };

  deleteItem = (i) => {
    const shoplistClone = [...this.state.shoplist];
    let errorMessageClone = this.state.errorMessage;
    if (shoplistClone[i].isBought) {
      shoplistClone.splice(i, 1);
    } else {
      errorMessageClone = "ONLY BOUGHT ITEMS CAN BE DELETED!";
    }
    setTimeout(() => this.setState({errorMessage: ""}), 3000);
    this.setState({
      shoplist: shoplistClone,
      errorMessage: errorMessageClone,
      itemName: "",
      itemPrice: "",
      itemQuantity: "",
      itemUnit: "Number",
    });
  };

  boughtItem = (i) => {
    const shoplistClone = [...this.state.shoplist];
    shoplistClone[i].isBought = !shoplistClone[i].isBought;
    this.setState({
      shoplist: shoplistClone,
      itemName: "",
      itemPrice: "",
      itemQuantity: "",
      itemUnit: "Number",
    });
  };

  updateParentState = (obj) => {
    this.setState(obj);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <Navbar name={this.state.appName} />
            <Form
              updateParentState={this.updateParentState}
              itemName={this.state.itemName}
              itemPrice={this.state.itemPrice}
              itemQuantity={this.state.itemQuantity}
              itemUnit={this.state.itemUnit}
              errorMessage={this.state.errorMessage}
              addItem={this.addItem}
            />
            <Table
              shoplist={this.state.shoplist}
              boughtItem={this.boughtItem}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopList;
