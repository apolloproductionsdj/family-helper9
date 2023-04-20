import "./App.css";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { listLists } from "./graphql/queries";
// import Auth from "@aws-amplify/auth";

import awsExports from "./aws-exports";
import { useEffect, useReducer, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/headers/MainHeader";
import Lists from "./components/List/Lists";
import { Button, Container, Form, Icon, Modal } from "semantic-ui-react";
import { createList } from "./graphql/mutations";

Amplify.configure(awsExports);

const initialState = {
  title: "",
  description: "",
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.value };
    case "TITLE_CHANGED":
      return { ...state, title: action.value };
    default:
      console.log("Default action for: ", action);
      return state;
  }
}
function App({ signOut, user }) {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const [lists, setLists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  async function fetchList() {
    const { data } = await API.graphql(graphqlOperation(listLists));
    setLists(data.listLists.items);
    console.log(data);
  }
  useEffect(() => {
    fetchList();
  }, []);

  const toggleModal = (shouldOpen) => {
    setIsModalOpen(shouldOpen);
  };

  async function saveList() {
    const { title, description } = state;
    const result = await API.graphql(
      graphqlOperation(createList, { input: { title, description } })
    );
    console.log("Save data with results: ", result);
  }

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <button onClick={signOut}>Sign out</button>
        <Button className="floatingButton" onClick={() => toggleModal(true)}>
          <Icon name="plus" className="floatingButton_icon" />
        </Button>
        <div className="App">
          <MainHeader />
          <Lists lists={lists} />
        </div>
      </Container>
      <Modal open={isModalOpen} dimmer="blurring">
        <Modal.Header>Create your lists</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              error={
                true ? false : { content: "Please add a name to your list" }
              }
              label="Title"
              placeholder="My pretty list"
              value={state.title}
              onChange={(e) =>
                dispatch({ type: "TITLE_CHANGED", value: e.target.value })
              }
            ></Form.Input>
            <Form.TextArea
              label="Description"
              placeholder="Things that my pretty list is about"
              value={state.description}
              onChange={(e) =>
                dispatch({ type: "DESCRIPTION_CHANGED", value: e.target.value })
              }
            ></Form.TextArea>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => toggleModal(false)}>
            Cancel
          </Button>
          <Button positive onClick={saveList}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default withAuthenticator(App);
