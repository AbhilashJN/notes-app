import React from 'react';
import PropTypes from 'prop-types';
import './textArea.css';


class textArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currClass: 'text-area',
    };
  }
  checkCount(e) {
    if (e.target.value.length === this.props.max) {
      this.setState({ currClass: 'text-area-red' });
    } else {
      this.setState({ currClass: 'text-area' });
    }
  }
  render() {
    return (
      <div className="body-text-row">
        <textarea
          value={this.props.contentText}
          className={this.state.currClass}
          maxLength={this.props.max}
          onChange={(e) => { this.checkCount(e); this.props.handleChange(e); }}
        />
      </div>
    );
  }
}

textArea.defaultProps = {
  contentText: '',
  max: 0,
  handleChange: () => {},
};

textArea.propTypes = {
  contentText: PropTypes.string,
  max: PropTypes.number,
  handleChange: PropTypes.func,
};


export default textArea;

