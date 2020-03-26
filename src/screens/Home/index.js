import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addNote, removeNote, updateNote } from '../../actions/noteAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
    };
  }

  onPressAdd() {
    this.props.dispatchAddNote(this.state.value);
  }

  onRemove(index) {
    this.props.dispatchRemoveNote({ name: '3', index });
  }

  onUpdate(name, index) {
    this.props.dispatchUpdateNote({ name: this.state.name, index });
  }
  render() {
    console.log('zzzzzz', this.props.data);
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text> {this.state.value} </Text>
        {this.props.data.map((e, index) => {
          return (
            <View style={{ flexDirection: 'row' }} key={index}>
              <Text style={{ marginRight: 10 }}>{e}</Text>
              <TouchableOpacity onPress={() => this.onRemove(index)}>
                <Text>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.onUpdate(e, index)}>
                <Text>Update</Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <TextInput
          value={this.state.value}
          onChangeText={(text) => this.setState({ value: text })}
          style={{ width: '90%', height: 50, borderWidth: 1 }}
        />
        <TextInput
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
          style={{ width: '90%', height: 50, borderWidth: 1, marginTop: 10, borderColor: 'red' }}
          placeholder="type your update name"
        />
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: 'green',
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}
          onPress={() => this.onPressAdd()}
        >
          <Text>add note</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// lấy state từ store redux
function mapStateToProps(state) {
  return {
    // note lấy trong index.js trong folder reducer
    data: state.note.contents,
  };
}

// gửi action
function mapDispatchToProps(dispatch) {
  return {
    // addNote là action được import ở trên
    dispatchAddNote: (content) => dispatch(addNote(content)),
    dispatchRemoveNote: (content) => dispatch(removeNote(content)),
    dispatchUpdateNote: (content) => dispatch(updateNote(content)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
