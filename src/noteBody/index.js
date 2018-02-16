import React from 'react';
import PropTypes from 'prop-types';
import './noteBody.css';
import BodyTopText from '../bodyTopText';
import TextArea from '../textArea';


class NoteBody extends React.Component {
  render() {
    return (
      <div className="note-body">
        <BodyTopText text="Please type your note below" />
        <TextArea max={this.props.textMax} handleChange={this.props.showCount} contentText={this.props.contentText} />
      </div>
    );
  }
}

NoteBody.defaultProps = {
  textMax: 100,
  showCount: () => {},
  contentText: '',
};

NoteBody.propTypes = {
  textMax: PropTypes.number,
  showCount: PropTypes.func,
  contentText: PropTypes.string,

};


export default NoteBody;

