import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItemCategory } from "../actions/itemActionsCategory";
import PropTypes from "prop-types";

class ItemCategoryModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      name: this.state.name,
    };

    // Add item via addItem action
    this.props.addItemCategory(newCategory);

    //Close Modal
    this.toggle();
  };
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Add Category
          </Button>
        ) : (
          <h4 className="mb-3 ml-4"> Please log in to manage category</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Add to Category List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  type="text"
                  name="name"
                  id="category"
                  placeholder="Add Category"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Category
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.category,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { addItemCategory })(ItemCategoryModal);
